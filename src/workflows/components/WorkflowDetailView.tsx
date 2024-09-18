import { Descriptions, Tabs } from 'antd';

import { WorkflowResponse } from '../../common/lib/workflow/api';

export function WorkflowDetailView({
  workflow,
}: {
  workflow: WorkflowResponse;
}) {
  return (
    <Tabs
      items={[
        {
          key: '1',
          label: 'Workflow 상세 정보',
          children: (
            <Descriptions
              title="Workflow 상세 정보"
              size={'small'}
              column={1}
              bordered
              items={[
                {
                  key: 'ID',
                  label: 'ID',
                  children: workflow.id,
                },
                {
                  key: 'name',
                  label: '이름',
                  children: workflow.name,
                },
                {
                  key: 'createdBy',
                  label: '생성자',
                  children: workflow.createdBy,
                },
                {
                  key: 'createdAt',
                  label: '생성일',
                  children: workflow.createdAt,
                },
                {
                  key: 'updatedAt',
                  label: '최근 수정일',
                  children: workflow.updatedAt,
                },
                {
                  key: 'status',
                  label: '상태',
                  children: workflow.workflowStatus,
                },
              ]}
            />
          ),
        },
        {
          key: '2',
          label: 'Source Database 정보',
          children: (
            <Descriptions
              title={'Source Database 정보'}
              size={'small'}
              column={1}
              bordered
              items={[
                {
                  key: 'sourceDatabaseType',
                  label: 'Database 종류',
                  children: workflow.sourceMetadata?.databaseType,
                },
                {
                  key: 'sourceDatabaseHost',
                  label: 'Host',
                  children: workflow.sourceMetadata?.host,
                },
                {
                  key: 'sourceDatabasePort',
                  label: 'Port',
                  children: workflow.sourceMetadata?.port,
                },
                {
                  key: 'sourceDatabaseName',
                  label: 'Database Name',
                  children: workflow.sourceMetadata?.targettedDatabaseName,
                },
                {
                  key: 'sourceDatabaseUsername',
                  label: 'Username',
                  children: workflow.sourceMetadata?.username,
                },
              ]}
            />
          ),
        },
        {
          key: '3',
          label: 'Target Database 정보',
          children: (
            <Descriptions
              title={'Target Database 정보'}
              size={'small'}
              column={1}
              bordered
              items={[
                {
                  key: 'targetDatabaseType',
                  label: 'Database 종류',
                  children: workflow.targetMetadata?.databaseType,
                },
                {
                  key: 'targetDatabaseHost',
                  label: 'Host',
                  children: workflow.targetMetadata?.host,
                },
                {
                  key: 'targetDatabasePort',
                  label: 'Port',
                  children: workflow.targetMetadata?.port,
                },
                {
                  key: 'targetDatabaseName',
                  label: 'Database Name',
                  children: workflow.targetMetadata?.targettedDatabaseName,
                },
                {
                  key: 'targetDatabaseUsername',
                  label: 'Username',
                  children: workflow.targetMetadata?.username,
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
}
