import { NotificationOutlined } from '@ant-design/icons';
import { Badge, Button, Dropdown, Empty, Flex } from 'antd';
import { useState } from 'react';

import { useUserNotificationContext } from '../../common/provider/UserNotificationProvider.tsx';
import { NotificationItem } from './NotificationItem.tsx';

export function NotificationHeaderButton() {
  const globalState = useUserNotificationContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const emptyMenu = {
    key: 'empty',
    label: (
      <Empty
        description={'알림이 없습니다.'}
        style={{
          width: '480px',
        }}
      />
    ),
  };
  return (
    <Dropdown
      open={dropdownOpen}
      menu={{
        selectable: false,
        items:
          globalState.unreadNotificationList.length > 0
            ? globalState.unreadNotificationList.map((data) => ({
                key: data.id,
                label: (
                  <NotificationItem
                    notification={data}
                    readNotification={(id) =>
                      globalState.setNotificationRead(id)
                    }
                  />
                ),
              }))
            : [emptyMenu],
      }}
      trigger={['click']}
      onOpenChange={(open, info) => {
        if (info.source === 'trigger') {
          setDropdownOpen(open);
        }
      }}
    >
      <Button
        type={'text'}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      >
        <Badge count={globalState.unreadNotificationList.length}>
          <Flex
            style={{
              width: 32,
              height: 32,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <NotificationOutlined
              style={{
                fontSize: '16px',
              }}
            />
          </Flex>
        </Badge>
      </Button>
    </Dropdown>
  );
}
