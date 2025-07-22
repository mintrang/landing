import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";

const HeroSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'white', mt: { xs: 4, md: 6 } }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" direction={{ xs: 'column-reverse', md: 'row' }}>
        {/* Text Content */}
        <Grid size={{ xs: 12, md: 6 }} display="flex" flexDirection="column" justifyContent="center" alignItems={'center'}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              fontWeight={700}
              gutterBottom
              sx={{ color: '#222', fontSize: { xs: 28, sm: 36, md: 52 }, textAlign: { xs: 'center', md: 'left' } }}
            >
              Landing Page Demo
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
              gutterBottom
              sx={{ color: '#222', fontSize: { xs: 32, sm: 40, md: 56 }, textAlign: { xs: 'center', md: 'left' } }}
            >
              Worlds <span style={{ color: '#FFCB00' }}>#1 Platform</span>
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
              gutterBottom
              sx={{ color: '#222', fontSize: { xs: 32, sm: 40, md: 56 }, textAlign: { xs: 'center', md: 'left' } }}
            >
              for Connections &
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
              gutterBottom
              sx={{ color: '#222', fontSize: { xs: 32, sm: 40, md: 56 }, textAlign: { xs: 'center', md: 'left' } }}
            >
              Conversations
            </Typography>
            <Box pt={2} pb={3} sx={{ fontSize: 24, color: '#707070', textAlign: { xs: 'center', md: 'left' }, px: { xs: 2, md: 0 } }}>
              <Typography sx={{ color: '#555' }}>Connect with Like-minded Souls Globally:</Typography>
              <Typography sx={{ color: '#555' }}>Engage in Intimate, Small Group Conversations.</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 10 }}>
                Download Now
              </Button>
              <Image src="/assets/homepage/GoogleDownload.svg" alt="Google Play" width={32} height={32} />
              <Image src="/assets/homepage/AppleDownload.svg" alt="App Store" width={32} height={32} />
            </Box>
          </motion.div>
        </Grid>
        {/* Slide Content */}
        <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center" alignItems="center">
          <HeroSlider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection; 