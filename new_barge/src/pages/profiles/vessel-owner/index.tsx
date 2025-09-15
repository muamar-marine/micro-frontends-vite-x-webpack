import { Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { mockVesselOwnersData } from './mock';

// @ts-expect-error Error types
const DefaultLayout = React.lazy(() => import('shell/layouts/default'));

type DataType = {
  vessel_owner_name: string;
  vessel_owner_code: string;
  coverage_area: string;
  tag: string[];
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Vessel Owner Name',
    dataIndex: 'vessel_owner_name',
    key: 'vessel_owner_name',
    fixed: 'left',
    width: 200,
  },
  {
    title: 'Vessel Owner Code',
    dataIndex: 'vessel_owner_code',
    key: 'vessel_owner_code',
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
      <Typography.Title level={2}>Vessel Owner Profile</Typography.Title>
      <Table<DataType>
        columns={columns}
        dataSource={mockVesselOwnersData}
        scroll={{ x: 'max-content' }}
      />
    </DefaultLayout>
  );
};

export default ProfileVesselOwnerPage;
