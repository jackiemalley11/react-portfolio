'use client';
import React, { useState, useRef, useEffect } from 'react';

export interface CardContent {
  front: string;
  back: React.ReactNode;
}

interface FlipCardProps {
  content: CardContent;
}

const FlipCard: React.FC<FlipCardProps> = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const backContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backContentRef.current && isFlipped) {
      backContentRef.current.scrollTop = 0;
    }
  }, [isFlipped]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full md:w-[30%] h-96 perspective-[1000px] cursor-pointer transition-transform duration-500 group"
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-500 rounded-lg
          gradient-border group-hover:shadow-[0_0_20px_4px_rgba(64,246,252,0.8)]
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Front of card */}
        <div
          className={`
            absolute w-full h-full backface-hidden flex items-center justify-center 
            bg-bgBlue text-white text-2xl font-bold rounded-lg
            ${isFlipped ? 'hidden' : ''}
          `}
        >
          <div className="text-4xl md:text-3xl lg:text-4xl text-center mb-2 mt-2">{content.front}</div>
        </div>
        
        {/* Back of card */}
        <div
          ref={backContentRef}
          className={`
            absolute w-full h-full backface-hidden 
            bg-bgBlue text-white text-lg font-bold transform rotate-y-180 rounded-lg
            ${isFlipped ? '' : 'hidden'}
            overflow-y-auto scrollbar-thin scrollbar-thumb-[#40F6FC] scrollbar-track-transparent
          `}
        >
          {content.back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;