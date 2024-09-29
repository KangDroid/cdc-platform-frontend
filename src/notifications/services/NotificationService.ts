import { HubConnectionBuilder } from '@microsoft/signalr';
import { useQuery } from '@tanstack/react-query';

import { notificationApi } from '../../common/api/api.ts';
import { API_BASE_URL } from '../../common/config/config.ts';
import { NotificationResponse } from '../../common/lib/notification/api';
import { LocalStorageUtils } from '../../common/utils/LocalStroageUtils.ts';

export const useUserNotifications = () => {
  return useQuery({
    queryKey: ['userNotifications'],
    queryFn: async () => {
      const response = await notificationApi.getNotifications();
      return response.data;
    },
  });
};

export const useLiveNotification = (
  onInitializeNotifications: (notifications: NotificationResponse[]) => void,
  onReceiveNotification: (notification: NotificationResponse) => void,
) => {
  return useQuery({
    queryKey: ['liveNotification'],
    queryFn: async () => {
      const connection = new HubConnectionBuilder()
        .withUrl(`${API_BASE_URL}/notifications/hub`, {
          accessTokenFactory(): string | Promise<string> {
            return LocalStorageUtils.getAccessToken()!;
          },
        })
        .withAutomaticReconnect()
        .build();

      connection.on(
        'InitializeNotifications',
        (message: NotificationResponse[]) => {
          onInitializeNotifications(message);
        },
      );

      connection.on(
        'ReceiveNotification',
        (notification: NotificationResponse) => {
          onReceiveNotification(notification);
        },
      );

      await connection.start();
      return connection;
    },
  });
};
