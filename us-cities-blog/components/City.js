import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import Link from 'next/link';

const City = ({ blok }) => {
  const imageUrl = blok.image.title;
  const cityContent = blok.content.content[0].content[0].text;
  console.log(blok);
  return (
    <div
      className="grid grid-cols-1 content-between gap-4 pb-20"
      {...storyblokEditable(blok)}
    >
      <h1 className="text-center font-extrabold">{blok.Title}</h1>
      <Link href={`/us-cities/${imageUrl}`}>
        <img src={`${blok.image.filename}/m/736x414`} className="" />
      </Link>
      <p className="p-2">{cityContent}</p>
    </div>
  );
};

export default City;
