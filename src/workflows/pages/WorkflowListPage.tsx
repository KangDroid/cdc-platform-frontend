import { Table } from 'antd';

import { CommonPage } from '../../common/component/CommonPage.tsx';
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
    <CommonPage
      pageTitle={'Workflow 리스트'}
      pageDescription={'Workflow들을 관리합니다.'}
    >
      <Table
        loading={isLoading}
        columns={data?.columns}
        dataSource={data?.data}
      />
    </CommonPage>
  );
}
