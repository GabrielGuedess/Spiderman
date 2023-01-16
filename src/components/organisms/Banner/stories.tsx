import { StoryFn, Meta } from '@storybook/react';

import { Banner } from '.';

export default {
  title: 'Organisms/Banner',
  component: Banner,
} as Meta;

export const Default: StoryFn = () => <Banner />;
