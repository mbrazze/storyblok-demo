import { storyblokEditable } from '@storyblok/react';

const ImageSlide = (blok) => {
  console.log(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <div className="mx-auto grid w-fit grid-cols-3 gap-2">
        {blok.images.map((img, i) => (
          <img
            key={i}
            src={`${img.filename}/m/500x250`}
            alt={img.alt || img.title || 'image'}
            className="mx-auto block w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
