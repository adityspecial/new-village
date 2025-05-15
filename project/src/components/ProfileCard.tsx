import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  username: string;
  description: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  imageUrl,
  username,
  description,
  socialLinks,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="relative w-full max-w-xs md:max-w-sm h-auto cursor-pointer rounded-lg shadow-lg overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto aspect-[4/3] md:h-80 md:aspect-auto object-contain bg-gray-100"
          loading="lazy"
        />
        <div className="absolute bottom-0 w-full bg-white  p-4">
          <strong className="block text-lg md:text-xl font-semibold text-gray-900">{name}</strong>
          <h4 className="mt-1 text-orange-600">{role}</h4>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black  flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900 transition"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={imageUrl}
              alt={name}
              className="w-full md:w-1/2 object-contain bg-gray-100 p-4
                         max-h-64 md:max-h-full"
              loading="lazy"
            />

            {/* Text content */}
            <div className="p-6 md:p-8 md:w-1/2 overflow-y-auto max-h-[60vh] md:max-h-full">
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <h4 className="mt-1 text-orange-600">{role}</h4>
              <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">{description}</p>
              <p className="mt-3 text-gray-500 text-sm">@{username}</p>

              {/* Social links */}
              <div className="mt-6 flex space-x-4">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-600 hover:text-blue-400 transition"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-pink-600 transition"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
