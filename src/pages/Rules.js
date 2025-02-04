import React from 'react';
import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SecurityIcon from '@mui/icons-material/Security';
import RuleIcon from '@mui/icons-material/Rule';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import StampCard from '../components/StampCard';

const Rules = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#000000',
      pt: 12,
      pb: 6
    }}>
      <Container maxWidth="lg">
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
          STAMPS Rules & Guidelines
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ 
              p: 4, 
              mb: 4,
              backgroundColor: '#000000 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <ArtTrackIcon sx={{ 
                  mr: 2, 
                  fontSize: 30, 
                  color: '#39FF14 !important' 
                }} />
                <Typography 
                  variant="h4" 
                  component="h2"
                  sx={{
                    color: '#B026FF !important',
                    textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
                    fontFamily: 'Orbitron'
                  }}
                >
                  Submission Requirements
                </Typography>
              </Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ 
                      color: '#39FF14 !important',
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.4))'
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        STAMP Protocol Compliance
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        STAMP size does not matter, if you can STAMP it according to protocol rules via Stampchain.io
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ 
                      color: '#39FF14 !important',
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.4))'
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        Minimum Issuance
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        A minimum of 21+ copies/issuance for any newly STAMP after official launch
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ 
                      color: '#39FF14 !important',
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.4))'
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        Lock Status
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        All stamps submitted must be locked and not divisible
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ 
                      color: '#39FF14 !important',
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.4))'
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        Content Guidelines
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        No NSFW or highly racial artworks. Use good taste and judgment
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ 
                      color: '#39FF14 !important',
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.4))'
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        Originality
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        No plagiarism. Only original artwork will be accepted
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ 
                      color: '#39FF14 !important',
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.4))'
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        Collection Types
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        No artwork from generative or PFP collection types (StampPunks, Stampepes, etc.)
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ 
                      color: '#39FF14 !important',
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.4))'
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        Submission Limit
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        Each artist is limited to 3 Submissions per Index
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <Typography 
                variant="body2" 
                sx={{ 
                  mt: 2, 
                  fontStyle: 'italic',
                  color: '#39FF14 !important',
                  opacity: 0.8,
                  fontFamily: 'Rajdhani',
                  textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                }}
              >
                Note: Due to previously minted STAMPS, some requirements may not apply. Founders and Scientists 
                reserve the right to make exceptions on a case-by-case basis.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ 
              p: 4,
              backgroundColor: '#000000 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <HowToRegIcon sx={{ 
                  mr: 2, 
                  fontSize: 30,
                  color: '#39FF14 !important'
                }} />
                <Typography 
                  variant="h4" 
                  component="h2"
                  sx={{
                    color: '#B026FF !important',
                    textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
                    fontFamily: 'Orbitron'
                  }}
                >
                  Submission Procedure
                </Typography>
              </Box>
              <List>
                <ListItem>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        1. Visit Official Website
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        Go to www.NSIDirectory.com
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        2. Submit Artwork
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        Click on 'SUBMIT' and read all directions and guidelines
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        3. Complete Form
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        Include Artist Name, STAMPS Asset Numbers, Title, Description, Email, and Social Media Links
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        4. Evaluation Period
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        Allow several days for evaluation. Results will be sent to provided contact information
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        5. Burn Card Requirement
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        If approved, 1 'Burn Card' must be burned for official addition (available via public dispensers)
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary={
                      <Typography sx={{
                        color: '#B026FF !important',
                        fontFamily: 'Orbitron',
                        fontSize: '1.1rem',
                        textShadow: '0 0 8px rgba(176, 38, 255, 0.6)',
                        mb: 0.5
                      }}>
                        6. Verification
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{
                        color: '#39FF14 !important',
                        fontFamily: 'Rajdhani',
                        fontSize: '1rem',
                        textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                      }}>
                        Provide burn transaction confirmation as proof
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <Typography 
                variant="body2" 
                sx={{ 
                  mt: 2,
                  color: '#39FF14 !important',
                  opacity: 0.8,
                  fontFamily: 'Rajdhani',
                  textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                }}
              >
                If a submission is not approved, artists may resubmit in another Index. Exceptions to the 
                submission limit may be made depending on submission volume.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ 
              p: 4,
              backgroundColor: '#000000 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <WarningAmberIcon sx={{ 
                  mr: 2, 
                  fontSize: 30,
                  color: '#39FF14 !important'
                }} />
                <Typography 
                  variant="h4" 
                  component="h2"
                  sx={{
                    color: '#B026FF !important',
                    textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
                    fontFamily: 'Orbitron'
                  }}
                >
                  Important Notes
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  color: '#39FF14 !important',
                  fontFamily: 'Rajdhani',
                  fontSize: '1rem',
                  textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                }}
              >
                • Violation of submission guidelines (e.g., stamping other artists' artwork) will result in 
                immediate disqualification and potential ban from future submissions.
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  color: '#39FF14 !important',
                  fontFamily: 'Rajdhani',
                  fontSize: '1rem',
                  textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                }}
              >
                • All decisions regarding submissions are final, though exceptions may be considered on a 
                case-by-case basis by Founders and Scientists.
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: '#39FF14 !important',
                  fontFamily: 'Rajdhani',
                  fontSize: '1rem',
                  textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                }}
              >
                • The burn card requirement ensures commitment and helps maintain the quality of the directory.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ 
              p: 4,
              backgroundColor: '#000000 !important',
              border: '1px solid #39FF14',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <RuleIcon sx={{ 
                  mr: 2, 
                  fontSize: 30,
                  color: '#39FF14 !important'
                }} />
                <Typography 
                  variant="h4" 
                  component="h2"
                  sx={{
                    color: '#B026FF !important',
                    textShadow: '0 0 15px rgba(176, 38, 255, 0.6)',
                    fontFamily: 'Orbitron'
                  }}
                >
                  NSI Burn Card
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
                <Box sx={{ width: '300px', mb: 3 }}>
                  <StampCard stampId="719136" />
                </Box>
                <Typography 
                  variant="body1" 
                  align="center"
                  sx={{
                    color: '#39FF14 !important',
                    fontFamily: 'Rajdhani',
                    fontSize: '1rem',
                    textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                  }}
                >
                  NSI Burn Card - Required for official addition to the directory
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  align="center" 
                  sx={{ 
                    mt: 1,
                    color: '#39FF14 !important',
                    opacity: 0.8,
                    fontFamily: 'Rajdhani',
                    textShadow: '0 0 8px rgba(57, 255, 20, 0.4)'
                  }}
                >
                  <a 
                    href="https://stamped.ninja/stamp/A719136" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    View on Stamped.ninja
                  </a>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Rules;
