import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CircularProgress
} from '@mui/material';
import placeholderImage from '../assets/images/stamp-placeholder.svg';

const StampCard = ({ stampId }) => {
  const [stampData, setStampData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchStampData = async () => {
      try {
        const response = await fetch(`https://stampchain.io/api/v2/stamps/${stampId}`);
        const data = await response.json();
        setStampData(data.data.stamp);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching stamp data:', err);
        setHasError(true);
        setLoading(false);
      }
    };

    fetchStampData();
  }, [stampId]);

  return (
    <Card sx={{
      height: '100%',
      backgroundColor: '#000000 !important',
      border: '1px solid #39FF14',
      boxShadow: '0 0 15px rgba(57, 255, 20, 0.2)',
      borderRadius: '16px !important',
      overflow: 'hidden',
      '&:hover': {
        boxShadow: '0 0 20px rgba(57, 255, 20, 0.4)',
        transform: 'translateY(-5px)',
        transition: 'all 0.3s ease-in-out'
      }
    }}>
      <Box sx={{ 
        position: 'relative', 
        paddingTop: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#000000'
      }}>
        {loading ? (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000000',
            }}
          >
            <CircularProgress sx={{ color: '#39FF14' }} />
          </Box>
        ) : hasError ? (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000000',
              color: '#39FF14',
              fontFamily: 'Orbitron',
              textShadow: '0 0 10px rgba(57, 255, 20, 0.5)'
            }}
          >
            <Typography variant="body1">
              Failed to load STAMP
            </Typography>
          </Box>
        ) : (
          <CardMedia
            component="img"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#000000',
              objectFit: 'contain',
              imageRendering: 'pixelated',
              p: 1,
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(2)',
                zIndex: 1000,
                boxShadow: '0 0 30px rgba(57, 255, 20, 0.4)',
                border: '2px solid #39FF14'
              }
            }}
            image={stampData?.stamp_url || placeholderImage}
            alt={`STAMP #${stampData?.stamp || stampId}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImage;
            }}
          />
        )}
      </Box>
      <CardContent sx={{ 
        p: 2,
        '&:last-child': { pb: 2 }
      }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#39FF14 !important',
            textShadow: '0 0 5px rgba(57, 255, 20, 0.5)',
            textAlign: 'center',
            fontFamily: 'Orbitron',
            fontSize: '0.9rem'
          }}
        >
          STAMP #{stampId}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StampCard;
