import StoryblokClient from 'storyblok-js-client';

const sbClient = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

export default sbClient;
