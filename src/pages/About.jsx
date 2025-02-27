import React from 'react';
import { Container, Typography, Box, Grid, Link, Avatar } from '@mui/material';

const About = () => {
  const teamMembers = [
    {
      name: 'HNFTPepe',
      handle: '@HnftPepe',
      description: 'Digital Artist, Stamps/Fake Rares/Rare Cocos/XCP/Ords',
      image: 'https://www.nsidirectory.com/static/media/hnftpepe.jpg'
    },
    {
      name: 'Socks',
      handle: '@BTC_Socks',
      description: 'Founder of the Bitcoin Socks Project. Goal to sell the most expensive digital Sock in history.',
      image: 'https://www.nsidirectory.com/static/media/socks.jpg'
    },
    {
      name: 'Mortylen',
      handle: '@lentymor',
      description: 'Mixed media artis. Data permanence connoiseur.',
      image: 'https://www.nsidirectory.com/static/media/mortylen.jpg'
    },
    {
      name: 'AZ',
      handle: '@az0013100',
      platform: 'Telegram',
      description: 'STAMPS OG, artist, doesn\'t use X.',
      image: 'https://www.nsidirectory.com/static/media/az.jpg'
    }
  ];

  const advisors = [
    {
      name: 'Mike',
      handle: '@mikeinspace',
      description: 'Founder of STAMPS Protocol. Likes to stamp jpegs on the blockchain.',
      image: 'https://www.nsidirectory.com/static/media/mike.jpg'
    },
    {
      name: 'Viva',
      handle: '@Viva_La_Vandal',
      description: 'Digital Artist, projects founders, entrepreneur, blockchain Vandal.',
      image: 'https://www.nsidirectory.com/static/media/viva.jpg'
    },
    {
      name: 'Sasha',
      handle: '@ChudoSasshha',
      description: 'Artist, Builder, Curator, QUEEN OF MEMES.',
      image: 'https://www.nsidirectory.com/static/media/sasha.jpg'
    },
    {
      name: 'Bobby',
      handle: '@BobbyZoo_BA',
      description: 'OG Digital Artist, STAMPS Collectors, Emergency contact for enemies.',
      image: 'https://www.nsidirectory.com/static/media/bobby.jpg'
    },
    {
      name: 'Hope',
      handle: '@HopefulofNFTs',
      description: 'Hopeful in blockchain NFTs. OG ordinals, CM/Collab managers.',
      image: 'https://www.nsidirectory.com/static/media/hope.jpg'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        pt: { xs: 12, sm: 14 },
        pb: 6,
      }}
    >
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            mb: 6,
            color: '#39FF14',
            fontFamily: 'Orbitron',
            textShadow: '0 0 20px rgba(57, 255, 20, 0.5)',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}
        >
          About Us
        </Typography>

        <Box sx={{ 
          mb: 6,
          p: 4,
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
            component="h2" 
            gutterBottom
            sx={{
              color: '#B026FF',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.5)',
              mb: 3
            }}
          >
            Background
          </Typography>
          <Typography 
            paragraph
            sx={{
              color: '#fff',
              fontFamily: 'Rajdhani',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
              '& a': {
                color: '#39FF14',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#B026FF',
                  textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                }
              }
            }}
          >
            The STAMPS protocol, initiated in early 2023 by Mike in Space, allows secure and immutable data storage on the Bitcoin blockchain, specifically within the UTXO of transactions. This ensures data cannot be deleted and will persist as long as Bitcoin exists. Since its launch, Bitcoin STAMPS has become a hub for artists, resulting in nearly 700K STAMPS, mostly digital artworks, embodying the concept that "Art is everlasting."
          </Typography>
          <Typography 
            paragraph
            sx={{
              color: '#fff',
              fontFamily: 'Rajdhani',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
            }}
          >
            STAMPS is part of the Counterparty family, known for pioneering NFTs since 2014, with notable projects like "Rare Pepe." The original "Nakamoto Card Series 1, card 1" is highly valued, with recent sales exceeding $100K. A key aspect of success for these collectibles is the use of a directory that serves as a marketplace for digital assets, enhancing visibility and community engagement.
          </Typography>
          <Typography 
            paragraph
            sx={{
              color: '#fff',
              fontFamily: 'Rajdhani',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
            }}
          >
            Directories function like galleries, showcasing artworks and promoting community growth. They provide legitimacy and provenance to NFTs, allowing collectors to trust the authenticity and value of their purchases. The interactive nature of directories fosters dialogue among artists and collectors, creating a thriving ecosystem that supports creativity and commerce. As the digital art landscape evolves, directories will play an increasingly vital role in shaping the future of art creation and appreciation.
          </Typography>
        </Box>

        <Box sx={{ 
          mb: 6,
          p: 4,
          border: '1px solid rgba(176, 38, 255, 0.3)',
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 30px rgba(176, 38, 255, 0.2)',
            border: '1px solid #B026FF'
          }
        }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{
              color: '#B026FF',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.5)',
              mb: 3
            }}
          >
            NSID
          </Typography>
          <Typography 
            paragraph
            sx={{
              color: '#fff',
              fontFamily: 'Rajdhani',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
            }}
          >
            The Nakamoto STAMP Index Directory (NSID) aims to create an official directory for Bitcoin STAMP artworks. Just as Counterparty has Rare Pepe and Fake Rare Directories, Bitcoin STAMP also required a comparable platform.
          </Typography>
          <Typography 
            paragraph
            sx={{
              color: '#fff',
              fontFamily: 'Rajdhani',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
            }}
          >
            This is a community driven project that consisted of founders, scientists, tech devs, and advisors for the curation and management of the upcoming STAMP directory. This directory will allow STAMP artists to submit their artwork to be added to the NSI directory. All approved STAMPS artwork will be displayed on the official website and various social media.
          </Typography>
          <Typography 
            paragraph
            sx={{
              color: '#fff',
              fontFamily: 'Rajdhani',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
            }}
          >
            The STAMPS Directory is divided into 10 Epochs. Each Epoch consisted of 10 Indexes (consisted of 42 STAMPS per index) plus 1 Burnt Index (consisted of 10 Burn Cards). In total, each Epoch consisted of 420 STAMPS plus 10 Burn Cards with a total of 4,300 STAMPS for the entire NSI directory.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography 
              variant="body1" 
              gutterBottom
              sx={{
                color: '#fff',
                fontFamily: 'Rajdhani',
                fontSize: '1.1rem',
                mb: 2,
                '& a': {
                  color: '#39FF14',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#B026FF',
                    textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                  }
                }
              }}
            >
              Official Name: Nakamoto STAMP Index Directory
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom
              sx={{
                color: '#fff',
                fontFamily: 'Rajdhani',
                fontSize: '1.1rem',
                mb: 2,
                '& a': {
                  color: '#39FF14',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#B026FF',
                    textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                  }
                }
              }}
            >
              Official Webpage: <Link href="http://www.NSIDirectory.com" target="_blank" rel="noopener noreferrer">www.NSIDirectory.com</Link>
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom
              sx={{
                color: '#fff',
                fontFamily: 'Rajdhani',
                fontSize: '1.1rem',
                mb: 2,
                '& a': {
                  color: '#39FF14',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#B026FF',
                    textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                  }
                }
              }}
            >
              Email: <Link href="mailto:nakamotostampindex@gmail.com">nakamotostampindex@gmail.com</Link>
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom
              sx={{
                color: '#fff',
                fontFamily: 'Rajdhani',
                fontSize: '1.1rem',
                '& a': {
                  color: '#39FF14',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#B026FF',
                    textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
                  }
                }
              }}
            >
              X (Twitter): <Link href="https://twitter.com/NSIDirectory" target="_blank" rel="noopener noreferrer">@NSIDirectory</Link>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{
              color: '#39FF14',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(57, 255, 20, 0.4)',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Team Members
          </Typography>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ 
                  mb: 2,
                  p: 3,
                  border: '1px solid rgba(57, 255, 20, 0.3)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  '&:hover': {
                    boxShadow: '0 0 30px rgba(57, 255, 20, 0.2)',
                    border: '1px solid #39FF14'
                  }
                }}>
                  <Avatar 
                    src={member.image} 
                    alt={member.name}
                    sx={{ 
                      width: 80, 
                      height: 80,
                      border: '2px solid #39FF14',
                      boxShadow: '0 0 10px rgba(57, 255, 20, 0.3)'
                    }}
                  />
                  <Box>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom
                      sx={{
                        color: '#39FF14',
                        fontFamily: 'Orbitron',
                        textShadow: '0 0 10px rgba(57, 255, 20, 0.4)'
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: '#B026FF',
                        fontFamily: 'Rajdhani',
                        mb: 1,
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.4)'
                      }}
                    >
                      {member.handle} on {member.platform || 'X'}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: '#fff',
                        fontFamily: 'Rajdhani',
                        textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      {member.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{
              color: '#39FF14',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(57, 255, 20, 0.4)',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Advisors
          </Typography>
          <Grid container spacing={3}>
            {advisors.map((advisor, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ 
                  mb: 2,
                  p: 3,
                  border: '1px solid rgba(176, 38, 255, 0.3)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  '&:hover': {
                    boxShadow: '0 0 30px rgba(176, 38, 255, 0.2)',
                    border: '1px solid #B026FF'
                  }
                }}>
                  <Avatar 
                    src={advisor.image} 
                    alt={advisor.name}
                    sx={{ 
                      width: 80, 
                      height: 80,
                      border: '2px solid #B026FF',
                      boxShadow: '0 0 10px rgba(176, 38, 255, 0.3)'
                    }}
                  />
                  <Box>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom
                      sx={{
                        color: '#B026FF',
                        fontFamily: 'Orbitron',
                        textShadow: '0 0 10px rgba(176, 38, 255, 0.4)'
                      }}
                    >
                      {advisor.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: '#39FF14',
                        fontFamily: 'Rajdhani',
                        mb: 1,
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}
                    >
                      {advisor.handle}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: '#fff',
                        fontFamily: 'Rajdhani',
                        textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      {advisor.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{
              color: '#B026FF',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(176, 38, 255, 0.5)',
              mb: 3,
              textAlign: 'center'
            }}
          >
            Curators/Scientists
          </Typography>
          <Typography 
            sx={{
              color: '#fff',
              fontFamily: 'Rajdhani',
              fontSize: '1.1rem',
              textAlign: 'center',
              textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
            }}
          >
            Too many to list.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
