import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';

const Section = ({ blok }) => {
  console.log(blok);
  // Extract image and text segments from the Storyblok
  const imageUrl = blok?.image?.filename || '';
  const textSegments =
    blok?.content?.content?.map((segment) => segment.content[0]?.text) || [];

  return (
    <section
      className="bg-white py-16 px-8 md:px-16 lg:px-24"
      {...storyblokEditable(blok)}
    >
      <div className="flex justify-center pb-10">
        <img
          className="w-64 h-64 object-cover rounded-full shadow-lg"
          src={imageUrl}
          alt="Profile"
        />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-900 leading-relaxed mb-6">
          {textSegments.join(' ')}
        </p>

        <Link href="https://www.linkedin.com/in/thebryanbeale">
          <img
            src="/assets/linkedinButton.png"
            alt="LinkedIn Button"
            width={200}
            height={50}
            className="mx-auto transition duration-300 hover:opacity-90 hover:brightness-110 shadow-lg shadow-gray-300 rounded-xl"
          />
        </Link>
      </div>
    </section>
  );
};

export default Section;
