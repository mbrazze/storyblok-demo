import { storyblokEditable } from '@storyblok/react';

const JourneySection = ({ blok }) => {
  const textSegments =
    blok?.content?.content?.map((segment) => segment.content[0]?.text) || [];

  // Show up to 5 paragraphs if needed
  const paragraphs = textSegments.slice(0, 5);

  return (
    <div className="px-4 py-8 bg-white" {...storyblokEditable(blok)}>
      {/* Paragraphs */}
      <div className="max-w-3xl mx-auto text-center">
        {paragraphs.map((para, index) => (
          <p key={index} className="mb-4 text-lg leading-relaxed text-gray-900">
            {para}
          </p>
        ))}
      </div>

      {/* Images */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {blok?.images?.map((img, i) => (
          <img
            key={i}
            src={`${img?.filename}/m/300x200`}
            alt={`City additional ${i + 1}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default JourneySection;
