import { Menu } from '@mui/icons-material';
import { Theme } from '@mui/material/styles';
import { responsiveFontSizes, useMediaQuery, List, ListItem, ListItemText, Divider, CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Container, createTheme, ThemeProvider, Box, NoSsr } from '@mui/material';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
  Navigate,
} from "react-router-dom";
import BcPnpCalculator from './bcpnp/BcPnpCalculator';

function App() {
  const theme =
    responsiveFontSizes(
      createTheme(
        {
          components: {
            MuiUseMediaQuery: {
              defaultProps: {
                noSsr: true,
              },
            },
          },
        }
      )
    );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppContent></AppContent>
    </ThemeProvider>
  );
}

function AppContent() {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const breakpointMatched = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const drawer = (
    <div role="presentation">
      <Toolbar />
      <Divider />
      <List>
        {[{title:'BC PNP Calculator', link:'/bcpnp-calculator'}].map((item, index) => (
          <ListItem component={RouterLink} to={item.link} button key={item.title}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{title:'Settings', link:'/settings'}].map((item, index) => (
          <ListItem component={RouterLink} to={item.link} button key={item.title}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Router>
      <NoSsr defer>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { md: `calc(100% - ${drawerWidth}px)` },
              ml: { md: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" noWrap>
                <Routes>
                  <Route path="/bcpnp-calculator" element={<>BC PNP Calculator</>} />
                  <Route path="/settings" element={<>Settings</>} />
                  <Route path="*" element={<></>}/>
                </Routes>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
          >
            {
              breakpointMatched ?
              <Drawer
                variant="permanent"
                sx={{
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
              >
                {drawer}
              </Drawer>
              :
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
              </Drawer>
            }
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <Routes>
              <Route
                path="/bcpnp-calculator"
                element={<Container maxWidth="lg"><BcPnpCalculator /></Container>}
              />
              <Route path="/settings" element={<h1>Settings</h1>}/>
              <Route path="*" element={<Navigate to="/bcpnp-calculator" replace />} />
            </Routes>
          </Box>
        </Box>
      </NoSsr>
    </Router>
  );
}

export default App;
