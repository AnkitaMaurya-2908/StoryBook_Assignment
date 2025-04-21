import { Meta, StoryFn } from '@storybook/react';
import Table from './Table';
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['default', 'light', 'dark'],
    },
    data: {
      control: 'object',
    },
    headers: {
      control: 'object',
    },
  },
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  headers: ['Name', 'Age', 'City'],
  data: [
    { Name: 'John Doe', Age: 30, City: 'New York' },
    { Name: 'Jane Smith', Age: 25, City: 'London' },
  ],
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


