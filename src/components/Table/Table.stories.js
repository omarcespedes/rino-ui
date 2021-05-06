import React from 'react';

import Table from './Table';
import TableColumn from './TableColumn';
import { DataForTablePagination } from './TableDataStorybook';

export default {
    title: 'UI Elements/Table',
    component: Table,
};

const tableData = [
    {
        id: 1,
        name: 'John',
        lastName: 'Smith',
        email: 'test@test.com',
    },
    {
        id: 2,
        name: 'John2',
        lastName: 'Smith2',
        email: 'test@test.com2',
    },
    {
        id: 3,
        name: 'John3',
        lastName: 'Smith3',
        email: 'test@test.com3',
    },
];

const Template = (args) => {
    return (
        <Table {...args}>
            <TableColumn header="ID" accessor="id" />
            <TableColumn header="Name" accessor="name" />
            <TableColumn header="Last Name" accessor="lastName" />
            <TableColumn header="Email" accessor="email" />
        </Table>
    );
};

export const TableBasic = Template.bind({});
TableBasic.args = {
    className: 'test',
    data: tableData,
};

export const TableStripped = Template.bind({});
TableStripped.args = {
    className: 'test',
    data: tableData,
    type: 'stripped',
};

export const TableWithPagination = Template.bind({});
TableWithPagination.args = {
    className: 'test',
    usePagination: true,
    data: DataForTablePagination,
    pageSize: 3,
};
