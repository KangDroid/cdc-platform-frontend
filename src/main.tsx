import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { SystemConfigProvider } from './common/provider/SystemConfigProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <SystemConfigProvider>
    <App />
  </SystemConfigProvider>,
);
