import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginCallbackPage } from './auth/pages/LoginCallbackPage.tsx';
import { LoginPage } from './auth/pages/LoginPage.tsx';
import { RegisterPage } from './auth/pages/RegisterPage.tsx';
import { CustomErrorBoundary } from './common/component/CustomErrorBoundary.tsx';

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
  return (
    <CustomErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/callback" element={<LoginCallbackPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CustomErrorBoundary>
  );
}

export default App;
