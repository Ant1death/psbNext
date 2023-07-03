import { useState, useEffect } from 'react';

const useScrollToTop = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scroll, goToTop };
}

export default useScrollToTop;