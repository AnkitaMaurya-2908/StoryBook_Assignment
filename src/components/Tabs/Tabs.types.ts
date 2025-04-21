export interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
  theme?: 'default' | 'light' | 'dark';
}
