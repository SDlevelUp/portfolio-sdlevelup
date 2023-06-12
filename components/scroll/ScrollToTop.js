import React, { useEffect, useState, useRef } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

import { classNames } from '../../utils/classNames';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibilityRef = useRef();

  toggleVisibilityRef.current = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      toggleVisibilityRef.current();
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className={classNames(
            'opacity-100',
            'bg-black hover:bg-purple-800 inline-flex items-center rounded-full p-3 text-white cursor-pointer',
          )}
          aria-label="Scroll to Top"
          title="Scroll to Top"
        >
          <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};