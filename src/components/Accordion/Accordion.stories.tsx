// Accordion.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['default', 'light', 'dark'],
    },
    title: {
      control: 'text',
      defaultValue: 'Accordion Header',
    },
    content: {
      control: 'text',
      defaultValue: 'This is the content of the accordion. You can add any text here.',
    },
  },
} as Meta<typeof Accordion>;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  title: 'Accordion Header',
  content: 'This is the content of the accordion. You can add any text here.',
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  title: 'Light Mode Accordion Header',
  content: 'This is the content for the light mode accordion.',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  title: 'Dark Mode Accordion Header',
  content: 'This is the content for the dark mode accordion.',
};
