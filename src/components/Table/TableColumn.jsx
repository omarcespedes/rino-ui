import PropTypes from 'prop-types';

const TableColumn = () => {
    return null;
}

TableColumn.propTypes = {
    header: PropTypes.string,
    accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default TableColumn;