'use client';
import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Find your tribe using smart filters",
    desc: "Any age, any stage of life, any orientation, anywhere in the world!",
  },
  {
    title: "Connect and chat one-on-one",
    desc: "Only two-way connections, no followers, no random texts from strangers",
  },
  {
    title: "Enjoy interesting small group conversations",
    desc: "Register or create a new room, max 6 in a room, stay anonymous if you wish",
  },
];

const HowItWorksSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" gutterBottom>
        How does it work?
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center" ref={ref}>
        {steps.map((step, idx) => (
          <Grid item xs={12} md={4} textAlign="center" key={step.title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Box sx={{ minHeight: 120, bgcolor: '#f5f5f5', borderRadius: 4, mb: 2 }} />
              <Typography variant="h5" fontWeight={500}>{step.title}</Typography>
              <Typography color="text.secondary">{step.desc}</Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection; 