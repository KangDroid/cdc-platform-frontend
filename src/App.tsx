import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginCallbackPage } from './auth/pages/LoginCallbackPage.tsx';
import { LoginPage } from './auth/pages/LoginPage.tsx';
import { RegisterPage } from './auth/pages/RegisterPage.tsx';
import { CustomErrorBoundary } from './common/component/CustomErrorBoundary.tsx';
import { MainLayout } from './common/component/MainLayout.tsx';
import { useSystemConfig } from './common/provider/SystemConfigProvider.tsx';
import { HomePage } from './home/pages/HomePage.tsx';
import { NotFoundPage } from './home/pages/NotFoundPage.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

function App() {
  const { currentTheme } = useSystemConfig();
  return (
    <CustomErrorBoundary>
      <ConfigProvider
        theme={{
          algorithm:
            currentTheme === 'light'
              ? theme.defaultAlgorithm
              : theme.darkAlgorithm,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/callback" element={<LoginCallbackPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ConfigProvider>
    </CustomErrorBoundary>
  );
}

export default App;
