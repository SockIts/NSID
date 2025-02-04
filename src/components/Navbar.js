import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import cubemoto from '../assets/images/cubemoto.png';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/aboutus' },
  { name: 'STAMP Index', path: '/stampindex' },
  { name: 'Rules', path: '/rules' },
  { name: 'Submit', path: '/submit' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blogs/Articles', path: '/articles' }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: '#000000',
      borderBottom: '1px solid rgba(57, 255, 20, 0.3)',
      boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              mr: 2
            }}
          >
            <Box
              component="img"
              src={cubemoto}
              alt="NSID Logo"
              sx={{
                height: 120,
                width: 120,
                filter: 'drop-shadow(0 0 10px rgba(57, 255, 20, 0.3))',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  filter: 'drop-shadow(0 0 15px rgba(176, 38, 255, 0.5))',
                  transform: 'scale(1.1)'
                }
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 2,
                fontFamily: 'Orbitron',
                fontWeight: 700,
                color: '#39FF14',
                textDecoration: 'none',
                textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: '#B026FF',
                  textShadow: '0 0 15px rgba(176, 38, 255, 0.5)'
                }
              }}
            >
             
            </Typography>
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ 
                color: '#39FF14',
                '&:hover': {
                  color: '#B026FF'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#000000',
                  border: '1px solid #39FF14',
                  boxShadow: '0 0 20px rgba(57, 255, 20, 0.2)'
                },
                '& .MuiList-root': {
                  padding: '8px'
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  sx={{
                    padding: '12px 24px',
                    margin: '4px 0',
                    borderRadius: '4px',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(57, 255, 20, 0.1)',
                    }
                  }}
                >
                  <Typography 
                    sx={{
                      color: '#39FF14',
                      fontFamily: 'Rajdhani',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      width: '100%',
                      textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        color: '#B026FF',
                        textShadow: '0 0 15px rgba(176, 38, 255, 0.5)'
                      }
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            <Box
              component="img"
              src={cubemoto}
              alt="NSID Logo"
              sx={{
                height: 96,
                width: 96,
                filter: 'drop-shadow(0 0 10px rgba(57, 255, 20, 0.3))',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  filter: 'drop-shadow(0 0 15px rgba(176, 38, 255, 0.5))',
                  transform: 'scale(1.1)'
                }
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 1,
                fontFamily: 'Orbitron',
                fontWeight: 700,
                color: '#39FF14',
                textDecoration: 'none',
                textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: '#B026FF',
                  textShadow: '0 0 15px rgba(176, 38, 255, 0.5)'
                }
              }}
            >
              NSID
            </Typography>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                disableRipple
                sx={{
                  color: '#39FF14',
                  display: 'block',
                  fontFamily: 'Rajdhani',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: 'transparent',
                  border: '1px solid transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(57, 255, 20, 0.1)',
                    color: '#B026FF',
                    textShadow: '0 0 15px rgba(176, 38, 255, 0.5)',
                    border: '1px solid #39FF14'
                  },
                  '&.active': {
                    color: '#B026FF',
                    textShadow: '0 0 15px rgba(176, 38, 255, 0.5)',
                    border: '1px solid #B026FF'
                  }
                }}
              >
                <span style={{ 
                  color: 'inherit',
                  textShadow: 'inherit'
                }}>
                  {page.name}
                </span>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
