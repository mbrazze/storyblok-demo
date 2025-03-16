import { StoryblokServerComponent } from '@storyblok/react/rsc';

export const Page = (params: any) => {
  console.log(params);
  return (
    <main>
      {params.blok.blocks.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
