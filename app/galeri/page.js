'use client'

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: '/images/mehmet-sahin-galeri1.jpg', alt: 'Mehmet Şahin Galeri 1' },
  { src: '/images/mehmet-sahin-galeri2.jpg', alt: 'Mehmet Şahin Galeri 2' },
  { src: '/images/mehmet-sahin-galeri3.jpg', alt: 'Mehmet Şahin Galeri 3' },
  { src: '/images/mehmet-sahin-galeri4.jpg', alt: 'Mehmet Şahin Galeri 4' },
  { src: '/images/mehmet-sahin-galeri5.jpg', alt: 'Mehmet Şahin Galeri 5' },
  { src: '/images/mehmet-sahin-galeri6.jpg', alt: 'Mehmet Şahin Galeri 6' },
  { src: '/images/mehmet-sahin-galeri7.jpg', alt: 'Mehmet Şahin Galeri 7' },
  { src: '/images/mehmet-sahin-galeri8.jpg', alt: 'Mehmet Şahin Galeri 8' },
  { src: '/images/mehmet-sahin-galeri9.jpg', alt: 'Mehmet Şahin Galeri 9' },
  { src: '/images/mehmet-sahin-galeri10.jpg', alt: 'Mehmet Şahin Galeri 10' },
  { src: '/images/mehmet-sahin-galeri11.jpg', alt: 'Mehmet Şahin Galeri 11' },
  { src: '/images/mehmet-sahin-galeri12.jpg', alt: 'Mehmet Şahin Galeri 12' },
];

export default function Galeri() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-8 text-center">
          Mehmet Şahin Seyahat Galeri
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative h-64 cursor-pointer hover:opacity-80 transition-opacity duration-300" onClick={() => setIndex(i)}>
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      </div>
    </div>
  );
}
