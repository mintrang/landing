'use client';
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import MSlider from "./MSlider";

const DynamicSlideSection: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Over 100+ conversation topics to choose from!
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ py: 2 }}>
              Your life story, Spirituality, Philosophy, Relationships, Self love, Letting go and many more
            </Typography>
            <Button variant="contained" sx={{ background: '#FFCB00', color: '#010039', fontWeight: 700, borderRadius: 10, mt: 2, '&:hover': { background: '#FFD700' } }}>
              Take me there
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="center">
          <MSlider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DynamicSlideSection; 