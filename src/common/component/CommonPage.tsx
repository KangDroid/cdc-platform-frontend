import { PageHeader } from '@ant-design/pro-components';
import { Divider, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ReactNode } from 'react';

import { MessageAlertProvider } from '../provider/MessageAlertProvider.tsx';

export function CommonPage({
  pageTitle,
  pageDescription,
  children,
}: {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <MessageAlertProvider>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <PageHeader
          title={pageTitle}
          subTitle={pageDescription}
          style={{ margin: '0px', padding: '0px' }}
        />
        <Divider
          style={{
            margin: '16px 0',
          }}
        />
        {children}
      </Content>
    </MessageAlertProvider>
  );
}
