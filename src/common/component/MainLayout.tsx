import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { MeProvider } from '../provider/MeProvider.tsx';
import { LocalStorageUtils } from '../utils/LocalStroageUtils.ts';

const { Header, Sider, Content } = Layout;

export function MainLayout() {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(LocalStorageUtils.getSideBar());
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <MeProvider>
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
          <Header style={{ padding: 0, background: colorBgContainer }}>
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
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </MeProvider>
  );
}
