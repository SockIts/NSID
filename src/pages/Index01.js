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

const Index01StampCard = ({ stamp }) => (
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

const Index01 = () => {
  const stamps = [
    {
      title: 'Naka_Index01_STAMP01',
      stampId: '631429',
      issuance: 69,
      artist: 'Socks',
      rarityScore: 90.7,
      link: 'https://stamped.ninja/stamp/A235681574700097016'
    },
    {
      title: 'Naka_Index01_STAMP02',
      stampId: '399023',
      issuance: 21,
      artist: 'Lu Ambriz',
      rarityScore: 90.2,
      link: 'https://stamped.ninja/stamp/A940014580907360134'
    },
    {
      title: 'Naka_Index01_STAMP03',
      stampId: '55421',
      issuance: 21,
      artist: 'Lu Ambriz',
      rarityScore: 89.6,
      link: 'https://stamped.ninja/stamp/A14099796742918991159'
    },
    {
      title: 'Naka_Index01_STAMP04',
      stampId: '387881',
      issuance: 42,
      artist: 'Jamex',
      rarityScore: 89.2,
      link: 'https://stamped.ninja/stamp/A1486226385838604027'
    },
    {
      title: 'Naka_Index01_STAMP05',
      stampId: '432',
      issuance: 21,
      artist: 'Regan & Alth0tas',
      rarityScore: 88.4,
      link: 'https://stamped.ninja/stamp/A8008135800813580085'
    },
    {
      title: 'Naka_Index01_STAMP06',
      stampId: '64324',
      issuance: 100,
      artist: 'HNFTPepe',
      rarityScore: 88.3,
      link: 'https://stamped.ninja/stamp/A9392207840692937001'
    },
    {
      title: 'Naka_Index01_STAMP07',
      stampId: '404356',
      issuance: 42,
      artist: 'Jamex',
      rarityScore: 83.5,
      link: 'https://stamped.ninja/stamp/A171400198500744822'
    },
    {
      title: 'Naka_Index01_STAMP08',
      stampId: '747903',
      issuance: 10,
      artist: 'MasterOnchain',
      rarityScore: 83.5,
      link: 'https://stamped.ninja/stamp/A319607656399623967'
    },
    {
      title: 'Naka_Index01_STAMP09',
      stampId: '764500',
      issuance: 10,
      artist: 'MasterOnchain',
      rarityScore: 83.5,
      link: 'https://stamped.ninja/stamp/A566591309593173961'
    },
    {
      title: 'Naka_Index01_STAMP10',
      stampId: '631735',
      issuance: 69,
      artist: 'Bbleiztz',
      rarityScore: 82.7,
      link: 'https://stamped.ninja/stamp/A1133718708507250879'
    },
    {
      title: 'Naka_Index01_STAMP11',
      stampId: '18489',
      issuance: 100,
      artist: 'Harvey Vogelmann',
      rarityScore: 81.3,
      link: 'https://stamped.ninja/stamp/A1888888877444444444'
    },
    {
      title: 'Naka_Index01_STAMP12',
      stampId: '74194',
      issuance: 97,
      artist: 'HNFTPepe',
      rarityScore: 80.8,
      link: 'https://stamped.ninja/stamp/A12301588492677696204'
    },
    {
      title: 'Naka_Index01_STAMP13',
      stampId: '349013',
      issuance: 27,
      artist: 'Mortylen',
      rarityScore: 80.4,
      link: 'https://stamped.ninja/stamp/A1633064411887062995'
    },
    {
      title: 'Naka_Index01_STAMP14',
      stampId: '74400',
      issuance: 60,
      artist: 'Tepixelabs',
      rarityScore: 79.6,
      link: 'https://stamped.ninja/stamp/A6047360473604796047'
    },
    {
      title: 'Naka_Index01_STAMP15',
      stampId: '687520',
      issuance: 69,
      artist: 'Mortylen',
      rarityScore: 79.6,
      link: 'https://stamped.ninja/stamp/A932057078326456965'
    },
    {
      title: 'Naka_Index01_STAMP16',
      stampId: '74648',
      issuance: 35,
      artist: 'Socks',
      rarityScore: 79.2,
      link: 'https://stamped.ninja/stamp/A1380964387736927174'
    },
    {
      title: 'Naka_Index01_STAMP17',
      stampId: '595648',
      issuance: 27,
      artist: 'Mortylen',
      rarityScore: 78.8,
      link: 'https://stamped.ninja/stamp/A16516511312654165165'
    },
    {
      title: 'Naka_Index01_STAMP18',
      stampId: '64707',
      issuance: 100,
      artist: 'Kawabangga',
      rarityScore: 78.4,
      link: 'https://stamped.ninja/stamp/A3811804285071215000'
    },
    {
      title: 'Naka_Index01_STAMP19',
      stampId: '66777',
      issuance: 100,
      artist: 'Raoul',
      rarityScore: 77.8,
      link: 'https://stamped.ninja/stamp/A12494904862002504506'
    },
    {
      title: 'Naka_Index01_STAMP20',
      stampId: '18331',
      issuance: 100,
      artist: 'Harvey Vogelmann',
      rarityScore: 76.7,
      link: 'https://stamped.ninja/stamp/A18229745775351970619'
    },
    {
      title: 'Naka_Index01_STAMP21',
      stampId: '764208',
      issuance: 10,
      artist: 'MasterOnchain',
      rarityScore: 76.5,
      link: 'https://stamped.ninja/stamp/A508628503415123146'
    },
    {
      title: 'Naka_Index01_STAMP22',
      stampId: '102',
      issuance: 1,
      artist: 'Alth0tas',
      rarityScore: 76.5,
      link: 'https://stamped.ninja/stamp/A666999696969696969'
    },
    {
      title: 'Naka_Index01_STAMP23',
      stampId: '119',
      issuance: 42,
      artist: 'Alth0tas',
      rarityScore: 75.7,
      link: 'https://stamped.ninja/stamp/A6765816240871923000'
    },
    {
      title: 'Naka_Index01_STAMP24',
      stampId: '29',
      issuance: 300,
      artist: 'Regan',
      rarityScore: 75.7,
      link: 'https://stamped.ninja/stamp/A808011111111111111'
    },
    {
      title: 'Naka_Index01_STAMP25',
      stampId: '1740',
      issuance: 81,
      artist: 'An0n',
      rarityScore: 75.6,
      link: 'https://stamped.ninja/stamp/A8100000000000000018'
    },
    {
      title: 'Naka_Index01_STAMP26',
      stampId: '17598',
      issuance: 21,
      artist: 'Lu Ambriz',
      rarityScore: 74.5,
      link: 'https://stamped.ninja/stamp/A8886513925264515000'
    },
    {
      title: 'Naka_Index01_STAMP27',
      stampId: '386838',
      issuance: 299,
      artist: 'HNFTPepe',
      rarityScore: 73.7,
      link: 'https://stamped.ninja/stamp/A1619006396900464164'
    },
    {
      title: 'Naka_Index01_STAMP28',
      stampId: '339048',
      issuance: 100,
      artist: 'Blockjack',
      rarityScore: 72.5,
      link: 'https://stamped.ninja/stamp/A2906551588338565600'
    },
    {
      title: 'Naka_Index01_STAMP29',
      stampId: '387900',
      issuance: 42,
      artist: 'Jamex',
      rarityScore: 71.8,
      link: 'https://stamped.ninja/stamp/A189108414159917453'
    },
    {
      title: 'Naka_Index01_STAMP30',
      stampId: '65291',
      issuance: 420,
      artist: 'AZ & Tepixelabs',
      rarityScore: 71.8,
      link: 'https://stamped.ninja/stamp/A2205082538254051553'
    },
    {
      title: 'Naka_Index01_STAMP31',
      stampId: '338718',
      issuance: 21,
      artist: 'TonyNL',
      rarityScore: 71.4,
      link: 'https://stamped.ninja/stamp/A640327774300092058'
    },
    {
      title: 'Naka_Index01_STAMP32',
      stampId: '703836',
      issuance: 1,
      artist: 'Sasha Chudo',
      rarityScore: 71.0,
      link: 'https://stamped.ninja/stamp/A481272631453105652'
    },
    {
      title: 'Naka_Index01_STAMP33',
      stampId: '74407',
      issuance: 99,
      artist: 'Bbleiztz',
      rarityScore: 71.0,
      link: 'https://stamped.ninja/stamp/A5555554045555555555'
    },
    {
      title: 'Naka_Index01_STAMP34',
      stampId: '751220',
      issuance: 21,
      artist: 'Tepixelabs',
      rarityScore: 69.8,
      link: 'https://stamped.ninja/stamp/A636020886564973588'
    },
    {
      title: 'Naka_Index01_STAMP35',
      stampId: '723989',
      issuance: 100,
      artist: 'Viva La Vandal',
      rarityScore: 69.4,
      link: 'https://stamped.ninja/stamp/A1059031873638024061'
    },
    {
      title: 'Naka_Index01_STAMP36',
      stampId: '70825',
      issuance: 300,
      artist: 'Stampy Stamperson',
      rarityScore: 69.4,
      link: 'https://stamped.ninja/stamp/A18429515139172954198'
    },
    {
      title: 'Naka_Index01_STAMP37',
      stampId: '358198',
      issuance: 21,
      artist: 'Kawabangga',
      rarityScore: 69.4,
      link: 'https://stamped.ninja/stamp/A889182402850819888'
    },
    {
      title: 'Naka_Index01_STAMP38',
      stampId: '73833',
      issuance: 35,
      artist: 'Socks',
      rarityScore: 67.5,
      link: 'https://stamped.ninja/stamp/A12378936065685731876'
    },
    {
      title: 'Naka_Index01_STAMP39',
      stampId: '57',
      issuance: 200,
      artist: 'Rare Scrilla',
      rarityScore: 67.5,
      link: 'https://stamped.ninja/stamp/A14947915978491386000'
    },
    {
      title: 'Naka_Index01_STAMP40',
      stampId: '725295',
      issuance: 100,
      artist: 'Viva La Vandal',
      rarityScore: 67.5,
      link: 'https://stamped.ninja/stamp/A655512093478039952'
    },
    {
      title: 'Naka_Index01_STAMP41',
      stampId: '79',
      issuance: 298,
      artist: 'Pifu',
      rarityScore: 67.1,
      link: 'https://stamped.ninja/stamp/A10565470204951350000'
    },
    {
      title: 'Naka_Index01_STAMP42',
      stampId: '293575',
      issuance: 69,
      artist: 'Sasha Chudo',
      rarityScore: 67.1,
      link: 'https://stamped.ninja/stamp/A1122957051225484408'
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
            Naka Index 01
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
              <Index01StampCard stamp={stamp} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index01;
