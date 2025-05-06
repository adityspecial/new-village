import React from 'react';

interface CardProps {
  title: string;
  content: React.ReactNode;
  imageSrc?: string;
  borderSize?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageSrc, borderSize = "2" }) => (
  <div
    className="w-full max-w-3xl h-[42rem] p-6 rounded-2xl text-justify text-gray-800 transition-all duration-300 border-4 border-white shadow-2xl bg-white bg-opacity-95 overflow-y-auto"
    style={{
      opacity: 'var(--active)' as any,
    }}
  >
    {imageSrc && (
      <div className="mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-contain object-center rounded-xl mx-auto"
        />
      </div>
    )}
    <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">{title}</h2>
    <div className="prose max-w-none">{content}</div>
  </div>
);

export default Card;