import { Table } from 'antd';
import { useState } from 'react';

import { CommonPage } from '../../common/component/CommonPage.tsx';
import { CreateWorkflowModalButton } from '../components/CreateWorkflowModalButton.tsx';
import { DatabaseTypeTag } from '../components/DatabaseTypeTag.tsx';
import { WorkflowDetailView } from '../components/WorkflowDetailView.tsx';
import { WorkflowStatusTag } from '../components/WorkflowStatusTag.tsx';
import { useWorkflowListTable } from '../services/WorkflowService.ts';

export function WorkflowListPage() {
  const [refreshKey, setRefreshKey] = useState(new Date().toString());
  const { isLoading, data } = useWorkflowListTable(
    refreshKey,
    false,
    (statusData) => <WorkflowStatusTag status={statusData} />,
    (databaseType) => <DatabaseTypeTag databaseType={databaseType} />,
  );
  return (
    <CommonPage
      pageTitle={'Workflow 리스트'}
      pageDescription={'Workflow들을 관리합니다.'}
    >
      <CreateWorkflowModalButton
        updateList={() => setRefreshKey(new Date().toString())}
      />
      <div
        style={{
          height: 'calc(100vh - 64px - 24px - 24px - 40px - 33px - 48px)',
          overflowX: 'auto',
          overflowY: 'auto',
        }}
      >
        <Table
          style={{
            minWidth: '1024px',
          }}
          columns={data?.columns ?? []}
          dataSource={data?.data ?? []}
          loading={isLoading}
          rowKey={(record) => record.id!}
          expandable={{
            expandedRowRender: (record) => (
              <WorkflowDetailView workflow={record} />
            ),
          }}
        />
      </div>
    </CommonPage>
  );
}
