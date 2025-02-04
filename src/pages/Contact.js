import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Grid, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#000',
      pt: { xs: 12, sm: 14 },
      pb: 6
    }}>
      <Container maxWidth="md">
        <Typography 
          variant="h1" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{
            color: '#B026FF !important',
            textShadow: '0 0 20px rgba(176, 38, 255, 0.7)',
            mb: 4,
            fontFamily: 'Orbitron',
            letterSpacing: '0.1em'
          }}
        >
          Contact Us
        </Typography>

        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            color: '#39FF14 !important',
            textShadow: '0 0 10px rgba(57, 255, 20, 0.5)',
            mb: 8,
            fontFamily: 'Rajdhani'
          }}
        >
          Get in touch with the STAMP team
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{
              p: 4,
              backgroundColor: '#000000 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
            }}>
              <Box component="form" noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  sx={{
                    '& label': { color: '#39FF14 !important' },
                    '& label.Mui-focused': { color: '#B026FF !important' },
                    '& .MuiOutlinedInput-root': {
                      color: '#39FF14 !important',
                      '& fieldset': { borderColor: '#39FF14 !important' },
                      '&:hover fieldset': { borderColor: '#B026FF !important' },
                      '&.Mui-focused fieldset': { borderColor: '#B026FF !important' },
                    },
                    mb: 3
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    '& label': { color: '#39FF14 !important' },
                    '& label.Mui-focused': { color: '#B026FF !important' },
                    '& .MuiOutlinedInput-root': {
                      color: '#39FF14 !important',
                      '& fieldset': { borderColor: '#39FF14 !important' },
                      '&:hover fieldset': { borderColor: '#B026FF !important' },
                      '&.Mui-focused fieldset': { borderColor: '#B026FF !important' },
                    },
                    mb: 3
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="message"
                  label="Your Message"
                  id="message"
                  multiline
                  rows={4}
                  sx={{
                    '& label': { color: '#39FF14 !important' },
                    '& label.Mui-focused': { color: '#B026FF !important' },
                    '& .MuiOutlinedInput-root': {
                      color: '#39FF14 !important',
                      '& fieldset': { borderColor: '#39FF14 !important' },
                      '&:hover fieldset': { borderColor: '#B026FF !important' },
                      '&.Mui-focused fieldset': { borderColor: '#B026FF !important' },
                    },
                    mb: 3
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: '#39FF14 !important',
                    borderColor: '#39FF14 !important',
                    backgroundColor: 'transparent !important',
                    fontFamily: 'Orbitron',
                    '&:hover': {
                      borderColor: '#B026FF !important',
                      color: '#B026FF !important',
                      backgroundColor: 'rgba(176, 38, 255, 0.1) !important',
                      textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{
              p: 4,
              backgroundColor: '#000000 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
            }}>
              <Typography 
                variant="h5" 
                component="h3"
                sx={{
                  color: '#B026FF !important',
                  textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
                  fontFamily: 'Orbitron',
                  mb: 4
                }}
              >
                Connect With Us
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Link
                  href="https://twitter.com/NSIDirectory"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#39FF14 !important',
                    textDecoration: 'none',
                    mb: 2,
                    '&:hover': {
                      color: '#B026FF !important',
                      textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                    }
                  }}
                >
                  <TwitterIcon sx={{ mr: 2 }} />
                  <Typography 
                    variant="body1"
                    sx={{
                      fontFamily: 'Rajdhani'
                    }}
                  >
                    @NSIDirectory
                  </Typography>
                </Link>

                <Link
                  href="https://t.me/NSIDirectory"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#39FF14 !important',
                    textDecoration: 'none',
                    mb: 2,
                    '&:hover': {
                      color: '#B026FF !important',
                      textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                    }
                  }}
                >
                  <TelegramIcon sx={{ mr: 2 }} />
                  <Typography 
                    variant="body1"
                    sx={{
                      fontFamily: 'Rajdhani'
                    }}
                  >
                    NSI Directory Channel
                  </Typography>
                </Link>

                <Link
                  href="mailto:contact@nsidirectory.com"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#39FF14 !important',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#B026FF !important',
                      textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                    }
                  }}
                >
                  <EmailIcon sx={{ mr: 2 }} />
                  <Typography 
                    variant="body1"
                    sx={{
                      fontFamily: 'Rajdhani'
                    }}
                  >
                    contact@nsidirectory.com
                  </Typography>
                </Link>
              </Box>

              <Typography 
                variant="body1"
                sx={{
                  color: '#39FF14 !important',
                  fontFamily: 'Rajdhani',
                  opacity: 0.8
                }}
              >
                We typically respond within 24 hours.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
