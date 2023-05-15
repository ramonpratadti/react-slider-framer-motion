import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';
import { images } from './images';

export default function SwipperContainer() {
  const thresholdRight = 1;
  const thresholdLeft = window.innerWidth * 0.15;

  const [current, setCurrent] = React.useState(0);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > thresholdRight) {
      setTimeout(() => {
        if (current > 0) {
          setCurrent(current - 1);
        }
      }, 500);
    } else if (info.offset.x < -thresholdLeft) {
      if (current < images.length - 1) {
        setTimeout(() => {
          if (current < images.length) {
            setCurrent(current + 1);
          }
        }, 500);
      }
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
      <motion.div
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
        key={images[current].src}
        drag="x"
        dragConstraints={{
          left: current < images.length - 1 ? -412 : 0,
          right: current > 0 ? 412 : 0,
        }}
        className="item"
        transition={{
          ease: 'easeOut',
        }}
      >
        <img src={images[current].src} />
      </motion.div>
    </div>
  );
}
