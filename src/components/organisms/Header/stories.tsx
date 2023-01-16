import { StoryFn, Meta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

export const Default: StoryFn = () => <Header />;
