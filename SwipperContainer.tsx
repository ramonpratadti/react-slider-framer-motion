import * as React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { images } from './images';

export default function SwipperContainer() {
  const [imagesRender, setImagesRender] = React.useState(images.reverse());
  const containerRef = React.useRef(null);
  const thresholdRight = window.innerWidth * 0.15;
  const thresholdLeft = window.innerWidth * 0.15;

  const handleDragEnd = (event, info) => {
    if (info.offset.x > thresholdRight) {
      // Swiped right
      // Perform action or transition to next card
      console.log('Swiped right');
    } else if (info.offset.x < -thresholdLeft) {
      // Swiped left
      // Perform action or transition to previous card
      console.log('Swiped left');
    } else {
      // Card is not swiped far enough, animate back to initial position
      // motion.animate(dragX, 0, { type: 'spring' });
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
      {imagesRender.map((i, idx) => (
        <motion.div
          onDragEnd={handleDragEnd}
          key={i.src}
          drag="x"
          dragConstraints={{
            left: idx === 0 ? 0 : -window.innerWidth,
            right: idx === images.length - 1 ? 0 : window.innerWidth,
          }}
          className="item"
          style={{
            zIndex: idx,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <img src={i.src} />
        </motion.div>
      ))}
    </div>
  );
}
