import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <MenuBookIcon sx={{ mr: 2 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 'bold' }}
                    >
                        Thư Viện Từ Điển
                    </Typography>
                    <Box>
                        <Typography variant="body2">
                            Nguồn: Dictionary API
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;