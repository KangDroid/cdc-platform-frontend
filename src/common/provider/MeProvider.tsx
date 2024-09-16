import { Flex, Spin } from 'antd';
import { ReactNode, createContext, useContext } from 'react';

import { useMyInformation } from '../../auth/services/AuthService.ts';

type MeProviderStateType = {
  userId: string;
  userName: string;
  userEmail: string;
  userProfileImageUrl: string | undefined;
};

const MeContext = createContext<MeProviderStateType | undefined>(undefined);

export const useMeContext = () => {
  const context = useContext(MeContext);
  if (context === undefined) {
    throw new Error('useMeContext must be used within a MeProvider');
  }
  return context;
};

export function MeProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = useMyInformation();

  if (!data || isLoading) {
    return (
      <Flex
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spin tip={'로딩 중...'} />
      </Flex>
    );
  }

  return (
    <MeContext.Provider
      value={{
        userId: data.userId,
        userName: data.name,
        userEmail: data.email,
        userProfileImageUrl: data.profilePictureImageUrl ?? undefined,
      }}
    >
      {children}
    </MeContext.Provider>
  );
}
