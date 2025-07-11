import { storyblokEditable } from '@storyblok/react';

const Subheading = ({ blok }) => {
  return (
    <h2
      className="text-2xl mb-5 text-center font-bold pt-10"
      {...storyblokEditable(blok)}
    >
      {blok.subheading}
    </h2>
  );
};

export default Subheading;
