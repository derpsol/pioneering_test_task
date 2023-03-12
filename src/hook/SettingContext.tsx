import { createContext, useContext, useMemo, useCallback } from 'react';
import useLocalStorage from './useLocalStorage';
import { defaultSettings } from './config-setting';
import { SettingsContextProps } from './types';

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

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light';
    setSettings({ ...settings, themeMode });
    console.log(themeMode);
  }, [setSettings, settings]);

  const onToggleStatusMode = useCallback(() => {
    const statusMode = settings.statusMode === 'expand' ? 'collapse' : 'expand';
    setSettings({...settings, statusMode});
  }, [setSettings, settings])

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onToggleMode,
      onToggleStatusMode,
    }),
    [
      settings,
      onToggleMode,
      onToggleStatusMode,
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
