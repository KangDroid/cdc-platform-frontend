import { useMutation, useQuery } from '@tanstack/react-query';
import { TableProps } from 'antd';
import { ReactNode } from 'react';

import { workflowApi, workflowConnectionApi } from '../../common/api/api.ts';
import {
  CreateWorkflowRequest,
  DatabaseMetadata,
  DatabaseType,
  SourceConnectionVerificationResponse,
  TargetConnectionVerificationResponse,
  WorkflowResponse,
  WorkflowStatus,
} from '../../common/lib/workflow/api';

export const useWorkflowListTable = (
  refreshKey: string,
  includeDeleted: boolean,
  renderStatus: (status: WorkflowStatus) => ReactNode,
  renderDatabaseType: (databaseType: DatabaseType) => ReactNode,
  renderAction: (workflow: WorkflowResponse) => ReactNode,
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
        {
          title: 'Action',
          key: 'action',
          render: (record) => renderAction(record),
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

export const useDeleteWorkflow = (afterDelete: () => void) => {
  return useMutation({
    mutationKey: ['deleteWorkflow'],
    mutationFn: async (id: string) => {
      await workflowApi.deleteWorkflowAsync(id);
    },
    onSuccess: afterDelete,
  });
};

export const useStartWorkflow = (afterStart: () => void) => {
  return useMutation({
    mutationKey: ['startWorkflow'],
    mutationFn: async (id: string) => {
      await workflowApi.startWorkflowAsync(id);
    },
    onSuccess: afterStart,
  });
};

export const useDatabaseSourceHealthCheck = (
  onSuccess: (response: SourceConnectionVerificationResponse) => void,
) => {
  return useMutation({
    mutationKey: ['databaseSourceHealthCheck'],
    mutationFn: async (databaseMeta: DatabaseMetadata) => {
      const response =
        await workflowConnectionApi.verifySourceConnectionAsync(databaseMeta);
      return response.data;
    },
    onSuccess: onSuccess,
  });
};

export const useDatabaseTargetHealthCheck = (
  onSuccess: (response: TargetConnectionVerificationResponse) => void,
) => {
  return useMutation({
    mutationKey: ['databaseTargetHealthCheck'],
    mutationFn: async (databaseMeta: DatabaseMetadata) => {
      const response =
        await workflowConnectionApi.verifyDestinationConnectionAsync(
          databaseMeta,
        );
      return response.data;
    },
    onSuccess: onSuccess,
  });
};
