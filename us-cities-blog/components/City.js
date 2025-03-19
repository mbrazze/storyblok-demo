import { storyblokEditable } from '@storyblok/react';

const City = ({ blok }) => {
  // City highlight text
  const cityHighlight = blok?.content?.content[0]?.content[0]?.text || '';

  // Helper to render bullet items from a nested structure
  const renderBulletItems = (sectionIndex) => {
    // For example, `sectionIndex = 2` for pros or `4` for cons
    const items = blok?.content?.content[sectionIndex]?.content;
    if (!items) return null;

    return items.map((item, i) => {
      // Each bullet’s text might be split into multiple pieces
      const line1 = item?.content[0]?.content[0]?.text || '';
      const line2 = item?.content[0]?.content[1]?.text || '';
      return (
        <li key={i} className="font-medium p-3">
          {line1} {line2}
        </li>
      );
    });
  };

  // Extract the pros/cons titles
  const prosTitle = blok?.content?.content[1]?.content[0]?.text || '';
  const consTitle = blok?.content?.content[3]?.content[0]?.text || '';

  return (
    <div className="pb-20 space-y-6" {...storyblokEditable(blok)}>
      {/* City Name */}
      <h1 className="pt-4 text-center text-2xl font-extrabold">{blok.Title}</h1>

      {/* City image + highlight text */}
      <div className="mx-auto max-w-4xl text-center">
        <img
          src={`${blok?.image?.filename}/m/736x414`}
          alt={blok?.image?.alt || blok?.Title || 'City Image'}
          className="mx-auto block w-full h-auto"
        />
        <p className="p-2">{cityHighlight}</p>
      </div>

      {/* Other images */}
      <div className="mx-auto grid w-fit grid-cols-3 gap-2">
        {blok?.other_images?.map((img, i) => (
          <img
            key={i}
            src={`${img?.filename}/m/300x200`}
            alt={`City additional ${i + 1}`}
            className="p-1"
          />
        ))}
      </div>

      {/* Pros & Cons */}
      <div className="mx-auto max-w-4xl">
        {/* Pros */}
        <p className="font-bold p-3 text-red-600">{prosTitle}</p>
        <ul className="list-disc list-inside">{renderBulletItems(2)}</ul>

        {/* Cons */}
        <p className="mt-4 font-bold">{consTitle}</p>
        <ul className="list-disc list-inside">{renderBulletItems(4)}</ul>
      </div>
    </div>
  );
};

export default City;
