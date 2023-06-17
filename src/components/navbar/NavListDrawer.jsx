import {Box} from "@mui/system";
import {Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
function NavListDrawer(props) {
    return(

    <Box sx={{width:250, bgcolor:"lightsalmon"}}>
        <nav>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="home"/>
                </ListItem>

            </List>
        </nav>
        <Divider/>
        <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                    component="a"
                    href="atrash"
                    >
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                    <ListItemText primary="inbox"/>
                    </ListItemButton>
                </ListItem>

            </List>
        </nav>
    </Box>
    );
}
export default NavListDrawer