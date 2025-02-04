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

const LegacyStampCard = ({ stamp }) => (
  <Card sx={{ 
    height: '100%',
    backgroundColor: '#000000',
    border: '1px solid #39FF14',
    boxShadow: '0 0 15px rgba(57, 255, 20, 0.2)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 0 20px rgba(57, 255, 20, 0.4)',
      borderColor: '#B026FF'
    }
  }}>
    <CardContent sx={{ p: 3 }}>
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{
          color: '#39FF14',
          fontFamily: 'Orbitron',
          textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
          mb: 2,
          fontSize: '1rem',
          textAlign: 'center'
        }}
      >
        {stamp.title}
      </Typography>
      <Box sx={{ 
        mb: 3,
        border: '1px solid #39FF14',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <StampCard stampId={stamp.stampId} />
      </Box>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        mb: 2,
        alignItems: 'center'
      }}>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#39FF14',
            textShadow: '0 0 5px rgba(57, 255, 20, 0.3)',
            fontFamily: 'Rajdhani',
            textAlign: 'center'
          }}
        >
          Issuance: {stamp.issuance}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#39FF14',
            textShadow: '0 0 5px rgba(57, 255, 20, 0.3)',
            fontFamily: 'Rajdhani',
            textAlign: 'center'
          }}
        >
          Artist: {stamp.artist}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#39FF14',
            textShadow: '0 0 5px rgba(57, 255, 20, 0.3)',
            fontFamily: 'Rajdhani',
            textAlign: 'center'
          }}
        >
          Rarity Score: {stamp.rarityScore}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Link
          href={stamp.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: '#B026FF',
            textDecoration: 'none',
            fontFamily: 'Orbitron',
            textShadow: '0 0 10px rgba(176, 38, 255, 0.5)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              color: '#39FF14',
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

const LegacyIndex = () => {
  const stamps = [
    {
      title: 'LegacyIndex_STAMP01',
      stampId: '4258',
      issuance: 1,
      artist: 'Fake_Arwyn',
      rarityScore: 48.0,
      link: 'https://stamped.ninja/stamp/A6074625865641549156'
    },
    {
      title: 'LegacyIndex_STAMP02',
      stampId: '119',
      issuance: 42,
      artist: 'Alth0tas',
      rarityScore: 41.8,
      link: 'https://stamped.ninja/stamp/A6765816240871923000'
    },
    {
      title: 'LegacyIndex_STAMP03',
      stampId: '11',
      issuance: 285,
      artist: 'Fake_Arwyn',
      rarityScore: 39.9,
      link: 'https://stamped.ninja/stamp/A5433937813514022010'
    },
    {
      title: 'LegacyIndex_STAMP04',
      stampId: '18310',
      issuance: 100,
      artist: 'Angel',
      rarityScore: 38.4,
      link: 'https://stamped.ninja/stamp/A1714800323048321163'
    },
    {
      title: 'LegacyIndex_STAMP05',
      stampId: '4331',
      issuance: 44,
      artist: 'Jamex',
      rarityScore: 36.7,
      link: 'https://stamped.ninja/stamp/A13937090661341495000'
    },
    {
      title: 'LegacyIndex_STAMP06',
      stampId: '1',
      issuance: 1,
      artist: 'Mikeinspace',
      rarityScore: 36.2,
      link: 'https://stamped.ninja/stamp/A6360128538192758000'
    },
    {
      title: 'LegacyIndex_STAMP07',
      stampId: '29',
      issuance: 300,
      artist: 'Regan',
      rarityScore: 36.1,
      link: 'https://stamped.ninja/stamp/A808011111111111111'
    },
    {
      title: 'LegacyIndex_STAMP08',
      stampId: '432',
      issuance: 21,
      artist: 'Regan',
      rarityScore: 35.7,
      link: 'https://stamped.ninja/stamp/A8008135800813580085'
    },
    {
      title: 'LegacyIndex_STAMP09',
      stampId: '18331',
      issuance: 100,
      artist: 'HarveyVogelmann',
      rarityScore: 33.4,
      link: 'https://stamped.ninja/stamp/A18229745775351970619'
    },
    {
      title: 'LegacyIndex_STAMP10',
      stampId: '17977',
      issuance: 297,
      artist: 'VivaLaVandal',
      rarityScore: 31.6,
      link: 'https://stamped.ninja/stamp/A11677883691826442144'
    },
    {
      title: 'LegacyIndex_STAMP11',
      stampId: '18489',
      issuance: 100,
      artist: 'HarveyVogelmann',
      rarityScore: 31.0,
      link: 'https://stamped.ninja/stamp/A1888888877444444444'
    },
    {
      title: 'LegacyIndex_STAMP12',
      stampId: '18187',
      issuance: 100,
      artist: 'Angel',
      rarityScore: 30.9,
      link: 'https://stamped.ninja/stamp/A8078188082000998834'
    },
    {
      title: 'LegacyIndex_STAMP13',
      stampId: '5393',
      issuance: 42,
      artist: 'Jamex',
      rarityScore: 30.6,
      link: 'https://stamped.ninja/stamp/A8519889257187187000'
    },
    {
      title: 'LegacyIndex_STAMP14',
      stampId: '531',
      issuance: 210,
      artist: 'Anon',
      rarityScore: 29.6,
      link: 'https://stamped.ninja/stamp/A2100000000000001918'
    },
    {
      title: 'LegacyIndex_STAMP15',
      stampId: '102',
      issuance: 1,
      artist: 'Alth0tas',
      rarityScore: 29.4,
      link: 'https://stamped.ninja/stamp/A666999696969696969'
    },
    {
      title: 'LegacyIndex_STAMP16',
      stampId: '11839',
      issuance: 64,
      artist: 'Santiago',
      rarityScore: 28.7,
      link: 'https://stamped.ninja/stamp/A15781411009218513000'
    },
    {
      title: 'LegacyIndex_STAMP17',
      stampId: '4448',
      issuance: 1,
      artist: 'Moxarra',
      rarityScore: 27.6,
      link: 'https://stamped.ninja/stamp/A4698643435765368000'
    },
    {
      title: 'LegacyIndex_STAMP18',
      stampId: '155',
      issuance: 50,
      artist: 'Anon',
      rarityScore: 27.2,
      link: 'https://stamped.ninja/stamp/A12066123729716648000'
    },
    {
      title: 'LegacyIndex_STAMP19',
      stampId: '18033',
      issuance: 111,
      artist: 'Bobalicious',
      rarityScore: 26.9,
      link: 'https://stamped.ninja/stamp/A6951416103960996784'
    },
    {
      title: 'LegacyIndex_STAMP20',
      stampId: '76',
      issuance: 300,
      artist: 'Pifu',
      rarityScore: 26.8,
      link: 'https://stamped.ninja/stamp/A4491252032917529600'
    },
    {
      title: 'LegacyIndex_STAMP21',
      stampId: '178',
      issuance: 1,
      artist: 'AlFernandz',
      rarityScore: 26.8,
      link: 'https://stamped.ninja/stamp/A14599715268784402000'
    },
    {
      title: 'LegacyIndex_STAMP22',
      stampId: '563',
      issuance: 45,
      artist: 'HNFT_Pepe',
      rarityScore: 26.4,
      link: 'https://stamped.ninja/stamp/A13222147947085158000'
    },
    {
      title: 'LegacyIndex_STAMP23',
      stampId: '26',
      issuance: 1,
      artist: 'Booo Urns',
      rarityScore: 25.7,
      link: 'https://stamped.ninja/stamp/A2821541942016841700'
    },
    {
      title: 'LegacyIndex_STAMP24',
      stampId: '1064',
      issuance: 100,
      artist: 'Santiago',
      rarityScore: 25.7,
      link: 'https://stamped.ninja/stamp/A11711011511697109112'
    },
    {
      title: 'LegacyIndex_STAMP25',
      stampId: '1740',
      issuance: 100,
      artist: 'HarveyVogelmann',
      rarityScore: 25.7,
      link: 'https://stamped.ninja/stamp/A10870334694070794000'
    },
    {
      title: 'LegacyIndex_STAMP26',
      stampId: '1235',
      issuance: 2,
      artist: 'Shook',
      rarityScore: 22.4,
      link: 'https://stamped.ninja/stamp/A2820416590959688000'
    },
    {
      title: 'LegacyIndex_STAMP27',
      stampId: '17655',
      issuance: 100,
      artist: 'VivaLaVandal',
      rarityScore: 21.7,
      link: 'https://stamped.ninja/stamp/A14571539890130820786'
    },
    {
      title: 'LegacyIndex_STAMP28',
      stampId: '17598',
      issuance: 21,
      artist: 'Lu_Ambriz',
      rarityScore: 21.5,
      link: 'https://stamped.ninja/stamp/A8886513925264515000'
    },
    {
      title: 'LegacyIndex_STAMP29',
      stampId: '428',
      issuance: 11,
      artist: 'FWD',
      rarityScore: 21.4,
      link: 'https://stamped.ninja/stamp/A1234000000000000005'
    },
    {
      title: 'LegacyIndex_STAMP30',
      stampId: '17584',
      issuance: 21,
      artist: 'Lu_Ambriz',
      rarityScore: 19.5,
      link: 'https://stamped.ninja/stamp/A15876941647089082000'
    },
    {
      title: 'LegacyIndex_STAMP31',
      stampId: '8615',
      issuance: 69,
      artist: 'Pifu',
      rarityScore: 19.4,
      link: 'https://stamped.ninja/stamp/A14205458206726720000'
    },
    {
      title: 'LegacyIndex_STAMP32',
      stampId: '17585',
      issuance: 21,
      artist: 'Lu_Ambriz',
      rarityScore: 18.4,
      link: 'https://stamped.ninja/stamp/A5461188953941979000'
    },
    {
      title: 'LegacyIndex_STAMP33',
      stampId: '1884',
      issuance: 10,
      artist: 'Nish',
      rarityScore: 18.0,
      link: 'https://stamped.ninja/stamp/A2492464643905195500'
    },
    {
      title: 'LegacyIndex_STAMP34',
      stampId: '18207',
      issuance: 245,
      artist: 'VivaLavandal',
      rarityScore: 17.9,
      link: 'https://stamped.ninja/stamp/A7769027528277942227'
    },
    {
      title: 'LegacyIndex_STAMP35',
      stampId: '212',
      issuance: 1774,
      artist: 'Netidx',
      rarityScore: 17.5,
      link: 'https://stamped.ninja/stamp/A13371337133713370001'
    },
    {
      title: 'LegacyIndex_STAMP36',
      stampId: '17394',
      issuance: 21,
      artist: 'HNFT_Pepe',
      rarityScore: 16.4,
      link: 'https://stamped.ninja/stamp/A4189754452199816000'
    },
    {
      title: 'LegacyIndex_STAMP37',
      stampId: '46',
      issuance: 10,
      artist: 'Anon',
      rarityScore: 16.3,
      link: 'https://stamped.ninja/stamp/A11933229176907070000'
    },
    {
      title: 'LegacyIndex_STAMP38',
      stampId: '2124',
      issuance: 1,
      artist: 'Anon',
      rarityScore: 15.7,
      link: 'https://stamped.ninja/stamp/A4201052601856568300'
    },
    {
      title: 'LegacyIndex_STAMP39',
      stampId: '18099',
      issuance: 10,
      artist: 'Tepixelabs',
      rarityScore: 15.4,
      link: 'https://stamped.ninja/stamp/A5006264594279955134'
    },
    {
      title: 'LegacyIndex_STAMP40',
      stampId: '13548',
      issuance: 21,
      artist: 'Naples',
      rarityScore: 14.7,
      link: 'https://stamped.ninja/stamp/A2348005945040100400'
    },
    {
      title: 'LegacyIndex_STAMP41',
      stampId: '91',
      issuance: 1,
      artist: 'Nathansonic',
      rarityScore: 13.4,
      link: 'https://stamped.ninja/stamp/A8055499515304647000'
    },
    {
      title: 'LegacyIndex_STAMP42',
      stampId: '17973',
      issuance: 120,
      artist: 'Bbleiztz',
      rarityScore: 13.2,
      link: 'https://stamped.ninja/stamp/A2266930508040405927'
    }
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
            Legacy Index
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
            The first collection of immutable artworks on the Bitcoin blockchain
          </Typography>
        </Box>

        {/* Stamps Grid */}
        <Grid container spacing={4}>
          {stamps.map((stamp) => (
            <Grid item key={stamp.stampId} xs={12} sm={6} md={4}>
              <LegacyStampCard stamp={stamp} />
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            sx={{
              color: '#39FF14',
              fontFamily: 'Orbitron',
              textShadow: '0 0 15px rgba(57, 255, 20, 0.4)',
              mb: 2
            }}
          >
            Nakamoto STAMP Index
          </Typography>
          <Typography 
            variant="h6" 
            component="a"
            href="https://twitter.com/NSIDirectory"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#B026FF',
              textDecoration: 'none',
              fontFamily: 'Rajdhani',
              textShadow: '0 0 10px rgba(176, 38, 255, 0.4)',
              '&:hover': {
                color: '#39FF14',
                textShadow: '0 0 15px rgba(57, 255, 20, 0.5)',
              },
            }}
          >
            @NSIDirectory
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LegacyIndex;
