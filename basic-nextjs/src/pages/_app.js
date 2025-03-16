import '@/styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import Page from '@/components/Page';
import Teaser from '@/components/Teaser';

const components = {
  feature: Feature,
  grid: Grid,
  page: Page,
  teaser: Teaser,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
