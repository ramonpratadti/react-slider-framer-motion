import * as React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { images } from './images';

export default function SwipperContainer() {
  const [imagesRender, setImagesRender] = React.useState(images);
  const containerRef = React.useRef(null);
  const thresholdRight = window.innerWidth * 0.1;
  const thresholdLeft = window.innerWidth * 0.1;

  const [prev, setPrev] = React.useState(-1);
  const [current, setCurrent] = React.useState(0);
  const [next, setNext] = React.useState(1);

  const swippedImages = [];

  const handleDragEnd = (event, info) => {
    if (info.offset.x > thresholdRight) {
      // Swiped right
      setTimeout(() => {
        if (current > 0) {
          setPrev(current - 2);
          setCurrent(current - 1);
          setNext(current);
          console.log('Swiped right');
        }
      }, 1000);
    } else if (info.offset.x < -thresholdLeft) {
      if (current < images.length - 1) {
        setTimeout(() => {
          if (current < images.length) {
            setPrev(current);
            setCurrent(current + 1);
            setNext(current + 2);
            console.log('Swiped left');
          }
        }, 1000);
      }
      // Swiped left
      // Perform action or transition to previous card
    } else {
      // Card is not swiped far enough, animate back to initial position
      // motion.animate(dragX, 0, { type: 'spring' });
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
      <motion.div
        onDragEnd={handleDragEnd}
        key={imagesRender[current].src}
        drag="x"
        dragConstraints={{
          left: current < images.length - 1 ? -412 : 0,
          right: current > 0 ? 412 : 0,
        }}
        className="item"
        style={{
          zIndex: 1,
        }}
      >
        <img src={imagesRender[current].src} />
      </motion.div>
    </div>
  );
}
