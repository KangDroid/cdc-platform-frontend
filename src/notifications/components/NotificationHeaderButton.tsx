import { NotificationOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';

import { useUserNotifications } from '../services/NotificationService.ts';
import { NotificationItem } from './NotificationItem.tsx';

export function NotificationHeaderButton() {
  const { data } = useUserNotifications();
  return (
    <Dropdown
      menu={{
        items:
          data?.map((data) => ({
            key: data.id,
            label: <NotificationItem notification={data} />,
          })) ?? [],
      }}
    >
      <Button
        type={'text'}
        icon={<NotificationOutlined />}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Dropdown>
  );
}
