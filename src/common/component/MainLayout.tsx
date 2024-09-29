import {
  BulbOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { NotificationHeaderButton } from '../../notifications/components/NotificationHeaderButton.tsx';
import { MeProvider } from '../provider/MeProvider.tsx';
import { useSystemConfig } from '../provider/SystemConfigProvider.tsx';
import { UserNotificationProvider } from '../provider/UserNotificationProvider.tsx';
import { LocalStorageUtils } from '../utils/LocalStroageUtils.ts';

const { Header, Sider } = Layout;

export function MainLayout() {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(LocalStorageUtils.getSideBar());
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const { currentTheme, toggleTheme } = useSystemConfig();
  return (
    <MeProvider>
      <UserNotificationProvider>
        <Layout
          style={{
            height: '100vh',
          }}
        >
          <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
            <div
              style={{
                height: 32,
                margin: 16,
                borderRadius: '6px',
                background: 'rgba(255,255,255,.2)',
              }}
            />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[pathname]}
              onClick={(info) => navigate(info.key)}
              items={[
                {
                  key: '/',
                  icon: <DashboardOutlined />,
                  label: 'Dashboard',
                },
                {
                  key: '/workflows',
                  icon: <VideoCameraOutlined />,
                  label: 'Workflow Projects',
                },
                {
                  key: '/workflows/history',
                  icon: <UploadOutlined />,
                  label: 'Workflow History',
                },
                {
                  key: '/settings',
                  icon: <UploadOutlined />,
                  label: 'Settings',
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  LocalStorageUtils.setSideBar(!collapsed);
                  setCollapsed(!collapsed);
                }}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <Flex
                style={{
                  alignItems: 'center',
                }}
              >
                <NotificationHeaderButton />
                <Button
                  type={'text'}
                  icon={
                    currentTheme === 'light' ? (
                      <MoonOutlined />
                    ) : (
                      <BulbOutlined />
                    )
                  }
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                  onClick={toggleTheme}
                />
              </Flex>
            </Header>
            <Outlet />
          </Layout>
        </Layout>
      </UserNotificationProvider>
    </MeProvider>
  );
}
