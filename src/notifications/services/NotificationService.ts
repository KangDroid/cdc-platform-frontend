import { useQuery } from '@tanstack/react-query';

import { notificationApi } from '../../common/api/api.ts';

export const useUserNotifications = () => {
  return useQuery({
    queryKey: ['userNotifications'],
    queryFn: async () => {
      const response = await notificationApi.getNotifications();
      return response.data;
    },
  });
};
