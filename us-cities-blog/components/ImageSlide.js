import { storyblokEditable } from '@storyblok/react';

const ImageSlide = (blok) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="">
        <img
          src={`blok.images[0].filename/m/300x200`}
          alt={blok.images[0].alt}
          className="mx-auto block w-full h-auto"
        />

        {/* {blok.images.map((img, i) => (
          <img
            key={i}
            src={`${img.filename}/m/300x200`}
            alt={img.alt || img.title || 'image'}
            className="mx-auto block w-full h-auto"
          />
        ))} */}
      </div>
    </div>
  );
};

export default ImageSlide;
