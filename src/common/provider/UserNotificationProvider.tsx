import { notification } from 'antd';
import React, { createContext, useContext, useState } from 'react';

import { useLiveNotification } from '../../notifications/services/NotificationService.ts';
import { NotificationResponse } from '../lib/notification/api';

type UserNotificationStateType = {
  unreadNotificationList: NotificationResponse[];
  setNotificationRead: (notificationId: string) => void;
};

const UserNotificationContext = createContext<
  UserNotificationStateType | undefined
>(undefined);

export const useUserNotificationContext = () => {
  const context = useContext(UserNotificationContext);
  if (context === undefined) {
    throw new Error(
      'useUserNotificationContext must be used within a UserNotificationProvider',
    );
  }
  return context;
};

export function UserNotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [api, contextHolder] = notification.useNotification();
  const [unreadNotificationList, setUnreadNotificationList] = useState<
    NotificationResponse[]
  >([]);
  const { data: hubConnection } = useLiveNotification(
    (notifications: NotificationResponse[]) => {
      setUnreadNotificationList(
        notifications.filter((data) => data.readAt === null),
      );
    },
    (notification: NotificationResponse) => {
      setUnreadNotificationList((prev) => [...prev, notification]);
      api.open({
        message: notification.title,
        description: notification.content,
        showProgress: true,
        type: 'info',
      });
    },
  );
  const setNotificationRead = (notificationId: string) => {
    setUnreadNotificationList((prev) =>
      prev.filter((n) => n.id !== notificationId),
    );
    hubConnection?.invoke('MarkNotificationAsRead', notificationId);
  };

  return (
    <UserNotificationContext.Provider
      value={{
        unreadNotificationList,
        setNotificationRead,
      }}
    >
      {children}
      {contextHolder}
    </UserNotificationContext.Provider>
  );
}
