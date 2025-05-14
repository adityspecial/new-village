import React from 'react';
import Gallery from './Gallery';

const imageUrls = [
  "/images/Gallery/1 1.jpg",
  "/images/Gallery/2.jpg",
  "/images/Gallery/3.jpg",
  "/images/Gallery/4.jpg",
  "/images/Gallery/5.jpg",
  "/images/Gallery/6.jpg",
  "/images/Gallery/7.jpg",
  "/images/Gallery/8.jpg",
  "/images/Gallery/9.jpg",
  "/images/Gallery/10.jpg",
  "/images/Gallery/11.jpg",
  "/images/Gallery/12.jpg",
  "/images/Gallery/13.jpg",
  "/images/Gallery/14.jpg",
  "/images/Gallery/15.JPG",
  "/images/Gallery/16.JPG",
  "/images/Gallery/17.JPG",
  "/images/Gallery/18.JPG",
  "/images/Gallery/19.JPG",
  "/images/Gallery/20.JPG",
  "/images/Gallery/21.png",
  "/images/Gallery/22.png",
  "/images/Gallery/23.png",
  "/images/Gallery/24.png",
  "/images/Gallery/25.png",
  "/images/Gallery/26.png",
  "/images/Gallery/27.png",
  "/images/Gallery/28.png"
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Gallery images={imageUrls} />
    </div>
  );
};

export default GalleryPage;