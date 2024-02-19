import { useEffect, useState } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

export default function ScrollButton() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    setShowScroll(window.pageYOffset > 0);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <button className={`scroll-button ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
      <RiArrowUpDoubleLine  color="#fff" />
    </button>
  );
}
