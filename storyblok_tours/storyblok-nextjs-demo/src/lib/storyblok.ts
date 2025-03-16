import {
  apiPlugin,
  storyblokInit,
  getStoryblokApi,
} from '@storyblok/react/rsc';
import { Tour } from '@/components/Tour';
import { Page } from '@/components/Page';
import { Hero } from '@/components/Hero';
import { Grid } from '@/components/Grid';
import { Feature } from '@/components/Feature';

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
  },
  enableFallbackComponent: true,
});

export { getStoryblokApi };
