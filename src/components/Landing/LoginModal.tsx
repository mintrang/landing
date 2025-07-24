import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  React.useEffect(() => {
    if (open) {
      setSent(false);
      setError('');
      setEmail('');
      setTitle('');
      setMessage('');
    }
  }, [open]);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    if (!email.trim()) {
      setError('Please enter your email.');
      return false;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!message.trim()) {
      setError('Please enter your message.');
      return false;
    }
    return true;
  };

  const handleSend = async () => {
    setError('');
    setSent(false);
    if (!validate()) return;
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, title, message }),
    });
    if (res.ok) {
      setSent(true);
      onClose();
      setOpenSnackbar(true);
      setEmail(''); setTitle(''); setMessage('');
    } else setError('Send failed. Please try again.');
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth sx={{ borderRadius: 4 }}>
        <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 700, color: '#010039', px: 3, pt: 3 }}>
          Contact Me
        </Typography>
        <Typography sx={{ color: '#888', fontSize: 14, px: 3, mt: 1, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <span role="img" aria-label="smile">😊</span>
          Feel free to message me about anything – don&apos;t hesitate or be shy!
        </Typography>
        <DialogContent>
          <TextField
            label="Your Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            autoFocus
          />
          <TextField
            label="Title (optional)"
            value={title}
            onChange={e => setTitle(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Message"
            multiline
            minRows={3}
            value={message}
            onChange={e => setMessage(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          {error && <Typography color="error.main" sx={{ mt: 2 }}>{error}</Typography>}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} color="inherit">Cancel</Button>
          <Button
            onClick={handleSend}
            variant="contained"
            disabled={sent || !email.trim() || !isValidEmail(email) || !message.trim()}
            sx={{
              borderRadius: 10,
              background: '#FFCB00',
              color: '#010039',
              fontWeight: 700,
              boxShadow: '0 2px 8px 0 rgba(255,203,0,0.15)',
              '&:hover': { background: '#FFD700' },
       
              fontSize: 16,
            }}
          >
            {sent ? 'Sent!' : 'Send'}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert elevation={6} variant="filled" severity="success" sx={{ width: '100%' }}>
          Thank you for contacting! I will reply soon.
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default LoginModal; 