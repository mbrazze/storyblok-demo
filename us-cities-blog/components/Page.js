// components/Page.tsx
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Page = ({ blok }) => {
  // If your "Page" schema in Storyblok has a field named "body" or "blocks" for nested blocks:
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
