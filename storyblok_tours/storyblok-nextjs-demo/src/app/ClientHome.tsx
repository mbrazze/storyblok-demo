// app/ClientHome.tsx
'use client';

import Head from 'next/head'; // Not recommended in Next.js 13, but works
import { useStoryblokState, StoryblokComponent } from '@storyblok/react';

type ClientHomeProps = {
  story: any;
};

export default function ClientHome({ story }: ClientHomeProps) {
  // Enable live updates from the Storyblok editor
  const liveStory = useStoryblokState(story);

  if (!liveStory) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* If you prefer, remove next/head and use Next.js 13's Metadata API */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Renders the top-level blok */}
      <StoryblokComponent blok={liveStory.content} />
    </>
  );
}
