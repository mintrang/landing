'use client';
import React, { useRef } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const logos = [
  { src: "/assets/homepage/outlook.svg", alt: "OutlookLogo" },
  { src: "/assets/homepage/linkedin copy.svg", alt: "LinkedinLogo" },
  { src: "/assets/homepage/builder.svg", alt: "BuilderLogo" },
  { src: "/assets/homepage/hin.svg", alt: "HinLogo" },
];

const BranchesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box className="branchBox" alignItems="center" mb={5} pt={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ maxWidth: 900, margin: '0 auto' }}>
        <Grid item xs={12} md={3} textAlign="center">
          <Image src="/assets/homepage/ylanes.svg" alt="YlaneLogo" width={120} height={40} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6 }}>
            {logos.map((logo, idx) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Image src={logo.src} alt={logo.alt} width={80} height={40} />
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BranchesSection; 