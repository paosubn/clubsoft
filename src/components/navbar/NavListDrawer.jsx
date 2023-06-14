import {Box} from "@mui/system";
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
function NavListDrawer(props) {
    return(

    <Box sx={{width:250, bgcolor:"lightsalmon"}}>
        <nav>
            <List>
                <ListItem>
                    <ListItemText primary="inbox"/>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                </ListItem>

            </List>
        </nav>
    </Box>
    );
}
export default NavListDrawer