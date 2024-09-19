import { useMutation, useQuery } from '@tanstack/react-query';
import { TableProps } from 'antd';
import { ReactNode } from 'react';

import { workflowApi } from '../../common/api/api.ts';
import {
  CreateWorkflowRequest,
  DatabaseType,
  WorkflowResponse,
  WorkflowStatus,
} from '../../common/lib/workflow/api';

export const useWorkflowListTable = (
  refreshKey: string,
  includeDeleted: boolean,
  renderStatus: (status: WorkflowStatus) => ReactNode,
  renderDatabaseType: (databaseType: DatabaseType) => ReactNode,
) => {
  return useQuery({
    queryKey: ['listWorkflow', refreshKey, includeDeleted],
    queryFn: async () => {
      const response = await workflowApi.listWorkflowAsync(includeDeleted);

      const columns: TableProps<WorkflowResponse>['columns'] = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Status',
          key: 'workflowStatus',
          render: (record) => renderStatus(record.workflowStatus),
        },
        {
          title: 'Source DB',
          key: 'sourceMetadata.databaseType',
          render: (record) =>
            renderDatabaseType(record.sourceMetadata.databaseType),
        },
        {
          title: 'Target DB',
          key: 'targetMetadata.databaseType',
          render: (record) =>
            renderDatabaseType(record.targetMetadata.databaseType),
        },
      ];

      return {
        columns: columns,
        data: response.data,
      };
    },
  });
};

export const useCreateWorkflow = (afterCreation: () => void) => {
  return useMutation({
    mutationKey: ['createWorkflow'],
    mutationFn: async (data: CreateWorkflowRequest) => {
      await workflowApi.createWorkflowAsync(data);
    },
    onSuccess: afterCreation,
  });
};
