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

const Index03StampCard = ({ stamp }) => (
  <Card sx={{ 
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: '0 0 20px rgba(57, 255, 20, 0.1)',
    border: '1px solid rgba(57, 255, 20, 0.2)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 30px rgba(57, 255, 20, 0.2)',
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

const Index03 = () => {
  const stamps = [
    { title: 'Naka_Index03_STAMP01', stampId: '834467', issuance: 35, artist: 'Lu Ambriz', rarityScore: 93.3, link: 'https://stamped.ninja/stamp/A992117022352334628' },
    { title: 'Naka_Index03_STAMP02', stampId: '743242', issuance: 100, artist: 'HNFTPepe', rarityScore: 92.6, link: 'https://stamped.ninja/stamp/A652116979634469189' },
    { title: 'Naka_Index03_STAMP03', stampId: '366726', issuance: 42, artist: 'Jamex', rarityScore: 87.4, link: 'https://stamped.ninja/stamp/A251910104626044382' },
    { title: 'Naka_Index03_STAMP04', stampId: '416599', issuance: 27, artist: 'Mortylen', rarityScore: 86.0, link: 'https://stamped.ninja/stamp/A488490307817709832' },
    { title: 'Naka_Index03_STAMP05', stampId: '857508', issuance: 69, artist: 'Logik', rarityScore: 85.2, link: 'https://stamped.ninja/stamp/A4187130250059315000' },
    { title: 'Naka_Index03_STAMP06', stampId: '74558', issuance: 24, artist: 'Rarejay', rarityScore: 83.7, link: 'https://stamped.ninja/stamp/A1258362551061418145' },
    { title: 'Naka_Index03_STAMP07', stampId: '372628', issuance: 27, artist: 'Mortylen', rarityScore: 82.7, link: 'https://stamped.ninja/stamp/A925003729507683173' },
    { title: 'Naka_Index03_STAMP08', stampId: '69760', issuance: 21, artist: 'Regan', rarityScore: 82.7, link: 'https://stamped.ninja/stamp/A9411130113700000000' },
    { title: 'Naka_Index03_STAMP09', stampId: '307165', issuance: 100, artist: 'HNFTPepe', rarityScore: 82.0, link: 'https://stamped.ninja/stamp/A1752969248045591777' },
    { title: 'Naka_Index03_STAMP10', stampId: '540847', issuance: 1, artist: 'Dyle', rarityScore: 81.3, link: 'https://stamped.ninja/stamp/A890410985848982888' },
    { title: 'Naka_Index03_STAMP11', stampId: '348298', issuance: 27, artist: 'Mortylen', rarityScore: 80.0, link: 'https://stamped.ninja/stamp/A1054492647742732761' },
    { title: 'Naka_Index03_STAMP12', stampId: '741437', issuance: 21, artist: 'Lu Ambriz', rarityScore: 80.0, link: 'https://stamped.ninja/stamp/A1728146650861699847' },
    { title: 'Naka_Index03_STAMP13', stampId: '722342', issuance: 69, artist: 'MasterOnchain', rarityScore: 78.5, link: 'https://stamped.ninja/stamp/A232696094966107157' },
    { title: 'Naka_Index03_STAMP14', stampId: '727263', issuance: 69, artist: 'Bbleiztz', rarityScore: 78.0, link: 'https://stamped.ninja/stamp/A232696094966107157' },
    { title: 'Naka_Index03_STAMP15', stampId: '70547', issuance: 69, artist: 'NIIX', rarityScore: 75.6, link: 'https://stamped.ninja/stamp/A7552340334203099709' },
    { title: 'Naka_Index03_STAMP16', stampId: '70534', issuance: 67, artist: 'Alth0tas', rarityScore: 75.6, link: 'https://stamped.ninja/stamp/A999666696969999666' },
    { title: 'Naka_Index03_STAMP17', stampId: '346113', issuance: 69, artist: 'Babalicious', rarityScore: 74.7, link: 'https://stamped.ninja/stamp/A2121000000050000111' },
    { title: 'Naka_Index03_STAMP18', stampId: '308800', issuance: 69, artist: 'Jamex', rarityScore: 73.3, link: 'https://stamped.ninja/stamp/A797545332032172714' },
    { title: 'Naka_Index03_STAMP19', stampId: '593396', issuance: 277, artist: 'HNFTPepe', rarityScore: 72.0, link: 'https://stamped.ninja/stamp/A12122625141941088000' },
    { title: 'Naka_Index03_STAMP20', stampId: '650198', issuance: 21, artist: 'TonyNL', rarityScore: 72.0, link: 'https://stamped.ninja/stamp/A335197243919566932' },
    { title: 'Naka_Index03_STAMP21', stampId: '70433', issuance: 64, artist: 'Mysk', rarityScore: 71.9, link: 'https://stamped.ninja/stamp/A1477596504227791600' },
    { title: 'Naka_Index03_STAMP22', stampId: '11839', issuance: 64, artist: 'Santiago', rarityScore: 71.3, link: 'https://stamped.ninja/stamp/A15781411009218513000' },
    { title: 'Naka_Index03_STAMP23', stampId: '363168', issuance: 69, artist: 'Kawabangga', rarityScore: 70.4, link: 'https://stamped.ninja/stamp/A551118383892582793' },
    { title: 'Naka_Index03_STAMP24', stampId: '819993', issuance: 21, artist: 'Alth0tas', rarityScore: 69.6, link: 'https://stamped.ninja/stamp/A393551922258780334' },
    { title: 'Naka_Index03_STAMP25', stampId: '74457', issuance: 99, artist: 'Bbleiztz', rarityScore: 69.3, link: 'https://stamped.ninja/stamp/A7777777404777777777' },
    { title: 'Naka_Index03_STAMP26', stampId: '1740', issuance: 100, artist: 'Harvey Vogelmann', rarityScore: 69.3, link: 'https://stamped.ninja/stamp/A10870334694070794000' },
    { title: 'Naka_Index03_STAMP27', stampId: '855591', issuance: 100, artist: 'NimzoBit', rarityScore: 68.7, link: 'https://stamped.ninja/stamp/A6665819026805296738' },
    { title: 'Naka_Index03_STAMP28', stampId: '300108', issuance: 69, artist: 'Sasha Chudo', rarityScore: 68.7, link: 'https://stamped.ninja/stamp/A582541865338232032' },
    { title: 'Naka_Index03_STAMP29', stampId: '290198', issuance: 69, artist: 'Sasha Chudo', rarityScore: 68.0, link: 'https://stamped.ninja/stamp/A995745323260604787' },
    { title: 'Naka_Index03_STAMP30', stampId: '74541', issuance: 33, artist: 'Lu Ambriz', rarityScore: 68.0, link: 'https://stamped.ninja/stamp/A1449397849937177992' },
    { title: 'Naka_Index03_STAMP31', stampId: '340408', issuance: 7, artist: 'Socks', rarityScore: 67.3, link: 'https://stamped.ninja/stamp/A157430337341840533' },
    { title: 'Naka_Index03_STAMP32', stampId: '251021', issuance: 30, artist: 'CYMK', rarityScore: 66.7, link: 'https://stamped.ninja/stamp/A12305580791751342200' },
    { title: 'Naka_Index03_STAMP33', stampId: '439383', issuance: 298, artist: 'MasterOnchain', rarityScore: 66.0, link: 'https://stamped.ninja/stamp/A451621400486481863' },
    { title: 'Naka_Index03_STAMP34', stampId: '443788', issuance: 25, artist: 'MasterOnchain', rarityScore: 65.3, link: 'https://stamped.ninja/stamp/A587885307272530094' },
    { title: 'Naka_Index03_STAMP35', stampId: '73421', issuance: 15, artist: 'Socks', rarityScore: 65.3, link: 'https://stamped.ninja/stamp/A12307085950833963157' },
    { title: 'Naka_Index03_STAMP36', stampId: '4331', issuance: 44, artist: 'Jamex', rarityScore: 64.7, link: 'https://stamped.ninja/stamp/A13937090661341495000' },
    { title: 'Naka_Index03_STAMP37', stampId: '17786', issuance: 13, artist: 'Rarejay', rarityScore: 64.7, link: 'https://stamped.ninja/stamp/A749646770520560024' },
    { title: 'Naka_Index03_STAMP38', stampId: '70207', issuance: 88, artist: 'Nikolaus', rarityScore: 64.7, link: 'https://stamped.ninja/stamp/A7839327918455651956' },
    { title: 'Naka_Index03_STAMP39', stampId: '75329', issuance: 100, artist: 'Viva La Vandal', rarityScore: 64.7, link: 'https://stamped.ninja/stamp/A1463910612295399774' },
    { title: 'Naka_Index03_STAMP40', stampId: '257487', issuance: 69, artist: 'Babalicious', rarityScore: 64.0, link: 'https://stamped.ninja/stamp/A2121000000030000111' },
    { title: 'Naka_Index03_STAMP41', stampId: '74458', issuance: 36, artist: 'Mayari Mun', rarityScore: 64.0, link: 'https://stamped.ninja/stamp/A6191790181671182855' },
    { title: 'Naka_Index03_STAMP42', stampId: '759681', issuance: 69, artist: 'Bbleiztz', rarityScore: 64.0, link: 'https://stamped.ninja/stamp/A1110001110000000111' }
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
            Naka Index 03
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
              <Index03StampCard stamp={stamp} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index03;