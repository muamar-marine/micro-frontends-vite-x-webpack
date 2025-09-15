import { Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { mockCargoOwnersData } from './mock';

// @ts-expect-error Error types
const DefaultLayout = React.lazy(() => import('shell/layouts/default'));

type DataType = {
  cargo_owner_name: string;
  cargo_owner_code: string;
  industry: string;
  address: string;
  tag: string[];
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Cargo Owner Name',
    dataIndex: 'cargo_owner_name',
    key: 'cargo_owner_name',
    fixed: 'left',
    width: 200,
  },
  {
    title: 'Cargo Owner Code',
    dataIndex: 'cargo_owner_code',
    key: 'cargo_owner_code',
  },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
  },
  {
    title: 'Address',
    key: 'address',
    dataIndex: 'address',
  },
  {
    title: 'Tag',
    key: 'tag',
    dataIndex: 'tag',
    render: (v) => (
      <>
        {v.map((s: string) => (
          <Tag>{s}</Tag>
        ))}
      </>
    ),
  },
];

const ProfileVesselOwnerPage = () => {
  return (
    <DefaultLayout>
      <Typography.Title level={2}>Cargo Owner Profile</Typography.Title>
      <Table<DataType>
        columns={columns}
        dataSource={mockCargoOwnersData}
        scroll={{ x: 'max-content' }}
      />
    </DefaultLayout>
  );
};

export default ProfileVesselOwnerPage;
