// app/page.tsx

'use client';

import { getStoryblokApi } from '@storyblok/react/rsc';
import Layout from '@/components/Layout'; // or wherever your Layout is
import ClientHome from './ClientHome';

// Revalidate every hour (same as `revalidate: 3600`)
export const revalidate = 3600;

export default async function Home() {
  const slug = 'home';
  const sbParams = {
    version: 'draft' as const, // or 'published'
  };

  // 1) Get the Storyblok API client
  const storyblokApi = getStoryblokApi();

  // 2) Fetch your story
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const story = data ? data.story : null;

  // 3) Render layout + pass story data to a client component
  return (
    <Layout>
      <ClientHome story={story} />
    </Layout>
  );
}
