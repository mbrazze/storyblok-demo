import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';

const ContactSection = (blok) => {
  return (
    <div {...storyblokEditable(blok)} className="text-center py-8">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <img
          src="/assets/emailIcon.png"
          className="rounded-full"
          width={50}
          height={50}
        />
        <p className="text-lg text-gray-900 leading-relaxed">
          {blok.blok?.content?.content?.[0]?.content?.[0]?.text}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Link href="https://www.linkedin.com/in/thebryanbeale">
          <img
            src="/assets/linkedinIcon.webp"
            alt="LinkedIn Icon"
            width={50}
            height={50}
            className="cursor-pointer transition duration-300 hover:opacity-90 hover:brightness-110 shadow-lg shadow-gray-600 rounded-full"
          />
        </Link>
        <Link href="https://www.github.com/mbrazze">
          <img
            src="/assets/githubIcon.png"
            alt="GitHub Icon"
            width={50}
            height={50}
            className="cursor-pointer transition duration-300 hover:opacity-90 hover:brightness-110 shadow-md shadow-gray-600 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
