import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit?: () => void;
  }
}

const TranslateWidget = () => {
  useEffect(() => {
    if (window.google && window.google.translate) return;

    const addScript = document.createElement('script');
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className="inline-block bg-white rounded-md shadow-md px-3 py-2 text-gray-700 text-sm cursor-pointer select-none">
      <div id="google_translate_element" />
      <style>{`
        .goog-logo-link, .goog-te-gadget-icon {
          display: none !important;
        }
        .goog-te-gadget-simple {
          font-family: 'Inter', sans-serif;
          color: #374151;
        }
        select.goog-te-combo {
          border: 1px solid #D1D5DB;
          border-radius: 0.375rem;
          padding: 0.25rem 0.5rem;
          background-color: white;
          color: #374151;
          font-size: 0.875rem;
          outline: none;
          cursor: pointer;
          box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
          transition: border-color 0.2s;
        }
        select.goog-te-combo:hover, select.goog-te-combo:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgb(59 130 246 / 0.3);
        }
      `}</style>
    </div>
  );
};

export default TranslateWidget;
