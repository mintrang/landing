'use client';

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./HomePage.css";
import EffortlessSection from "./EffortlessSection";
import HowItWorksSection from "./HowItWorksSection";
import HeroSection from "./HeroSection";
import BranchesSection from "./BranchesSection";
import DynamicSlideSection from "./DynamicSlideSection";
import Header from "./Header";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LoginModal from './LoginModal';
import { useState } from 'react';

const sectionFullWidth = {
  position: 'relative',
  left: '50%',
  width: '100vw',
  marginLeft: '-50vw',
  marginRight: '-50vw',
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
          Don't miss your chance; you don't want to miss out.
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
        <DynamicSlideSection />
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#010039', ...sectionFullWidth, color: 'white', py: 6, textAlign: 'center' }}>
        <Typography variant="body2">© 2023 TrangDev. All rights reserved</Typography>
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