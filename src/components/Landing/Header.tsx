'use client';
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const menuItems = [
  { label: "Home", target: "home" },
  { label: "How it works", target: "howitworks" },
  { label: "Effortless", target: "effortless" },
  { label: "Topics", target: "topics" },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmall = useMediaQuery("(max-width:900px)");

  // Scroll mượt đến section
  const handleMenuClick = (target: string) => {
    setDrawerOpen(false);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ boxShadow: "0px 0px 18px 5px rgb(0 0 0 / 5%)" }}>
      <Container>
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Image src="/assets/homepage/ylanes.svg" alt="Logo" width={120} height={40} />
          </Box>
          {/* Menu desktop */}
          {!isSmall && (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleMenuClick(item.target)}
                  sx={{
                    color: "#27272A",
                    fontWeight: 500,
                    fontSize: 16,
                    position: "relative",
                    background: "none !important",
                    boxShadow: "none !important",
                    minWidth: 0,
                    padding: "6px 12px",
                    borderRadius: 0,
                    transition: "color 0.2s",
                    '&:hover': {
                      color: '#FFCB00',
                      background: 'none',
                      boxShadow: 'none',
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 2,
                      height: 3,
                      borderRadius: 2,
                      background: '#FFCB00',
                      opacity: 0,
                      transform: 'scaleX(0)',
                      transition: 'opacity 0.2s, transform 0.2s',
                    },
                    '&:hover:after': {
                      opacity: 1,
                      transform: 'scaleX(1)',
                    },
                  }}
                  disableRipple
                  disableElevation
                  variant="text"
                >
                  {item.label}
                </Button>
              ))}
              <Button variant="contained" color="primary" sx={{ borderRadius: 10, ml: 2, background: '#FFCB00', color: '#010039', fontWeight: 700, '&:hover': { background: '#FFD700' } }}>
                Get Started
              </Button>
            </Box>
          )}
          {/* Menu mobile */}
          {isSmall && (
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
      {/* Drawer cho mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem component="li" key={item.label} onClick={() => handleMenuClick(item.target)}>
                <Typography variant="body1" sx={{ color: "#27272A", textDecoration: "none", width: "100%" }}>
                  {item.label}
                </Typography>
              </ListItem>
            ))}
            <ListItem>
              <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 10 }}>
                Get Started
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header; 