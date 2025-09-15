import { Table, Tag, Typography } from 'antd';
import React from 'react';
import { mockShipmentRecapData } from './mock';
import type { ColumnsType } from 'antd/es/table';

// @ts-expect-error Error types
const DefaultLayout = React.lazy(() => import('shell/layouts/default'));

type DataType = {
  shipment_recap_id: string;
  co_group: string;
  shipment_number: string;
  vessel_operator_name: string;
  vessel_name: string;
  barge_name: string;
  status: string;
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Shipment Recap ID',
    dataIndex: 'shipment_recap_id',
    key: 'shipment_recap_id',
    fixed: 'left',
    width: 200,
  },
  {
    title: 'CO Group',
    dataIndex: 'co_group',
    key: 'co_group',
  },
  {
    title: 'Shipment Number',
    dataIndex: 'shipment_number',
    key: 'shipment_number',
  },
  {
    title: 'Vessel Operator Name',
    key: 'vessel_operator_name',
    dataIndex: 'vessel_operator_name',
  },
  {
    title: 'Vessel Name',
    key: 'vessel_name',
    dataIndex: 'vessel_name',
  },
  {
    title: 'Barge Name',
    key: 'barge_name',
    dataIndex: 'barge_name',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (v) => <Tag>{v}</Tag>,
  },
];

const FinanceShipmentRecapPage = () => {
  return (
    <DefaultLayout>
      <Typography.Title level={2}>Shipment Recap</Typography.Title>

      <Table<DataType>
        columns={columns}
        dataSource={mockShipmentRecapData}
        scroll={{ x: 'max-content' }}
      />
    </DefaultLayout>
  );
};

export default FinanceShipmentRecapPage;
