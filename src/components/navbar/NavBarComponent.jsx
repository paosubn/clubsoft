import { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import NavListDrawer from './NavListDrawer';
import MenuIcon from '@mui/icons-material/Menu';



function NavBar(props){
    const [open, setOpen]= useState(false)
    return(
        <>
        <AppBar  position="static"
        color="primary">
        <Toolbar>
            <IconButton
            color="inherit"
            size="large"
            onClick={()=>setOpen(true)}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6">Clubsoft 1.0</Typography>
        </Toolbar>
        </AppBar>
        <Drawer open={open}
                anchor="left"
                onClose={()=> setOpen(false)}>
            <NavListDrawer/>
        </Drawer>
        </>
    )
}
export default NavBar;


