import { useEffect } from 'react';

const useScrollLock = (condition: boolean) => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (condition) {
        event.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    if (condition) {
      window.addEventListener('scroll', handleScroll, { passive: false });
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [condition]);
};

export default useScrollLock;
