import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory('tours', {
    version: 'draft',
  });
  return response.data.story;
};

const ToursPage = async () => {
  const story = await fetchToursPage();

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8  mx-auto px-4 w-full py-16"></div>
    </div>
  );
};
export default ToursPage;
