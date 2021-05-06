import React, { useState } from 'react';
import cn from 'classnames';
import TablePagination from './TablePagination';

const Table = ({
    children,
    data,
    className,
    type = 'normal',
    usePagination,
    pageSize,
    ...rest
}) => {
    const [page, setPage] = useState(1);
    const columns = React.Children.toArray(children);

    const headerRows = columns.map(column => <th className="rino-table-header" key={`header-${column.props.header}`}>{column.props.header}</th>)

    const isStripped = type === 'stripped';
    let tableData = data;

    if (usePagination) {
        tableData = data.slice(
            pageSize * (page - 1),
            Math.min(data.length, pageSize * page)
        );
    }

    const rows = tableData.map((dataItem, i) => {
        const { id } = dataItem;

        return (
            <tr key={`row-${id}`} className={cn('rino-table-row', {
                even: isStripped && i % 2 === 0,
                odd: isStripped && i % 2 !== 0
            })}>
                {columns.map((column, j) => {
                    const { accessor } = column.props;
                    let value = '';

                    if (typeof accessor === 'string') {
                        value = dataItem[accessor];
                    } else if (typeof accessor === 'function') {
                        value = accessor(dataItem);
                    }

                    return (
                        <td className="rino-table-cell" key={`cell-${id}-${j}`}>
                            {value}
                        </td>
                    )
                })}
            </tr>
        )
    })

    return (
        <div className="rino-table-container">
            <table className={cn('rino-table', { [className]: !!className })} {...rest}>
                <thead>
                    <tr>
                        {headerRows}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            {usePagination && (
                <TablePagination
                    total={data.length}
                    pageSize={pageSize}
                    page={page}
                    onPageChange={setPage} />
            )}
        </div>
    )
}

export default Table;