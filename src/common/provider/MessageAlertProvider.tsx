import { message } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import { ReactNode, createContext, useContext } from 'react';

const MessageContext = createContext<MessageInstance | undefined>(undefined);

export const useAlertMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useAlertMessage must be used within a MessageProvider');
  }

  return context;
};

export function MessageAlertProvider({ children }: { children: ReactNode }) {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
}
