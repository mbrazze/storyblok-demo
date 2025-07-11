import { storyblokEditable } from '@storyblok/react';

const JourneySection = ({ blok }) => {
  // Safely extract the rich text segments array
  const segments = Array.isArray(blok?.content?.content)
    ? blok.content.content
    : [];

  // Map through segments, pulling the first text only if present
  const textSegments = segments
    .map((segment) => {
      const slice = segment.content;
      if (!Array.isArray(slice) || slice.length === 0) return null;

      const inner = slice[0].content;
      if (!Array.isArray(inner) || inner.length === 0) return null;

      return inner[0].text;
    })
    .filter(Boolean);

  // Show up to 5 paragraphs
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
      {Array.isArray(blok?.images) && blok.images.length > 0 && (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {blok.images.map((img, i) => (
            <img
              key={i}
              src={`${img.filename}/m/300x200`}
              alt={img.alt || `Journey image ${i + 1}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default JourneySection;
