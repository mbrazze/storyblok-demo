import Head from 'next/head';
import Layout from '../components/Layout';
import { StoryblokComponent } from '@storyblok/react';
import sbClient from '../lib/storyblokClient';

export default function Page({ story }) {
  return (
    <div>
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const slug = params?.slug?.join('/') || 'home';
  const { data } = await sbClient.get(`cdn/stories/${slug}`, {
    version: preview ? 'draft' : 'published',
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false,
    },
    revalidate: 3600,
  };
}
export async function getStaticPaths() {
  const { data } = await sbClient.get('cdn/links/', {
    version: 'published',
  });
  const paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');
    paths.push({ params: { slug: splittedSlug } });
  });
  return {
    paths: paths,
    fallback: false,
  };
}
