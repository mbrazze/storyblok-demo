import Image from 'next/image';

export const Feature = (params: any) => {
  return (
    <div>
      <h3>{params.blok.headline}</h3>
      <p>{params.blok.content}</p>
      <Image
        src={params.blok.image.filename}
        alt={params.blok.image.alt}
        width={params.blok.main_image.filename.split('/')[5].split('x')[0]}
        height={params.blok.main_image.filename.split('/')[5].split('x')[1]}
        sizes="(max-width: 1538px) 100vw, 1504px"
        priority={true}
      />
    </div>
  );
};
