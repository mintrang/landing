import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EffortlessSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <Box>
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box ref={ref} sx={{ position: "relative", width: 256, height: 516, mx: "auto" }}>
            {/* Ảnh chính luôn cố định */}
            <Image src="/assets/homepage/chat_list.png" alt="Phone" width={256} height={516} style={{ borderRadius: 20, position: "relative", zIndex: 1, objectFit: "contain" }} />
            {/* Avatar 5 - dọc cạnh trái, giữa */}
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.7 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 2 } : { y: 60, opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ position: "absolute", left: -20, top: 100, zIndex: 2 }}
            >
              <Image src="/assets/homepage/avatar_5.svg" alt="Avatar5" width={60} height={60} />
            </motion.div>
            {/* Avatar 6 - dọc cạnh phải, giữa */}
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.7 }}
               animate={isInView ? { y: 0, opacity: 1, scale: 2 } : { y: 60, opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{ position: "absolute", right: -20, top: 220, zIndex: 2 }}
            >
              <Image src="/assets/homepage/avatar_6.svg" alt="Avatar6" width={60} height={60} />
            </motion.div>
            {/* Group Message - dọc cạnh phải, dưới */}
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.7 }}
               animate={isInView ? { y: 0, opacity: 1, scale: 2 } : { y: 60, opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ position: "absolute", right: -20, bottom: 60, zIndex: 2 }}
            >
              <Image src="/assets/homepage/group_message.svg" alt="GroupMessage" width={60} height={60} />
            </motion.div>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box pl={{ md: 5 }} color="white" sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: 2, md: 0 } }}>
            <Typography variant="h3" fontWeight={700} gutterBottom sx={{ fontSize: { xs: 28, sm: 36, md: 44 } }}>
              Effortless Filtering for Global Connections
            </Typography>
            <Typography variant="h5" sx={{ py: 2, fontSize: { xs: 16, sm: 20, md: 24 } }}>
              Download Our App and Never Miss a Moment!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EffortlessSection; 