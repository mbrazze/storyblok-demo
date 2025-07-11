import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import Section from '../components/Section';
import JourneySection from '../components/JourneySection';
import ContactSection from '../components/ContactSection';
import ImageSlide from '../components/TestImageSlide';
import ProjectSection from '../components/ProjectSection';

// Components link to the bloks in Storyblok
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  projectSection: ProjectSection,
  section: Section,
  journeySection: JourneySection,
  contactSection: ContactSection,
  imageSlide: ImageSlide,
};

// Initializes your Storyblok
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
