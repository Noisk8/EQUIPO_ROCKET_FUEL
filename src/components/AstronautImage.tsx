import React from 'react';
import Image from 'next/image';

interface AstronautImageProps {
  className?: string;
  src: string;
  widths: number[];
  sizes: string;
  loading?: 'lazy' | 'eager';
  alt?: string;
}

const AstronautImage: React.FC<AstronautImageProps> = ({
  className,
  src,
  widths,
  sizes,
  loading = 'eager',
  alt = 'A floating astronaut in a space suit',
}) => {
  const [width, height] = widths;

  return (
    <div className={className}>
      <Image
        src={src}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        alt={alt}
        quality={100} // Adjust the quality as needed, 100 is the highest quality.
      />
    </div>
  );
};

export default AstronautImage;