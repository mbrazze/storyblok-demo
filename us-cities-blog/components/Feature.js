import { storyblokEditable } from '@storyblok/react';

const Feature = ({ blok }) => (
  <div
    className="column feature text-base m-5 font-medium"
    {...storyblokEditable(blok)}
  >
    {blok.name}
  </div>
);

export default Feature;
