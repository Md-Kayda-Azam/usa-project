'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const images = [
  {
    id: 1,
    src: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  },
  {
    id: 2,
    src: 'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  },
  {
    id: 3,
    src: 'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
  },
];

const TestComponent = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleNextImage = () => {
    const currentIndex = images.findIndex(
      (image) => image.id === currentImage.id
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <div>
      <button onClick={handleNextImage}>Next Image</button>
      <AnimatePresence exitBeforeEnter={false}>
        <motion.img
          key={currentImage.src}
          src={currentImage.src}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: '100%' }} // Adjust the style as needed
        />
      </AnimatePresence>
    </div>
  );
};

export default TestComponent;
