import { Tag } from 'antd';

import { WorkflowStatus } from '../../common/lib/workflow/api';

export function WorkflowStatusTag({ status }: { status: WorkflowStatus }) {
  switch (status) {
    case 'Created':
      return <Tag color="blue">Created</Tag>;
    case 'Started':
      return <Tag color="green">Started</Tag>;
    case 'InProgress':
      return <Tag color="orange">InProgress</Tag>;
    case 'Cancelled':
      return <Tag color="red">Cancelled</Tag>;
    case 'Failed':
      return <Tag color="red">Failed</Tag>;
    default:
      return status;
  }
}
