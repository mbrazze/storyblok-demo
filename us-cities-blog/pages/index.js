import Head from 'next/head';
import { StoryblokComponent } from '@storyblok/react';
import sbClient from '../lib/storyblokClient';
import Layout from '../components/Layout';

export default function Home({ story }) {
  return (
    <div>
      <Head>
        <title>Bryan Beale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const slug = 'home';
  const { data } = await sbClient.get(`cdn/stories/${slug}`, {
    version: 'published',
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
