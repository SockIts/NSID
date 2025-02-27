import React from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const indices = [
  {
    title: 'Legacy Index',
    description: 'The first collection of immutable artworks on Bitcoin',
    path: '/legacyindex'
  },
  {
    title: 'Index #01',
    description: 'The first Nakamoto Epoch collection',
    path: '/index01'
  },
  {
    title: 'Index #02',
    description: 'The second Nakamoto Epoch collection',
    path: '/index02'
  },
  {
    title: 'Index #03',
    description: 'The third Nakamoto Epoch collection',
    path: '/index03'
  },
  {
    title: 'Index #04',
    description: 'The next evolution in digital artifacts',
    path: '/index04',
    comingSoon: true
  }
];

const StampIndex = () => {
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
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              letterSpacing: '0.05em',
              fontWeight: 'bold'
            }}
          >
            STAMP Index
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              mb: 4,
              color: '#B026FF',
              fontFamily: 'Rajdhani',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.5)',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Explore our curated collections of Bitcoin stamps
          </Typography>
        </Box>

        {/* Index Grid */}
        <Grid container spacing={4} justifyContent="center">
          {indices.map((index) => (
            <Grid item xs={12} sm={6} md={4} key={index.title}>
              <Box sx={{
                textAlign: 'center',
                p: 4,
                border: '1px solid rgba(57, 255, 20, 0.3)',
                borderRadius: 2,
                bgcolor: 'rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease-in-out',
                opacity: index.comingSoon ? 0.7 : 1,
                '&:hover': {
                  transform: index.comingSoon ? 'none' : 'translateY(-5px)',
                  boxShadow: '0 5px 30px rgba(57, 255, 20, 0.2)',
                  border: '1px solid #39FF14'
                }
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2,
                    color: '#39FF14',
                    fontFamily: 'Orbitron',
                    textShadow: '0 0 15px rgba(57, 255, 20, 0.4)',
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  {index.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: '#B026FF',
                    fontFamily: 'Rajdhani',
                    textShadow: '0 0 10px rgba(176, 38, 255, 0.4)',
                    fontSize: '1rem'
                  }}
                >
                  {index.description}
                </Typography>
                {index.comingSoon ? (
                  <Typography 
                    variant="body1"
                    sx={{
                      color: '#B026FF',
                      textShadow: '0 0 10px rgba(176, 38, 255, 0.5)',
                      fontFamily: 'Orbitron',
                      letterSpacing: '0.1em'
                    }}
                  >
                    Coming Soon
                  </Typography>
                ) : (
                  <Button
                    component={Link}
                    to={index.path}
                    variant="outlined"
                    sx={{
                      color: '#39FF14',
                      backgroundColor: 'transparent',
                      border: '2px solid #39FF14',
                      fontFamily: 'Orbitron',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      padding: '10px 24px',
                      textTransform: 'none',
                      textShadow: '0 0 10px #39FF14',
                      boxShadow: '0 0 15px rgba(57, 255, 20, 0.3)',
                      '& .MuiButton-label': {
                        color: '#39FF14',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(57, 255, 20, 0.1)',
                        color: '#B026FF',
                        border: '2px solid #B026FF',
                        textShadow: '0 0 10px #B026FF',
                        boxShadow: '0 0 20px rgba(176, 38, 255, 0.4)'
                      }
                    }}
                  >
                    <span style={{
                      color: 'inherit',
                      textShadow: 'inherit'
                    }}>
                      View Collection
                    </span>
                  </Button>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StampIndex;
