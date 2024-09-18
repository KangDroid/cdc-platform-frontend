import { Table } from 'antd';

import { DatabaseTypeTag } from '../components/DatabaseTypeTag.tsx';
import { WorkflowStatusTag } from '../components/WorkflowStatusTag.tsx';
import { useWorkflowListTable } from '../services/WorkflowService.ts';

export function WorkflowListPage() {
  const { isLoading, data } = useWorkflowListTable(
    new Date().toString(),
    false,
    (statusData) => <WorkflowStatusTag status={statusData} />,
    (databaseType) => <DatabaseTypeTag databaseType={databaseType} />,
  );
  return (
    <Table
      loading={isLoading}
      columns={data?.columns}
      dataSource={data?.data}
    />
  );
}
