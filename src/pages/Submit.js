import React from 'react';
import { Box, Container, Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText, Button, Grid, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const textFieldStyle = {
  backgroundColor: 'rgba(57, 255, 20, 0.1)',
  border: '1px solid rgba(57, 255, 20, 0.3)',
  borderRadius: 2,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(57, 255, 20, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: '#39FF14',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#39FF14',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
    fontFamily: 'Rajdhani',
    fontSize: '1.1rem',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#39FF14',
  },
  '& .MuiOutlinedInput-input': {
    color: '#fff',
    fontFamily: 'Rajdhani',
    fontSize: '1.1rem',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
  },
};

const Submit = () => {
  const submissionSteps = [
    {
      text: 'Ensure the STAMP artwork adheres to all the requirements.',
      link: '/rules'
    },
    {
      text: 'Ensure the STAMP artwork is minted and locked.'
    },
    {
      text: 'Make sure to keep an eye on your telegram and email after you submit.'
    },
    {
      text: 'Once a submitted STAMP is accepted into the directory, 1 Burn card will be required prior to STAMP getting officially added to the directory.'
    },
    {
      text: 'Burn card can be obtained in the following Dispenser. Make sure to obtain the correct burn card for the current Index.',
      burnCardLink: 'https://stamped.ninja/stamp/A13500640511911088000'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: 'background.default',
      pt: 12,
      pb: 8
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center',
          mb: 8,
          background: 'linear-gradient(180deg, rgba(57, 255, 20, 0.1) 0%, rgba(0,0,0,0) 100%)',
          py: 8,
          px: 2,
          borderRadius: 2,
          border: '1px solid rgba(57, 255, 20, 0.2)',
          boxShadow: '0 0 30px rgba(57, 255, 20, 0.1)'
        }}>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              mb: 4,
              color: '#39FF14',
              fontFamily: 'Orbitron',
              textShadow: '0 0 20px rgba(57, 255, 20, 0.5)',
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '0.05em',
              fontWeight: 'bold'
            }}
          >
            Submit a STAMP Artwork
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              mb: 4,
              color: '#B026FF',
              fontFamily: 'Rajdhani',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.5)',
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Index #04 Submissions
          </Typography>
        </Box>

        {/* Submission Steps */}
        <Paper elevation={0} sx={{
          p: 4,
          backgroundColor: 'transparent !important',
          border: '1px solid rgba(57, 255, 20, 0.3)',
          borderRadius: 2,
          mb: 6,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.2)',
            border: '1px solid #39FF14'
          }
        }}>
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{
              color: '#39FF14',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(57, 255, 20, 0.4)',
              mb: 4
            }}
          >
            Submission Requirements
          </Typography>
          
          <List>
            {submissionSteps.map((step, index) => (
              <ListItem 
                key={index}
                sx={{
                  mb: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(57, 255, 20, 0.05)'
                  }
                }}
              >
                <ListItemIcon>
                  <ArrowRightIcon sx={{ color: '#39FF14' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color: '#fff',
                        fontFamily: 'Rajdhani',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
                        '& a': {
                          color: '#B026FF',
                          textDecoration: 'none',
                          textShadow: '0 0 10px rgba(176, 38, 255, 0.4)',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            color: '#39FF14',
                            textShadow: '0 0 15px rgba(57, 255, 20, 0.5)'
                          }
                        }
                      }}
                    >
                      {step.link ? (
                        <Link component={RouterLink} to={step.link}>
                          {step.text}
                        </Link>
                      ) : (
                        step.text
                      )}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>

          {/* Burn Card Link */}
          <Box sx={{ 
            mt: 4, 
            textAlign: 'center'
          }}>
            <Button
              href="https://stamped.ninja/stamp/A13500640511911088000"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                color: '#39FF14',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #39FF14',
                fontFamily: 'Orbitron',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                padding: '12px 32px',
                textTransform: 'none',
                textShadow: '0 0 10px rgba(57, 255, 20, 0.8)',
                boxShadow: '0 0 15px rgba(57, 255, 20, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(176, 38, 255, 0.1)',
                  color: '#B026FF',
                  border: '2px solid #B026FF',
                  textShadow: '0 0 10px rgba(176, 38, 255, 0.8)',
                  boxShadow: '0 0 20px rgba(176, 38, 255, 0.4)'
                }
              }}
            >
              Get Burn Card
            </Button>
          </Box>
        </Paper>

        {/* Submission Form Section */}
        <Paper elevation={0} sx={{
          p: 4,
          backgroundColor: 'transparent !important',
          border: '1px solid rgba(57, 255, 20, 0.3)',
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.2)',
            border: '1px solid #39FF14'
          }
        }}>
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{
              color: '#39FF14',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(57, 255, 20, 0.4)',
              mb: 3,
              textAlign: 'center'
            }}
          >
            Submit Your STAMP
          </Typography>
          
          <Box component="form" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              {/* Artist Information */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Artist Name"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Telegram Handle"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>

              {/* STAMP Information */}
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#B026FF',
                    fontFamily: 'Orbitron',
                    textShadow: '0 0 10px rgba(176, 38, 255, 0.4)',
                    mb: 2
                  }}
                >
                  STAMP Details
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="STAMP Title"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="STAMP ID"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="STAMP Link (stamped.ninja URL)"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Transaction ID"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description (Optional)"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    color: '#39FF14',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '2px solid #39FF14',
                    fontFamily: 'Orbitron',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    padding: '12px 48px',
                    textTransform: 'none',
                    textShadow: '0 0 10px rgba(57, 255, 20, 0.8)',
                    boxShadow: '0 0 15px rgba(57, 255, 20, 0.3)',
                    '&:hover': {
                      backgroundColor: 'rgba(176, 38, 255, 0.1)',
                      color: '#B026FF',
                      border: '2px solid #B026FF',
                      textShadow: '0 0 10px rgba(176, 38, 255, 0.8)',
                      boxShadow: '0 0 20px rgba(176, 38, 255, 0.4)'
                    }
                  }}
                >
                  Submit STAMP
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Submit;
