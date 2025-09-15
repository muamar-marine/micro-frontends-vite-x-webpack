import { Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { mockDebitNoteData } from './mock';

// @ts-expect-error Error types
const DefaultLayout = React.lazy(() => import('shell/layouts/default'));

type DataType = {
  date: string;
  debit_note_number: string;
  vendor_name: string;
  vessel_name: string;
  reimbursement_type: string;
  status: string;
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    fixed: 'left',
    width: 200,
  },
  {
    title: 'Debit Note Number',
    dataIndex: 'debit_note_number',
    key: 'debit_note_number',
  },
  {
    title: 'Vendor Name',
    key: 'vendor_name',
    dataIndex: 'vendor_name',
  },
  {
    title: 'Vessel Name',
    key: 'vessel_name',
    dataIndex: 'vessel_name',
  },
  {
    title: 'Reimbursement Type',
    key: 'reimbursement_type',
    dataIndex: 'reimbursement_type',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (v) => <Tag>{v}</Tag>,
  },
];

const FinanceDebitNotePage = () => {
  return (
    <DefaultLayout>
      <Typography.Title level={2}>Debit Note</Typography.Title>
      <Table<DataType>
        columns={columns}
        dataSource={mockDebitNoteData}
        scroll={{ x: 'max-content' }}
      />
    </DefaultLayout>
  );
};

export default FinanceDebitNotePage;
