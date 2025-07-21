'use client';
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";

const HeroSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Worlds <span style={{ color: '#FFCB00' }}>#1 Platform</span>
            </Typography>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              for Connections &
            </Typography>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Conversations
            </Typography>
            <Box pt={2} pb={3} sx={{ fontSize: 24, color: '#707070' }}>
              <Typography>Connect with Like-minded Souls Globally:</Typography>
              <Typography>Engage in Intimate, Small Group Conversations.</Typography>
            </Box>
            <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 10 }}>
              Download Now
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
          <HeroSlider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection; 