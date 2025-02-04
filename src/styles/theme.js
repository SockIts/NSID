import { createTheme, alpha } from '@mui/material/styles';

const neonGreen = '#39FF14';
const neonPurple = '#B026FF';
const darkBackground = '#000000';
const cyberBlue = '#00F3FF';

const theme = createTheme({
  typography: {
    fontFamily: '"Orbitron", "Rajdhani", "Roboto", sans-serif',
    allVariants: {
      color: '#39FF14 !important',
      textShadow: '0 0 10px rgba(57, 255, 20, 0.5)',
    },
    h1: {
      fontFamily: 'Orbitron',
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#B026FF !important',
      textShadow: '0 0 10px rgba(176, 38, 255, 0.7), 0 0 20px rgba(176, 38, 255, 0.5), 0 0 30px rgba(176, 38, 255, 0.3)',
    },
    h2: {
      fontFamily: 'Orbitron',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#B026FF !important',
      textShadow: '0 0 8px rgba(176, 38, 255, 0.7), 0 0 16px rgba(176, 38, 255, 0.5)',
    },
    h3: {
      fontFamily: 'Orbitron',
      fontWeight: 600,
      letterSpacing: '0.1em',
      color: '#39FF14 !important',
      textShadow: '0 0 6px rgba(57, 255, 20, 0.7)',
    },
    h4: {
      fontFamily: 'Rajdhani',
      fontWeight: 600,
      letterSpacing: '0.08em',
      color: neonPurple,
      textShadow: `0 0 6px ${alpha(neonPurple, 0.7)}`,
    },
    h5: {
      fontFamily: 'Rajdhani',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    h6: {
      fontFamily: 'Rajdhani',
      fontWeight: 500,
      letterSpacing: '0.04em',
    },
    body1: {
      fontFamily: 'Rajdhani',
      fontWeight: 400,
      letterSpacing: '0.03em',
      color: '#39FF14 !important',
    },
    body2: {
      fontFamily: 'Rajdhani',
      fontWeight: 400,
      letterSpacing: '0.02em',
      color: '#39FF14 !important',
    },
    button: {
      fontFamily: 'Orbitron',
      fontWeight: 500,
      letterSpacing: '0.1em',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: neonGreen,
      light: alpha(neonGreen, 0.8),
      dark: alpha(neonGreen, 0.6),
    },
    secondary: {
      main: neonPurple,
      light: alpha(neonPurple, 0.8),
      dark: alpha(neonPurple, 0.6),
    },
    background: {
      default: '#000000',
      paper: alpha('#000000', 0.95),
    },
    text: {
      primary: neonGreen,
      secondary: neonPurple,
    },
    divider: alpha(neonGreen, 0.2),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          backgroundColor: '#000000 !important',
          color: '#39FF14 !important',
        },
        '*': {
          backgroundColor: '#000000 !important',
        },
        body: {
          background: '#000000 !important',
          minHeight: '100vh',
          '& *': {
            backgroundColor: '#000000 !important',
          },
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 50%, ${alpha(neonGreen, 0.05)} 0%, ${alpha(neonPurple, 0.03)} 25%, rgba(0, 0, 0, 0) 50%)`,
            pointerEvents: 'none',
            zIndex: 0,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#000000',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${alpha(neonGreen, 0.2)}`,
          boxShadow: `0 0 20px ${alpha(neonGreen, 0.1)}, inset 0 0 20px ${alpha(neonGreen, 0.05)}`,
          '&:hover': {
            boxShadow: `0 0 30px ${alpha(neonGreen, 0.2)}, inset 0 0 30px ${alpha(neonGreen, 0.1)}`,
            border: `1px solid ${alpha(neonGreen, 0.3)}`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'uppercase',
          fontFamily: 'Orbitron',
          letterSpacing: '0.1em',
          backgroundColor: 'transparent !important',
          color: '#39FF14 !important',
          borderColor: '#39FF14 !important',
          '&:hover': {
            backgroundColor: 'rgba(57, 255, 20, 0.1) !important',
            borderColor: '#B026FF !important',
            color: '#B026FF !important',
            textShadow: '0 0 10px rgba(176, 38, 255, 0.5)'
          }
        },
        contained: {
          backgroundColor: '#39FF14 !important',
          color: '#000000 !important',
          '&:hover': {
            backgroundColor: '#B026FF !important',
            color: '#000000 !important'
          }
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: `linear-gradient(180deg, ${alpha('#000000', 0.95)} 0%, ${alpha('#000000', 0.8)} 100%)`,
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${alpha(neonGreen, 0.2)}`,
          boxShadow: `0 0 20px ${alpha(neonGreen, 0.1)}`,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: neonGreen,
          textDecoration: 'none',
          position: 'relative',
          '&:hover': {
            textShadow: `0 0 8px ${alpha(neonGreen, 0.7)}`,
            '&::after': {
              width: '100%',
            },
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: 0,
            height: '1px',
            background: neonGreen,
            boxShadow: `0 0 8px ${alpha(neonGreen, 0.7)}`,
            transition: 'width 0.3s ease-in-out',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#000000',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${alpha(neonGreen, 0.1)}`,
          boxShadow: `0 0 20px ${alpha(neonGreen, 0.1)}`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${alpha(neonGreen, 0.2)}`,
          color: neonGreen,
        },
        head: {
          color: neonPurple,
          fontFamily: 'Orbitron',
          fontWeight: 600,
          textShadow: `0 0 8px ${alpha(neonPurple, 0.5)}`,
        },
      },
    },
  },
});

export default theme;
