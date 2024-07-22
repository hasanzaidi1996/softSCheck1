import React, { useEffect, useState } from 'react';

interface ITypingAnimation {
  content: string;
  speed: number;
}

/**
 *
 * Create animation for adding typing
 *
 * @param {ITypingAnimation} props content to display and speed in creation
 * @returns {React.FC} typing animated component for landing
 */
const TypingAnimation = ({ content, speed }: ITypingAnimation) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    /*
    Create a new setInterval and store its id
    */
    const animKey = setInterval(() => {
      setIndex((index) => {
        /*
        This setState function will set the index
        to index+1 if there is more content otherwise
        it will destory this animation
        */

        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, 20);
  }, []);

  useEffect(() => {
    setDisplayedContent((dContent) => {
      return dContent + content[index];
    });
  }, [index]);

  return <pre className="type-writer">{displayedContent}</pre>;
};

export default TypingAnimation;
