import {Box} from "@mui/system";
import {Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {green} from "@mui/material/colors";
function NavListDrawer(props) {
    return(

    <Box sx={{width:250, bgcolor:"lightsalmon"}}>
         <nav>
            <List>
                <ListItem>
                <Avatar sx={{ bgcolor: green[500] }}>
                <AssignmentIcon />
                </Avatar>
                </ListItem>
            </List>
        </nav>
        <Divider/>
        <nav>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Home"/>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

            </List>
        </nav>
    </Box>
    );
}
export default NavListDrawer