'use client';
import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion, useInView } from "framer-motion";
import Image from 'next/image';

const steps = [
  {
    title: "Find your tribe using smart filters",
    desc: "Any age, any stage of life, any orientation, anywhere in the world!",
    img: "/assets/homepage/smartFilters.svg",
  },
  {
    title: "Connect and chat one-on-one",
    desc: "Only two-way connections, no followers, no random texts from strangers",
    img: "/assets/homepage/connectAndChat.svg",
  },
  {
    title: "Enjoy interesting small group conversations",
    desc: "Register or create a new room, max 6 in a room, stay anonymous if you wish",
    img: "/assets/homepage/BeYourselft.svg",
  },
];

const HowItWorksSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <Box component="section" sx={{ py: 5, bgcolor: 'white', px: { xs: 1, md: 4 } }}>
      <Typography
        variant="h3"
        fontWeight={700}
        textAlign="center"
        gutterBottom
        sx={{ color: '#222' }}
      >
        How does it work?
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        ref={ref}
      >
        {steps.map((step, idx) => (
          <Grid
            size={{ xs: 12, md: 6, lg: 4 }}
            key={step.title}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 16,
              }}
            >
              <Image
                src={step.img}
                alt="icon"
                width={120}
                height={120}
                style={{ marginBottom: 16 }}
              />
              <Typography
                variant="h5"
                fontWeight={500}
                sx={{ color: '#222', mt: 2 }}
              >
                {step.title}
              </Typography>
              <Typography
                sx={{
                  color: '#555',
                  mt: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  maxWidth: 300,
                }}
              >
                {step.desc}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
