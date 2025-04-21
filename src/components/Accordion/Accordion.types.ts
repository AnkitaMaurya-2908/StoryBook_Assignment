// Accordion.types.ts
export interface AccordionProps {
  theme?: 'default' | 'light' | 'dark';
  title: string;
  content: React.ReactNode;
}
