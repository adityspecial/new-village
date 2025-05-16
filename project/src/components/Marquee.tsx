import React, { useState, useRef, useEffect } from 'react';

interface MarqueeItem {
  text: string;
  link: string;
}

interface MarqueeProps {
  texts: MarqueeItem[];
  speed?: 'slow' | 'normal' | 'fast';
  isLatest?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ texts, speed = 'normal', isLatest = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);
  const lastTimestampRef = useRef<number | null>(null);
  
  const speedMap = {
    slow: 0.05,
    normal: 0.08,
    fast: 0.12
  };

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    if (positionRef.current === 0) {
      positionRef.current = container.offsetWidth;
    }
    content.style.transform = `translateX(${positionRef.current}px)`;

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!isHovered) {
        positionRef.current -= speedMap[speed] * deltaTime;

        if (positionRef.current <= -content.offsetWidth) {
          positionRef.current = container.offsetWidth;
        }

        content.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (positionRef.current > container.offsetWidth) {
        positionRef.current = container.offsetWidth;
        content.style.transform = `translateX(${positionRef.current}px)`;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        text-black
        overflow-hidden 
        py-2 
        px-2 sm:px-4 md:px-6
        relative group 
         shadow-md 
        hover:shadow-lg 
        transition-shadow duration-300
        bg-amber-200  // 👉 Change background color here
      "
    >
      {isLatest && (
        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20">
          <span
            className="
              bg-amber-800 text-white text-xs sm:text-sm md:text-base 
              font-bold px-2 sm:px-3 py-0.5 sm:py-1 
              rounded-md border-2 border-amber-900 shadow-sm
              whitespace-nowrap
            "
          >
            LATEST UPDATE
          </span>
        </div>
      )}

      <div className="flex">
        <div
          ref={contentRef}
          className="
            whitespace-nowrap will-change-transform 
            font-semibold 
            text-sm sm:text-base md:text-lg 
            flex
          "
          style={{
            paddingLeft: isLatest ? '8rem' : '0',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Optional shadow
          }}
        >
          {texts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="
                inline-flex items-center 
                cursor-pointer 
                hover:text-red-600  
                transition-colors duration-200 
                text-[0.9rem] sm:text-base
              "
              onClick={(e) => {
                if (isHovered) {
                  e.preventDefault();
                  window.open(item.link, '_blank');
                }
              }}
            >
              <span 
                className="mx-3 sm:mx-4 text-amber-700 text-base sm:text-lg"
              >
                ◆
              </span>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
