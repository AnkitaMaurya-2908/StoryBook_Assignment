import { Meta, StoryFn } from '@storybook/react';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['default', 'light', 'dark'],
    },
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

const sampleTabs = [
  { label: 'Tab 1', content: 'This is Tab 1 content' },
  { label: 'Tab 2', content: 'Tab 2 is active by default' },
  { label: 'Tab 3', content: 'This tab is disabled', disabled: true },
];

export const Default = Template.bind({});
Default.args = {
  tabs: sampleTabs,
  theme: 'default',
};

export const Light = Template.bind({});
Light.args = {
  ...Default.args,
  theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  theme: 'dark',
};
