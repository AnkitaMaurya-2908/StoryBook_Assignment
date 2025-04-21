// src/components/TopNavBar/TopNavBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TopNavBar } from './TopNavBar';
// import type { TopNavBarProps } from './TopNavBar.types';

const meta: Meta<typeof TopNavBar> = {
  title: 'Components/TopNavBar',
  component: TopNavBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const Light: Story = {
  args: {
    title: 'My App',
    links: navLinks,
    theme: 'light',
  },
};

export const Dark: Story = {
  args: {
    title: 'My App',
    links: navLinks,
    theme: 'dark',
  },
};


