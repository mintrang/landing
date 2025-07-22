import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import MSlider from "./MSlider";

const DynamicSlideSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'white', px: { xs: 1, sm: 2, md: 0 }, overflowX: { xs: 'auto', sm: 'auto', md: 'unset' } }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid component="div" item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight={700} gutterBottom sx={{ color: '#222', fontSize: { xs: 24, sm: 32, md: 40 }, textAlign: { xs: 'center', md: 'left' }, px: { xs: 2, md: 0 } }}>
              Over 100+ conversation topics<br/> to choose from!
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ py: 2, color: '#555', fontSize: { xs: 14, sm: 18, md: 22 }, textAlign: { xs: 'center', md: 'left' }, px: { xs: 2, md: 0 } }}>
              Your life story, Spirituality, Philosophy, Relationships, Self love, Letting go <br/> and many more
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: '#FFCB00',
                color: '#010039',
                fontWeight: 700,
                borderRadius: 10,
                mt: 2,
                '&:hover': { background: '#FFD700' },
                px: 4,
                py: 1.5,
                display: 'block',
                mx: { xs: 'auto', md: '0' }, // căn giữa trên mobile
              }}
            >
              Take me there
            </Button>
          </motion.div>
        </Grid>
        <Grid  item xs={12} md={5} display="flex" justifyContent="center" alignItems="center" sx={{ px: { xs: 2, md: 0 } }}>
         
            <MSlider />
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default DynamicSlideSection; 