import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginCallbackPage } from './auth/pages/LoginCallbackPage.tsx';
import { LoginPage } from './auth/pages/LoginPage.tsx';
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
    <QueryClientProvider client={queryClient}>
      <CustomErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/callback" element={<LoginCallbackPage />} />
          </Routes>
        </BrowserRouter>
      </CustomErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
