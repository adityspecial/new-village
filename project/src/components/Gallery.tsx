import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-12 bg-amber-100 pattern-bg-yellow">
      <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Gallery</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 max-w-7xl mx-auto">
        {images.slice(0, 30).map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleImageClick(url)}
          >
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;