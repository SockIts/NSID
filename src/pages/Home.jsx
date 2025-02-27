import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StampCard from '../components/StampCard';

const Home = () => {
  const featuredStamps = [
    67389, 338718, 399023, 703795, 349013,
    682581, 725295, 54130, 307165, 747903, 721724
  ];

  const timelineEvents = [
    {
      date: 'January 2023',
      title: 'STAMPS Protocol Launch',
      description: 'Mike in Space initiates the STAMPS protocol, introducing a new way to store immutable data on Bitcoin.'
    },
    {
      date: 'March 2023',
      title: 'First STAMP Collection',
      description: 'The first collection of STAMPS is created, demonstrating the potential of Bitcoin-native digital artifacts.'
    },
    {
      date: 'June 2023',
      title: 'Community Growth',
      description: 'STAMPS community expands rapidly as artists and collectors recognize the value of truly immutable digital art.'
    },
    {
      date: 'August 2023',
      title: 'NSI Directory Launch',
      description: 'Launch of the Nakamoto STAMP Index Directory, providing a curated platform for discovering and collecting STAMPS.'
    },
    {
      date: 'October 2023',
      title: 'First STAMPS Exhibition',
      description: 'The first physical exhibition featuring STAMPS artwork takes place, bridging digital and traditional art worlds.'
    },
    {
      date: 'January 2024',
      title: 'STAMPS Protocol Enhancement',
      description: 'Major updates to the STAMPS protocol, improving efficiency and expanding creative possibilities.'
    },
    {
      date: 'August 2024',
      title: 'Pepe in Bali Exhibition',
      description: 'STAMPS artwork showcased at the Superlative Gallery in Bali, featuring Pepe-themed digital artifacts.'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      position: 'relative',
      pt: { xs: 12, sm: 14 },
      pb: 6,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.1) 0%, rgba(176, 38, 255, 0.05) 25%, rgba(10, 10, 15, 0) 50%)',
        pointerEvents: 'none',
      },
    }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-50%',
            right: '-50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(57, 255, 20, 0.1) 50%, transparent 100%)',
            transform: 'skewY(-12deg)',
            zIndex: -1,
          },
        }}>
          <Typography 
            variant="h1"
            sx={{ 
              mb: 4,
              color: '#B026FF !important',
              fontFamily: 'Orbitron',
              textShadow: '0 0 20px rgba(176, 38, 255, 0.7)',
              letterSpacing: '0.1em',
              position: 'relative',
              display: 'inline-block',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '-20px',
                width: '10px',
                height: '2px',
                bgcolor: '#B026FF',
                boxShadow: '0 0 10px rgba(176, 38, 255, 0.8)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                right: '-20px',
                width: '10px',
                height: '2px',
                bgcolor: '#B026FF',
                boxShadow: '0 0 10px rgba(176, 38, 255, 0.8)',
              },
            }}
          >
            <br/>
              STAMP INDEX
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4,
              color: '#39FF14 !important',
              fontFamily: 'Rajdhani',
              textShadow: '0 0 20px rgba(57, 255, 20, 0.5)',
              letterSpacing: '0.05em'
            }}
          >
            Immutable Digital Artifact Directory on Bitcoin
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 6, 
              fontStyle: 'italic',
              color: '#39FF14 !important',
              opacity: 0.8,
              fontFamily: 'Rajdhani',
              textShadow: '0 0 10px rgba(57, 255, 20, 0.4)'
            }}
          >
            "Home to only the most immutable and unprunable artworks on the Bitcoin blockchain"
          </Typography>
          <Button
            component={RouterLink}
            to="/submit"
            variant="contained"
            size="large"
            sx={{ 
              py: 2,
              px: 6,
              fontSize: '1.2rem',
              fontFamily: 'Orbitron',
              backgroundColor: '#000000 !important',
              color: '#39FF14 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease-in-out',
              '& span': {
                color: '#39FF14',
                position: 'relative',
                zIndex: 1
              },
              '&:hover': {
                backgroundColor: 'rgba(57, 255, 20, 0.1) !important',
                borderColor: '#B026FF',
                boxShadow: '0 0 30px rgba(176, 38, 255, 0.3)',
                '& span': {
                  color: '#B026FF'
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(57, 255, 20, 0.2) 50%, transparent 100%)',
                animation: 'shine 3s infinite',
              },
              '@keyframes shine': {
                '100%': {
                  left: '100%',
                },
              },
            }}
          >
            <span>Submit Art</span>
          </Button>
        </Box>

        {/* Featured Section */}
        <Box sx={{ 
          py: 8,
          position: 'relative',
        }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              color: '#B026FF !important',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
              letterSpacing: '0.05em'
            }}
          >
            Featured STAMPS
          </Typography>
          <Grid container spacing={4}>
            {featuredStamps.map((stampId) => (
              <Grid item xs={12} sm={6} md={4} key={stampId}>
                <Card sx={{ 
                  height: '100%',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out',
                  }
                }}>
                  <CardContent>
                    <StampCard stampId={stampId.toString()} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Events Section */}
        <Box sx={{ 
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'radial-gradient(circle at 50% 0%, rgba(176, 38, 255, 0.1) 0%, rgba(10, 10, 15, 0) 50%)',
            zIndex: -1,
          },
        }}>
          <Typography variant="h3" gutterBottom align="center">
            STAMPS Events
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    STAMPS Artworks showcasing in Pepe in Bali August 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The "Pepe in Bali Exhibition" at the Superlative Gallery in Bali showcases Pepe art
                    from August 11th to August 24th, 2024. It educates on Pepe's cultural significance,
                    digital art history, and engages with the Pepe and internet culture community.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    STAMPS invading Beeple PepeFest
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom color="text.secondary">
                    August 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pepefest at Beeple Studios was a community-led celebration of all things Pepe.
                    A one-day event celebrating the community and culture around{' '}
                    <Link href="https://x.com/Matt_Furie" target="_blank" rel="noopener">
                      Matt Furie
                    </Link>'s infamous 2005 creation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* What's New Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h3" gutterBottom align="center">
            What's New With NSID?
          </Typography>
          <Typography variant="body1" paragraph align="center">
            The STAMPS protocol was initiated in early 2023 by Mike in Space with the aim of securely storing data on the Bitcoin blockchain in an immutable and unpruneable manner. These data are directly stored in the UTXO, an integral part of a Bitcoin transaction, ensuring they cannot be deleted or pruned. By existing on-chain rather than on an external server, the data will persist as long as Bitcoin remains.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Link
              href="https://medium.com/@nakamotostampindex/nakamoto-stamp-index-directory-1489cf3ea39a"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ textDecoration: 'none' }}
            >
              Read More on Medium
            </Link>
          </Box>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ py: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center"
            sx={{ 
              mb: 6,
              color: '#B026FF !important',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
              letterSpacing: '0.05em'
            }}
          >
            STAMPS Timeline
          </Typography>
          <Grid container spacing={4}>
            {timelineEvents.map((event, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ 
                  height: '100%',
                  backgroundColor: '#000000 !important',
                  border: '1px solid #39FF14',
                  boxShadow: '0 0 15px rgba(57, 255, 20, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(57, 255, 20, 0.4)',
                    transform: 'translateX(10px)'
                  }
                }}>
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      component="div"
                      sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        textShadow: '0 0 10px rgba(176, 38, 255, 0.5)',
                        mb: 1
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography 
                      variant="subtitle2"
                      sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        opacity: 0.8,
                        mb: 2
                      }}
                    >
                      {event.date}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ 
          py: 8, 
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-50%',
            right: '-50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(176, 38, 255, 0.05) 50%, transparent 100%)',
            transform: 'skewY(-3deg)',
            zIndex: -1,
          }
        }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              mb: 4,
              color: '#B026FF !important',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
              letterSpacing: '0.05em'
            }}
          >
            Join the Revolution
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              mb: 4,
              color: '#39FF14 !important',
              fontFamily: 'Rajdhani',
              textShadow: '0 0 10px rgba(57, 255, 20, 0.4)'
            }}
          >
            Be part of the future of digital art on Bitcoin
          </Typography>
          <Button
            component={RouterLink}
            to="/submit"
            variant="contained"
            size="large"
            sx={{ 
              py: 2,
              px: 6,
              fontSize: '1.2rem',
              fontFamily: 'Orbitron',
              backgroundColor: '#000000 !important',
              color: '#39FF14 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)',
              transition: 'all 0.3s ease-in-out',
              '& span': {
                color: '#39FF14',
                position: 'relative',
                zIndex: 1
              },
              '&:hover': {
                backgroundColor: 'rgba(57, 255, 20, 0.1) !important',
                borderColor: '#B026FF',
                boxShadow: '0 0 30px rgba(176, 38, 255, 0.3)',
                '& span': {
                  color: '#B026FF'
                }
              }
            }}
          >
            <span>Submit Your Art</span>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
