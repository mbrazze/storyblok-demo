import { storyblokEditable } from '@storyblok/react';

const Teaser = ({ blok }) => {
  return (
    <h2
      className="text-4xl mb-8 text-center font-extrabold pt-10"
      {...storyblokEditable(blok)}
    >
      {blok.headline}
    </h2>
  );
};

export default Teaser;
