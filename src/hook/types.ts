// ----------------------------------------------------------------------
export type ThemeModeValue = 'light' | 'dark';
export type StatusModeValue = 'expand' | 'collapse';

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
  statusMode: StatusModeValue;
};

export type SettingsContextProps = SettingsValueProps & {
  onToggleMode: VoidFunction;
  onToggleStatusMode: VoidFunction;
};
