export interface TableProps {
  theme?: 'default' | 'light' | 'dark';
  headers: string[];
  data: { [key: string]: string | number }[];
}

