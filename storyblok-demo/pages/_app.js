import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import Config from '../components/Config';
import Layout from '../components/Layout';
import HeaderMenu from '../components/HeaderMenu';
import MenuLink from '../components/MenuLink';

const components = {
  config: Config,
  layout: Layout,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: '',
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
