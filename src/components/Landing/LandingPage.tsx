'use client';

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./HomePage.css";
import EffortlessSection from "./EffortlessSection";
import HowItWorksSection from "./HowItWorksSection";
import HeroSection from "./HeroSection";
import DynamicSlideSection from "./DynamicSlideSection";
import Header from "./Header";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LoginModal from './LoginModal';
import { useState } from 'react';

const sectionContent = {
  maxWidth: '1440px',
  margin: '0 auto',
  px: { xs: 2, md: 8 },
};

const LandingPage: React.FC = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <Header onOpenLogin={() => setOpenLogin(true)} />

      {/* Hero Section */}
      <Box id="home" sx={{ scrollMarginTop: '70px', bgcolor: 'white', width: '100vw' }}>
        <Box sx={sectionContent}>
          <HeroSection />
        </Box>
      </Box>

      {/* Banner Section */}
      <Box sx={{ backgroundColor: '#010039', py: 6, width: '100vw' }}>
        <Box sx={sectionContent}>
          <Typography variant="h3" fontWeight={700} sx={{ color: 'white', textAlign: 'center' }}>
            <span style={{ color: '#FFCB00' }}>Thousands</span> of people have joined.<br />
            Don&apos;t miss your chance; you don&apos;t want to miss out.
          </Typography>
        </Box>
      </Box>

      {/* How it works Section */}
      <Box id="howitworks" sx={{ scrollMarginTop: '80px', bgcolor: 'white', width: '100vw' }}>
        <Box sx={sectionContent}>
          <HowItWorksSection />
        </Box>
      </Box>

      {/* Effortless Section */}
      <Box id="effortless" sx={{ scrollMarginTop: '80px', bgcolor: '#010039', py: 8, width: '100vw' }}>
        <Box sx={sectionContent}>
          <EffortlessSection />
        </Box>
      </Box>

      {/* Topics Section */}
      <Box id="topics" sx={{ scrollMarginTop: '80px', bgcolor: 'white', width: '100vw' }}>
        <Box sx={sectionContent}>
          <DynamicSlideSection onOpenLogin={() => setOpenLogin(true)} />
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#010039', width: '100vw', color: 'white', py: 6, textAlign: 'center' }}>
        <Box sx={sectionContent}>
          <Typography variant="body2">© 2025 mintrang8899@gmail.com. All rights reserved</Typography>
        </Box>
      </Box>

      <Fab
        color="primary"
        size="medium"
        aria-label="scroll to top"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
          boxShadow: 3,
          background: '#FFCB00',
          color: '#010039',
          '&:hover': { background: '#FFD700' },
        }}
        onClick={() => {
          const el = document.getElementById('home');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </Fab>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
};

export default LandingPage; 