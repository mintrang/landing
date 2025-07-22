import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  { id: 1, image: "/assets/homepage/m-slide1-4x.png" },
  { id: 2, image: "/assets/homepage/m-slide2-4x.png" },
  { id: 3, image: "/assets/homepage/m-slide3-4x.png" },
  { id: 4, image: "/assets/homepage/s-slide1-4x.png" },
  { id: 5, image: "/assets/homepage/s-slide2-4x.png" },
  { id: 6, image: "/assets/homepage/s-slide3-4x.png" },
];

function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((a) => [Math.random(), a] as [number, T])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

interface MSliderProps {
  isSmall?: boolean;
  isIpad?: boolean;
}

const MSlider: React.FC<MSliderProps> = ({ isSmall = false, isIpad = false }) => {
  const [currentItems, setCurrentItems] = useState(data);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentItems((prev) => shuffle(prev));
    }, 9000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Kích thước cell
  const cellW = isSmall ? 90 : 120;
  const cellH = isSmall ? 70 : 100;

  return (
    <Box
      className="slideContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ position: "relative", width: cellW * 3 + 6, height: cellH * 2 + 6, display: "grid", gridTemplateColumns: `repeat(3, ${cellW}px)`, gridTemplateRows: `repeat(2, ${cellH}px)`, gap: 3, alignItems: "center", justifyContent: "center" }}
    >
      {currentItems.map((item, idx) => (
        <motion.div
          key={item.id}
          layout
          transition={{ type: "spring", stiffness: 120, damping: 30, duration: 1.2 }}
          style={{ width: cellW, height: cellH, borderRadius: 10, overflow: "hidden", background: "#eee", position: "relative", zIndex: 1 }}
        >
          <Image src={item.image} alt={`slide-img-${item.id}`} width={cellW} height={cellH} style={{ objectFit: "cover" }} />
        </motion.div>
      ))}
    </Box>
  );
};

export default MSlider; 