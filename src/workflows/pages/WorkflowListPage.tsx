import { Button, Flex, Table } from 'antd';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CommonPage } from '../../common/component/CommonPage.tsx';
import { CreateWorkflowModalButton } from '../components/CreateWorkflowModalButton.tsx';
import { DatabaseTypeTag } from '../components/DatabaseTypeTag.tsx';
import { WorkflowAction } from '../components/WorkflowAction.tsx';
import { WorkflowDetailView } from '../components/WorkflowDetailView.tsx';
import { WorkflowStatusTag } from '../components/WorkflowStatusTag.tsx';
import { useWorkflowListTable } from '../services/WorkflowService.ts';

export function WorkflowListPage() {
  const [searchParameters, setSearchParams] = useSearchParams();
  const [showDeleted, setShowDeleted] = useState(
    searchParameters.get('showDeleted') === 'true',
  );
  const [refreshKey, setRefreshKey] = useState(new Date().toString());
  const { isLoading, data } = useWorkflowListTable(
    refreshKey,
    showDeleted,
    (statusData) => <WorkflowStatusTag status={statusData} />,
    (databaseType) => <DatabaseTypeTag databaseType={databaseType} />,
    (workflow) => (
      <WorkflowAction
        workflow={workflow}
        refreshList={() => setRefreshKey(new Date().toString())}
      />
    ),
  );
  return (
    <CommonPage
      pageTitle={'Workflow 리스트'}
      pageDescription={'Workflow들을 관리합니다.'}
    >
      <Flex style={{ gap: '10px' }}>
        <CreateWorkflowModalButton
          updateList={() => setRefreshKey(new Date().toString())}
        />
        <Button
          onClick={() => {
            setSearchParams({ showDeleted: showDeleted ? 'false' : 'true' });
            setShowDeleted(!showDeleted);
          }}
        >
          삭제된 워크플로우 {showDeleted ? '숨기기' : '보이기'}
        </Button>
      </Flex>
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
