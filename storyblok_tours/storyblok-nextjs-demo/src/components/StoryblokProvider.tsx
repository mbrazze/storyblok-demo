'use client';

import { PropsWithChildren } from 'react';
import { getStoryblokApi } from '@storyblok/react';

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  getStoryblokApi();
  return children;
};
