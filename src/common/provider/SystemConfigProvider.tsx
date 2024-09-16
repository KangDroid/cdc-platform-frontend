import { ReactNode, createContext, useContext, useState } from 'react';

type SystemConfigState = {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
};

const SystemConfigContext = createContext<SystemConfigState | undefined>(
  undefined,
);

export const useSystemConfig = () => {
  const context = useContext(SystemConfigContext);
  if (context === undefined) {
    throw new Error(
      'useSystemConfig must be used within a SystemConfigProvider',
    );
  }
  return context;
};

export function SystemConfigProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const setTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <SystemConfigContext.Provider
      value={{ currentTheme, toggleTheme: setTheme }}
    >
      {children}
    </SystemConfigContext.Provider>
  );
}
