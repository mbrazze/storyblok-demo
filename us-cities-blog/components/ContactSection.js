import { storyblokEditable } from '@storyblok/react';

const ContactSection = (blok) => {
  console.log(blok);
  const textSegments =
    blok?.content?.content?.map((segment) => segment.content[0]?.text) || [];

  return (
    <div {...storyblokEditable(blok)}>
      <p className="text-lg text-gray-900 leading-relaxed mb-6">
        {textSegments.join(' ')}
      </p>

      <Link href="https://www.linkedin.com/in/thebryanbeale">
        <img
          src="/assets/linkedinIcon.png"
          alt="LinkedIn Icon"
          width={50}
          height={50}
          className="mx-auto transition duration-300 hover:opacity-90 hover:brightness-110 shadow-lg shadow-gray-300 rounded-xl"
        />
      </Link>
    </div>
  );
};

export default ContactSection;
