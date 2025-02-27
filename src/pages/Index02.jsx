import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import StampCard from '../components/StampCard';

const Index02StampCard = ({ stamp }) => (
  <Card sx={{
    height: '100%',
    backgroundColor: '#000000 !important',
    border: '1px solid #39FF14',
    boxShadow: '0 0 15px rgba(57, 255, 20, 0.2)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 0 30px rgba(57, 255, 20, 0.4)',
      border: '1px solid #B026FF'
    }
  }}>
    <CardContent>
      <Typography 
        variant="h5" 
        component="h2" 
        color="#B026FF !important"
        textShadow="0 0 15px rgba(176, 38, 255, 0.6)"
        gutterBottom
        sx={{
          fontFamily: 'Orbitron',
          mb: 2,
          fontSize: '1rem',
          textAlign: 'center'
        }}
      >
        {stamp.title}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <StampCard stampId={stamp.stampId} />
      </Box>
      <Typography 
        variant="body1" 
        color="#39FF14 !important"
        textShadow="0 0 8px rgba(57, 255, 20, 0.4)"
        gutterBottom
        sx={{
          fontFamily: 'Rajdhani',
          textAlign: 'center'
        }}
      >
        Issuance: {stamp.issuance}
      </Typography>
      <Typography 
        variant="body1" 
        color="#39FF14 !important"
        textShadow="0 0 8px rgba(57, 255, 20, 0.4)"
        gutterBottom
        sx={{
          fontFamily: 'Rajdhani',
          textAlign: 'center'
        }}
      >
        Artist: {stamp.artist}
      </Typography>
      <Typography 
        variant="body1" 
        color="#39FF14 !important"
        textShadow="0 0 8px rgba(57, 255, 20, 0.4)"
        gutterBottom
        sx={{
          fontFamily: 'Rajdhani',
          textAlign: 'center'
        }}
      >
        Rarity Score: {stamp.rarityScore}
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Link
          href={stamp.link}
          target="_blank"
          rel="noopener noreferrer"
          color="#B026FF !important"
          sx={{ 
            textDecoration: 'none',
            fontFamily: 'Orbitron',
            textShadow: '0 0 10px rgba(176, 38, 255, 0.5)',
            '&:hover': {
              color: '#39FF14 !important',
              textShadow: '0 0 10px rgba(57, 255, 20, 0.5)'
            }
          }}
        >
          View on Stamped.ninja
        </Link>
      </Box>
    </CardContent>
  </Card>
);

