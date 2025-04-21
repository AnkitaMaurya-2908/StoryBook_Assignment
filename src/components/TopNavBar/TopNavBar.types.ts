// src/components/TopNavBar/TopNavBar.types.ts
export interface TopNavBarProps {
  title: string;
  links: { label: string; href: string }[];
  theme?: 'light' | 'dark';
}
