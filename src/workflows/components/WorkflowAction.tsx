import { Button, Popconfirm, Typography } from 'antd';

import { WorkflowResponse } from '../../common/lib/workflow/api';
import { useAlertMessage } from '../../common/provider/MessageAlertProvider.tsx';
import { useDeleteWorkflow } from '../services/WorkflowService.ts';

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
  return (
    <>
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
    </>
  );
}