const Index02 = () => {
  const stamps = [
    { title: 'Naka_Index02_STAMP01', stampId: '707232', issuance: 69, artist: 'Socks', rarityScore: 93.3, link: 'https://stamped.ninja/stamp/A1377422988007421759' },
    { title: 'Naka_Index02_STAMP02', stampId: '530165', issuance: 21, artist: 'Lu Ambriz', rarityScore: 91.3, link: 'https://stamped.ninja/stamp/A10891337924982120000' },
    { title: 'Naka_Index02_STAMP03', stampId: '359671', issuance: 27, artist: 'Mortylen', rarityScore: 89.1, link: 'https://stamped.ninja/stamp/A931199968408912208' },
    { title: 'Naka_Index02_STAMP04', stampId: '73324', issuance: 100, artist: 'HNFTPepe', rarityScore: 88.0, link: 'https://stamped.ninja/stamp/A12394435489634753420' },
    { title: 'Naka_Index02_STAMP05', stampId: '74608', issuance: 35, artist: 'Socks', rarityScore: 87.3, link: 'https://stamped.ninja/stamp/A6181134718996147082' },
    { title: 'Naka_Index02_STAMP06', stampId: '70734', issuance: 100, artist: 'HNFTPepe', rarityScore: 85.3, link: 'https://stamped.ninja/stamp/A12307493453657792498' },
    { title: 'Naka_Index02_STAMP07', stampId: '778768', issuance: 69, artist: 'Bbleiztz', rarityScore: 84.2, link: 'https://stamped.ninja/stamp/A575118490871622340' },
    { title: 'Naka_Index02_STAMP08', stampId: '67231', issuance: 100, artist: 'HNFTPepe', rarityScore: 83.3, link: 'https://stamped.ninja/stamp/A5968356289406155902' },
    { title: 'Naka_Index02_STAMP09', stampId: '805907', issuance: 100, artist: 'Logik', rarityScore: 83.3, link: 'https://stamped.ninja/stamp/A842445824702157800' },
    { title: 'Naka_Index02_STAMP10', stampId: '545020', issuance: 1, artist: 'Dyle', rarityScore: 81.8, link: 'https://stamped.ninja/stamp/A880205188859608088' },
    { title: 'Naka_Index02_STAMP11', stampId: '439008', issuance: 33, artist: 'Zoku', rarityScore: 80.0, link: 'https://stamped.ninja/stamp/A1125418907074315000' },
    { title: 'Naka_Index02_STAMP12', stampId: '364145', issuance: 27, artist: 'Mortylen', rarityScore: 78.8, link: 'https://stamped.ninja/stamp/A1069924599796934237' },
    { title: 'Naka_Index02_STAMP13', stampId: '73679', issuance: 18, artist: 'Tepixelabs', rarityScore: 77.6, link: 'https://stamped.ninja/stamp/A12309317120984734906' },
    { title: 'Naka_Index02_STAMP14', stampId: '290261', issuance: 69, artist: 'Sasha Chudo', rarityScore: 76.7, link: 'https://stamped.ninja/stamp/A672631645343727476' },
    { title: 'Naka_Index02_STAMP15', stampId: '735540', issuance: 10, artist: 'MasterOnchain', rarityScore: 75.8, link: 'https://stamped.ninja/stamp/A1050361238670121434' },
    { title: 'Naka_Index02_STAMP16', stampId: '74374', issuance: 45, artist: 'Juan Galt', rarityScore: 75.3, link: 'https://stamped.ninja/stamp/A8802628178026515559' },
    { title: 'Naka_Index02_STAMP17', stampId: '343563', issuance: 69, artist: 'Sasha Chudo', rarityScore: 75.2, link: 'https://stamped.ninja/stamp/A1358429350926785447' },
    { title: 'Naka_Index02_STAMP18', stampId: '23430', issuance: 100, artist: 'Viva La Vandal', rarityScore: 75.2, link: 'https://stamped.ninja/stamp/A1397990226586964852' },
    { title: 'Naka_Index02_STAMP19', stampId: '323720', issuance: 7, artist: 'Socks', rarityScore: 75.2, link: 'https://stamped.ninja/stamp/A438721614820519638' },
    { title: 'Naka_Index02_STAMP20', stampId: '630413', issuance: 69, artist: 'Bbleiztz', rarityScore: 73.3, link: 'https://stamped.ninja/stamp/A430829234070223386' },
    { title: 'Naka_Index02_STAMP21', stampId: '337838', issuance: 27, artist: 'Mortylen', rarityScore: 71.5, link: 'https://stamped.ninja/stamp/A447554197617154483' },
    { title: 'Naka_Index02_STAMP22', stampId: '385461', issuance: 10, artist: 'MasterOnchain', rarityScore: 69.7, link: 'https://stamped.ninja/stamp/A327627287948213644' },
    { title: 'Naka_Index02_STAMP23', stampId: '771859', issuance: 42, artist: 'Simon Morris', rarityScore: 67.9, link: 'https://stamped.ninja/stamp/A5686086491068298000' },
    { title: 'Naka_Index02_STAMP24', stampId: '74301', issuance: 110, artist: 'Viva La Vandal', rarityScore: 66.7, link: 'https://stamped.ninja/stamp/A11369437878122220845' },
    { title: 'Naka_Index02_STAMP25', stampId: '703795', issuance: 42, artist: 'Sasha Chudo', rarityScore: 66.7, link: 'https://stamped.ninja/stamp/A455758100905084633' },
    { title: 'Naka_Index02_STAMP26', stampId: '69440', issuance: 50, artist: 'Lu Ambriz', rarityScore: 66.7, link: 'https://stamped.ninja/stamp/A2687691388697547131' },
    { title: 'Naka_Index02_STAMP27', stampId: '51479', issuance: 91, artist: 'AZ & Tepixelabs', rarityScore: 66.3, link: 'https://stamped.ninja/stamp/A13372352173796346183' },
    { title: 'Naka_Index02_STAMP28', stampId: '73237', issuance: 400, artist: 'Regan', rarityScore: 66.3, link: 'https://stamped.ninja/stamp/A8080808080808080800' },
    { title: 'Naka_Index02_STAMP29', stampId: '73584', issuance: 169, artist: 'Majoni', rarityScore: 66.3, link: 'https://stamped.ninja/stamp/A9931825173520837000' },
    { title: 'Naka_Index02_STAMP30', stampId: '52786', issuance: 100, artist: 'Blockjack', rarityScore: 65.9, link: 'https://stamped.ninja/stamp/A16447187234205603055' },
    { title: 'Naka_Index02_STAMP31', stampId: '69476', issuance: 110, artist: 'Kawabangga', rarityScore: 65.9, link: 'https://stamped.ninja/stamp/A2406412234307485000' },
    { title: 'Naka_Index02_STAMP32', stampId: '726132', issuance: 100, artist: 'Viva La Vandal', rarityScore: 65.5, link: 'https://stamped.ninja/stamp/A141762779593898329' },
    { title: 'Naka_Index02_STAMP33', stampId: '74888', issuance: 21, artist: 'Rarejay', rarityScore: 65.5, link: 'https://stamped.ninja/stamp/A1777777709092016298' },
    { title: 'Naka_Index02_STAMP34', stampId: '403529', issuance: 589, artist: 'Alth0tas', rarityScore: 65.5, link: 'https://stamped.ninja/stamp/A509732004571657348' },
    { title: 'Naka_Index02_STAMP35', stampId: '57356', issuance: 21, artist: 'Lu Ambriz', rarityScore: 65.5, link: 'https://stamped.ninja/stamp/A9474649292549805341' },
    { title: 'Naka_Index02_STAMP36', stampId: '64862', issuance: 16, artist: 'Santiago Itzcoatl', rarityScore: 65.1, link: 'https://stamped.ninja/stamp/A13733248663762682000' },
    { title: 'Naka_Index02_STAMP37', stampId: '1235', issuance: 2, artist: 'Shook', rarityScore: 63.9, link: 'https://stamped.ninja/stamp/A2820416590959688000' },
    { title: 'Naka_Index02_STAMP38', stampId: '74116', issuance: 125, artist: 'Majoni', rarityScore: 63.9, link: 'https://stamped.ninja/stamp/A6590370768049703000' },
    { title: 'Naka_Index02_STAMP39', stampId: '52428', issuance: 21, artist: 'Tepixelabs', rarityScore: 63.6, link: 'https://stamped.ninja/stamp/A1138796500954482000' },
    { title: 'Naka_Index02_STAMP40', stampId: '17534', issuance: 16, artist: 'Santiago Itzcoatl', rarityScore: 63.5, link: 'https://stamped.ninja/stamp/A13060585920379408000' },
    { title: 'Naka_Index02_STAMP41', stampId: '69489', issuance: 69, artist: 'Shook', rarityScore: 63.5, link: 'https://stamped.ninja/stamp/A16910771143072006000' },
    { title: 'Naka_Index02_STAMP42', stampId: '70024', issuance: 100, artist: 'Plycka99', rarityScore: 63.1, link: 'https://stamped.ninja/stamp/A3697714088460257867' }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      pt: 12,
      pb: 8,
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
            Naka Index 02
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
            A Collection of Unique Digital Artifacts on Bitcoin
          </Typography>
        </Box>

        {/* Stamps Grid */}
        <Grid container spacing={4}>
          {stamps.map((stamp) => (
            <Grid item key={stamp.stampId} xs={12} sm={6} md={4}>
              <Index02StampCard stamp={stamp} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index02;
