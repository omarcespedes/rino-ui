import React from 'react';
import cn from 'classnames';

const Table = ({ children, data, className, type = 'normal', ...rest }) => {

    const columns = React.Children.toArray(children);

    const headerRows = columns.map(column => <th className="rino-table-header" key={`header-${column.props.header}`}>{column.props.header}</th>)

    const isStripped = type === 'stripped';

    const rows = data.map((dataItem, i) => {
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
    )
}

export default Table;