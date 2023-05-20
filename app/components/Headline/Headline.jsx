import React, { useEffect } from 'react';

const Headline = () => {
  useEffect(() => {
    const marquee = document.querySelector('.marquee');
    const container = document.querySelector('.marquee-container');

    const textWidth = marquee.offsetWidth;
    const containerWidth = container.offsetWidth;

    const scroll = () => {
      if (containerWidth < textWidth) {
        marquee.style.transform = 'translateX(-100%)';
        marquee.style.animation = `marquee ${textWidth / 50}s linear infinite`;
      }
    };

    scroll();

    // Recalculate scroll on window resize
    window.addEventListener('resize', scroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', scroll);
    };
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee">
        <p>This is a running message created using Next.js. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque malesuada magna, ut convallis urna commodo at. Nulla hendrerit condimentum arcu, sit amet facilisis velit.</p>
      </div>
    </div>
  );
};

export default Headline;
