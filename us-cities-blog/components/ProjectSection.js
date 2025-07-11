import { storyblokEditable } from '@storyblok/react';

const ProjectSection = ({ blok }) => {
  // Project highlight text
  const projectHighlight = blok?.content?.content[0]?.content[0]?.text || '';

  // Helper to render bullet items from a nested structure
  const renderBulletItems = (sectionIndex) => {
    const items = blok?.content?.content[sectionIndex]?.content;
    if (!items) return null;

    return items.map((item, i) => {
      const line1 = item?.content[0]?.content[0]?.text || '';
      const line2 = item?.content[0]?.content[1]?.text || '';
      return (
        <li key={i} className="font-medium p-3">
          {line1} {line2}
        </li>
      );
    });
  };

  // Extract the features/drawbacks titles
  const featuresTitle = blok?.content?.content[1]?.content[0]?.text || '';
  const drawbacksTitle = blok?.content?.content[3]?.content[0]?.text || '';

  return (
    <div className="pb-20 space-y-6" {...storyblokEditable(blok)}>
      {/* Project Name */}
      <h1 className="pt-4 text-center text-2xl font-extrabold">{blok.Title}</h1>

      {/* Main image + highlight text */}
      <div className="mx-auto max-w-4xl text-center">
        <img
          src={`${blok?.image?.filename}/m/736x414`}
          alt={blok?.image?.alt || blok?.Title || 'Project Image'}
          className="mx-auto block w-full h-auto"
        />
        <p className="p-2">{projectHighlight}</p>
      </div>

      {/* Additional images */}
      <div className="mx-auto grid w-fit grid-cols-3 gap-2">
        {blok?.other_images?.map((img, i) => (
          <img
            key={i}
            src={`${img?.filename}/m/300x200`}
            alt={`Project additional ${i + 1}`}
            className="p-1"
          />
        ))}
      </div>

      {/* Features & Drawbacks */}
      <div className="mx-auto max-w-4xl">
        {/* Features */}
        <p className="font-bold p-3 text-green-700">{featuresTitle}</p>
        <ul className="list-disc list-inside">{renderBulletItems(2)}</ul>

        {/* Drawbacks */}
        <p className="mt-4 font-bold p-3 text-red-700">{drawbacksTitle}</p>
        <ul className="list-disc list-inside">{renderBulletItems(4)}</ul>
      </div>
    </div>
  );
};

export default ProjectSection;
