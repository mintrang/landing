'use client';

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EffortlessSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <Box sx={{ bgcolor: "#010039", py: 8 }}>
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item xs={12} md={4}>
          <Box ref={ref} sx={{ position: "relative", width: 256, height: 516, mx: "auto" }}>
            {/* Ảnh chính luôn cố định */}
            <Image src="/assets/homepage/chat_list.png" alt="Phone" width={256} height={516} style={{ borderRadius: 20, position: "relative", zIndex: 1, objectFit: "contain" }} />
            {/* Avatar 5 - dọc cạnh trái, giữa */}
            <motion.div
              initial={false}
              animate={isInView ? { y: 0, opacity: 1, scale: 1.1 } : { y: 60, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ position: "absolute", left: -50, top: 80, zIndex: 2 }}
            >
              <Image src="/assets/homepage/avatar_5.svg" alt="Avatar5" width={60} height={60} />
            </motion.div>
            {/* Avatar 6 - dọc cạnh phải, giữa */}
            <motion.div
              initial={false}
              animate={isInView ? { y: 0, opacity: 1, scale: 1.1 } : { y: 60, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{ position: "absolute", right: -50, top: 200, zIndex: 2 }}
            >
              <Image src="/assets/homepage/avatar_6.svg" alt="Avatar6" width={60} height={60} />
            </motion.div>
            {/* Group Message - dọc cạnh phải, dưới */}
            <motion.div
              initial={false}
              animate={isInView ? { y: 0, opacity: 1, scale: 1.1 } : { y: 60, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ position: "absolute", right: -50, bottom: 40, zIndex: 2 }}
            >
              <Image src="/assets/homepage/group_message.svg" alt="GroupMessage" width={60} height={60} />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box pl={{ md: 5 }} color="white">
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Effortless Filtering for Global Connections
            </Typography>
            <Typography variant="h5" sx={{ py: 2 }}>
              Download Our App and Never Miss a Moment!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EffortlessSection; 