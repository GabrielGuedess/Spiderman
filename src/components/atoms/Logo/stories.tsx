import { StoryFn, Meta } from '@storybook/react';

import { Logo } from '.';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta;

export const Default: StoryFn = () => <Logo />;
