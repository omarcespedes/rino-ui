import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const TablePagination = ({
    total,
    page,
    pageSize,
    onPageChange
}) => {

    const renderPageButton = (page, currentPage) => {
        return (
            <Button
                size="sm"
                appearance={currentPage === page ? 'filled' : 'outlined'}
                color="primary"
                onClick={() => onPageChange(page)}>
                {page}
            </Button>
        );
    }

    const renderPages = (start, total, pageSize) => {
        const currentPage = Math.floor(start / pageSize) + 1;
        const pageCount = Math.ceil(total / pageSize);

        // calculate pages to display between first and last page
        const pages = [];
        let fromPage = currentPage - 1;
        if (fromPage <= 1) {
            fromPage = 2;
        }
        let toPage = fromPage + 2;
        if (toPage >= pageCount) {
            toPage = pageCount - 1;
            fromPage = toPage - 2;
            if (fromPage <= 1) {
                fromPage = 2;
            }
        }

        for (let i = fromPage; i <= toPage; i++) {
            if (i < pageCount) {
                pages[pages.length] = i;
            }
        }

        return (
            <ul className="rino-pagination">
                {pageCount > 1 &&
                    <li>
                        <Button
                            size="sm"
                            appearance="outlined"
                            isDisabled={currentPage <= 1}
                            onClick={() => {
                                if (currentPage > 1) {
                                    onPageChange(currentPage - 1);
                                }
                            }}
                            icon={<Icon icon="arrow-left" />} />
                    </li>
                }
                <li>
                    {renderPageButton(1, currentPage, pageCount)}
                </li>
                {pages.length > 0 && pages[0] !== 2 &&
                    <li>...</li>
                }
                {pages.map((page) => {
                    return (
                        <li key={page}>
                            {renderPageButton(page, currentPage, pageCount)}
                        </li>
                    );
                })}
                {pages.length > 0 && pageCount - 1 !== pages[pages.length - 1] &&
                    <li>...</li>
                }
                {pageCount > 1 && (
                    <>
                        <li>
                            {renderPageButton(pageCount, currentPage, pageCount)}
                        </li>
                        <li>
                            <Button
                                size="sm"
                                appearance="outlined"
                                isDisabled={currentPage >= pageCount}
                                onClick={() => {
                                    if (currentPage < pageCount) {
                                        onPageChange(currentPage + 1);
                                    }
                                }}
                                icon={<Icon icon="arrow-right" />} />
                        </li>
                    </>
                )}
            </ul>
        );
    }

    const pageCount = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;

    if (total < pageSize) {
        pageSize = total;
    }

    return (
        <div className="rino-table-pagination">
            {pageCount > 1 && renderPages(start, total, pageSize)}
        </div>
    )
}

export default TablePagination;