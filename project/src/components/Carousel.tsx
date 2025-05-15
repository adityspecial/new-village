import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode;
  maxVisibility?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, maxVisibility = 3 }) => {
  const count = React.Children.count(children);
  const [active, setActive] = useState<number>(Math.min(2, count - 1));

  const goPrev = () => {
    setActive((prev) => (prev - 1 + count) % count);
  };

  const goNext = () => {
    setActive((prev) => (prev + 1) % count);
  };

  return (
    <div className="relative w-full max-w-4xl h-[45rem] perspective-[500px] preserve-3d mx-auto">
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 text-black z-20 border-2 border-black rounded-full p-2 hover:bg-gray-100 transition-colors"
        onClick={goPrev}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="w-full h-full flex items-center justify-center">
        {React.Children.map(children, (child, i) => {
          let offset = (active - i + count) % count;
          if (offset > count / 2) offset -= count;
          const absOffset = Math.abs(offset);
          const direction = Math.sign(offset);

          return (
            <div
              key={i}
              className="absolute w-full max-w-3xl h-full transition-all duration-300 px-4"
              style={{
                '--active': i === active ? 1 : 0,
                '--offset': offset,
                '--abs-offset': absOffset,
                '--direction': direction,
                pointerEvents: i === active ? 'auto' : 'none',
                opacity: absOffset >= maxVisibility ? '0' : '1',
                display: absOffset > maxVisibility ? 'none' : 'block',
                transform: `
                  rotateY(${offset * 50}deg)
                  scaleY(${1 + absOffset * -0.4})
                  translateZ(${absOffset * -480}px)
                  translateX(${direction * -40}px)
                `,
                filter: `blur(${absOffset * 8}px)`,
              } as React.CSSProperties}
            >
              <div className="h-full overflow-y-auto p-6">
                {child}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 text-black z-20 border-2 border-black rounded-full p-2 hover:bg-gray-100 transition-colors"
        onClick={goNext}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;