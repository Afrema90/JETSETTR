import { AppBar, Box, Toolbox, Typography, Button } from '@mui/material';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5' component='div'>
                        <Link to="/"> Nav Bar</Link>
                    </Typography>
                </Toolbar>

            </AppBar>
        </Box>
    )
}

export default Navbar