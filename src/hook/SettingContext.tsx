import { createContext, useContext, useMemo, useCallback } from 'react';
// hooks
import useLocalStorage from './useLocalStorage';
// utils
//
import { defaultSettings } from './config-setting';
import { SettingsContextProps } from './types';

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
  onToggleStatusMode: () => {},
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', defaultSettings);
  const [sideStatus, setSideStatus] = useLocalStorage('sideStatus', defaultSettings);

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light';
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const onToggleStatusMode = useCallback(() => {
    const statusMode = sideStatus.statusMode === 'expand' ? 'collapse' : 'expand';
    setSideStatus({...sideStatus, statusMode});
  }, [setSideStatus, sideStatus])

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      ...sideStatus,
      onToggleMode,
      onToggleStatusMode,
    }),
    [
      settings,
      sideStatus,
      onToggleMode,
      onToggleStatusMode,
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
