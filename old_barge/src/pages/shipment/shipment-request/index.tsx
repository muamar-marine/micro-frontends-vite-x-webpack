import { Table, Typography } from 'antd';
import LayoutDefault from '../../../layouts/default';
import { ColumnsType } from 'antd/lib/table';
import { mockShipmentRequestData } from './mock';

type DataType = {
  shipment_request_number: string;
  cargo_owner_name: string;
  port_of_loading: string;
  port_of_discharge: string;
  laycan: string;
  load_type_information: string[];
};

const columns: ColumnsType<DataType> = [
  {
    title: 'SR#',
    dataIndex: 'shipment_request_number',
    key: 'shipment_request_number',
    fixed: 'left',
    width: 200,
  },
  {
    title: 'Cargo Owner Name',
    dataIndex: 'cargo_owner_name',
    key: 'cargo_owner_name',
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
  },
  {
    title: 'Load Type Information',
    key: 'load_type_information',
    dataIndex: 'load_type_information',
    render: (v) => v.join(', '),
  },
];

const ShipmentShipmentRequestPage = () => {
  return (
    <LayoutDefault>
      <Typography.Title level={2}>Shipment Request</Typography.Title>
      <Table<DataType>
        columns={columns}
        dataSource={mockShipmentRequestData}
        scroll={{ x: 'max-content' }}
      />
    </LayoutDefault>
  );
};

export default ShipmentShipmentRequestPage;
