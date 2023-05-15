import * as React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { images } from './images';
import SwipperContainer from './SwipperContainer';

// export default function App() {
//   const [width, setWidth] = React.useState(0);
//   const containerRef = React.useRef(null);

//   React.useEffect(() => {
//     if (containerRef) {
//       setWidth(
//         containerRef.current.scrollWidth - containerRef.current.offsetWidth
//       );
//     }
//   }, []);

//   return (
//     <div>
//       <motion.div className="carousel" ref={containerRef}>
//         <motion.div
//           className="inner-carousel"
//           drag="x"
//           dragConstraints={{
//             right: 0,
//             left: -width,
//           }}
//         >
//           {images.map((i) => (
//             <motion.div className="item" key={i.src}>
//               <img src={i.src} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

export default SwipperContainer;
