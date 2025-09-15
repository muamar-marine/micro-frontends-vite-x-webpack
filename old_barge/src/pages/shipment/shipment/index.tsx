import React from 'react';

import LayoutDefault from '../../../layouts/default';
import { Table, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { mockShipmentData } from './mock';

type DataType = {
  shipment_number: string;
  cargo_owner_name: string;
  vessel_owner_name: string;
  port_of_loading: string;
  port_of_discharge: string;
  laycan: string;
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Shipment Number',
    dataIndex: 'shipment_number',
    key: 'shipment_number',
    fixed: 'left',
    width: 200,
  },
  {
    title: 'Cargo Owner Name',
    dataIndex: 'cargo_owner_name',
    key: 'cargo_owner_name',
  },
  {
    title: 'Vessel Owner Name',
    dataIndex: 'vessel_owner_name',
    key: 'vessel_owner_name',
  },
  {
    title: 'Port of Loading',
    key: 'port_of_loading',
    dataIndex: 'port_of_loading',
  },
  {
    title: 'Port of Discharge',
    key: 'port_of_discharge',
    dataIndex: 'port_of_discharge',
  },
  {
    title: 'Laycan',
    key: 'laycan',
    dataIndex: 'laycan',
    fixed: 'right',
    width: 200,
  },
];

const ShipmentShipmentPage = () => {
  return (
    <LayoutDefault>
      <Typography.Title level={2}>Shipment</Typography.Title>
      <Table<DataType>
        columns={columns}
        dataSource={mockShipmentData}
        scroll={{ x: 'max-content' }}
      />
    </LayoutDefault>
  );
};

export default ShipmentShipmentPage;
