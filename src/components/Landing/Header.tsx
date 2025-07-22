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

interface HeaderProps {
  onOpenLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLogin }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmall = useMediaQuery("(max-width:900px)");

  const handleMenuClick = (target: string) => {
    setDrawerOpen(false);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10), 0 1.5px 4px 0 rgba(0,0,0,0.08)',
        px: { xs: 0, md: 2 },
        py: 0.5,
        background: 'white',
        zIndex: 1201,
        borderBottom: 'none',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 2 } }}>
        <Toolbar disableGutters sx={{ minHeight: 64, px: { xs: 0, md: 1 } }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#222', letterSpacing: 1 }}>
              TrangDev
            </Typography>
          </Box>
          {/* Menu desktop */}
          {!isSmall && (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleMenuClick(item.target)}
                  sx={{
                    color: "#222",
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
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 10,
                  ml: 2,
                  background: '#FFCB00',
                  color: '#010039',
                  fontWeight: 700,
                  boxShadow: '0 2px 8px 0 rgba(255,203,0,0.15)',
                  '&:hover': { background: '#FFD700' },
                  px: 3,
                  py: 1.2,
                  fontSize: 16,
                }}
                onClick={onOpenLogin}
              >
                Get Started
              </Button>
            </Box>
          )}
          {/* Menu mobile */}
          {isSmall && (
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </Container>
      {/* Drawer cho mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem component="li" key={item.label} onClick={() => handleMenuClick(item.target)}>
                <Typography variant="body1" sx={{ color: "#222", textDecoration: "none", width: "100%" }}>
                  {item.label}
                </Typography>
              </ListItem>
            ))}
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 10,
                  background: '#FFCB00',
                  color: '#010039',
                  fontWeight: 700,
                  boxShadow: '0 2px 8px 0 rgba(255,203,0,0.15)',
                  '&:hover': { background: '#FFD700' },
                  px: 3,
                  py: 1.2,
                  fontSize: 16,
                }}
                onClick={onOpenLogin}
              >
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