import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Flex, Typography } from 'antd';

import {
  NotificationResponse,
  NotificationSeverity,
} from '../../common/lib/notification/api';

export function NotificationItem({
  notification,
}: {
  notification: NotificationResponse;
}) {
  return (
    <Flex
      style={{
        gap: '10px',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Avatar icon={<NotificationIcon severity={notification.severity} />} />
      <div
        style={{
          width: '480px',
        }}
      >
        <Typography.Text strong style={{ display: 'block' }}>
          {notification.title}
        </Typography.Text>
        <Typography.Text style={{ display: 'block' }}>
          {notification.content}
        </Typography.Text>
        <Typography.Text type={'secondary'}>
          {new Date(notification.createdAt).toLocaleString()}
        </Typography.Text>
      </div>
      <Flex
        style={{
          alignItems: 'center',
        }}
      >
        <Button type="link">읽음</Button>
      </Flex>
    </Flex>
  );
}

function NotificationIcon({ severity }: { severity: NotificationSeverity }) {
  switch (severity) {
    case NotificationSeverity.Informational:
      return <InfoCircleOutlined />;
    case NotificationSeverity.Success:
      return <CheckCircleOutlined />;
    case NotificationSeverity.Error:
      return <ExclamationCircleOutlined />;
    default:
      return <InfoCircleOutlined />;
  }
}
