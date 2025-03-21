import { storyblokEditable } from '@storyblok/react';

const ImageSlide = (blok) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="mx-auto grid w-fit grid-cols-3 gap-2">
        {blok.blok?.images?.map((img, i) => (
          <img
            key={i}
            src={`${img.filename}/m/500x700`}
            alt={img.alt || img.title || 'Bryan Images'}
            className=" mx-auto block w-auto h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
