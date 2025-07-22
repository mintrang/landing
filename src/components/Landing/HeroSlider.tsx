import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/homepage/slide-1.png",
  "/assets/homepage/slide-2.png",
  "/assets/homepage/slide-3.png",
];

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: 320, height: 220, position: "relative", margin: "0 auto" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          style={{ position: "absolute", width: 320, height: 220 }}
        >
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            width={320}
            height={220}
            style={{ borderRadius: 12, objectFit: "cover" }}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider; 