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

const sectionFullWidth = {
  position: 'relative',
  width: '100vw',
  paddingLeft: '10%',
  paddingRight: '10%',
};

const LandingPage: React.FC = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <Header onOpenLogin={() => setOpenLogin(true)} />

      {/* Hero Section */}
      <Box id="home" sx={{ scrollMarginTop: '70px', ...sectionFullWidth, bgcolor: 'white' }}>
        <HeroSection />
      </Box>

      {/* Banner Section */}
      <Box sx={{ backgroundColor: '#010039', ...sectionFullWidth, py: 6 }}>
        <Typography variant="h3" fontWeight={700} sx={{ color: 'white', textAlign: 'center' }}>
          <span style={{ color: '#FFCB00' }}>Thousands</span> of people have joined.<br />
          Don&apos;t miss your chance; you don&apos;t want to miss out.
        </Typography>
      </Box>

      {/* How it works Section */}
      <Box id="howitworks" sx={{ scrollMarginTop: '80px', bgcolor: 'white' }}>
        <HowItWorksSection />
      </Box>

      {/* Effortless Section */}
      <Box id="effortless" sx={{ scrollMarginTop: '80px', ...sectionFullWidth, bgcolor: '#010039', py: 8 }}>
        <EffortlessSection />
      </Box>

      {/* Topics Section */}
      <Box id="topics" sx={{ scrollMarginTop: '80px', ...sectionFullWidth, bgcolor: 'white' }}>
        <DynamicSlideSection onOpenLogin={() => setOpenLogin(true)} />
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#010039', ...sectionFullWidth, color: 'white', py: 6, textAlign: 'center' }}>
        <Typography variant="body2">© 2025 mintrang8899@gmail.com. All rights reserved</Typography>
      </Box>
      {/* Nút cuộn lên đầu */}
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