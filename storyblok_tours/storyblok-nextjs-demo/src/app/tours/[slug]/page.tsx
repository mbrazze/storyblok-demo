import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@storyblok/react';

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: 'draft',
  });
  return response.data.story;
};

export const TourPage = async (props: any) => {
  const story = await fetchTourPage(props.params.slug);
  return <StoryblokStory story={story} />;
};
