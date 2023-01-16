import { StoryFn, Meta } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    title: 'Pre-order now',
    href: '/',
    type: 'primary',
  },
} as Meta<ButtonProps>;

export const Default: StoryFn<ButtonProps> = args => <Button {...args} />;

export const Secondary: StoryFn<ButtonProps> = args => <Button {...args} />;

Secondary.args = {
  type: 'secondary',
};
