import { Button, Flex, Popconfirm, Typography } from 'antd';

import { WorkflowResponse } from '../../common/lib/workflow/api';
import { useAlertMessage } from '../../common/provider/MessageAlertProvider.tsx';
import {
  useDeleteWorkflow,
  useStartWorkflow,
} from '../services/WorkflowService.ts';

export function WorkflowAction({
  workflow,
  refreshList,
}: {
  workflow: WorkflowResponse;
  refreshList: () => void;
}) {
  const alertMessage = useAlertMessage();
  const { mutate: deleteWorkflow } = useDeleteWorkflow(() => {
    alertMessage.success(
      `Workflow ${workflow.name} 이/가 성공적으로 삭제되었습니다.`,
    );
    setTimeout(() => {
      refreshList();
    }, 600);
  });
  const { mutate: startWorkflow } = useStartWorkflow(() => {
    alertMessage.success(
      `Workflow ${workflow.name} 이/가 성공적으로 시작 요청되었습니다.`,
    );
    setTimeout(() => {
      refreshList();
    }, 600);
  });
  return (
    <Flex style={{ gap: '10px' }}>
      <Popconfirm
        title={'Workflow 시작'}
        description={
          <>
            <Typography.Text>
              정말 이 Workflow를 시작하시겠습니까?
            </Typography.Text>
          </>
        }
        onConfirm={() => {
          if (workflow.workflowStatus !== 'Created') {
            alertMessage.error('이 Workflow는 이미 시작되었습니다.');
            return;
          }
          startWorkflow(workflow.id!);
        }}
        onCancel={() => {}}
        okText="Yes"
        cancelText="No"
      >
        <Button>워크플로우 시작</Button>
      </Popconfirm>
      <Popconfirm
        title={'Workflow 삭제'}
        description={
          <>
            <Typography.Text>
              정말 이 Workflow를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
            </Typography.Text>
          </>
        }
        onConfirm={() => {
          deleteWorkflow(workflow.id!);
        }}
        onCancel={() => {}}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>삭제</Button>
      </Popconfirm>
    </Flex>
  );
}
