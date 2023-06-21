import {Box} from "@mui/system";
import {Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {green} from "@mui/material/colors";
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
function NavListDrawer(props) {
    return(

    <Box sx={{width:250, bgcolor:"secondary"}}>
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
                            <HomeIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Agregar persona"/>
                        <ListItemIcon>
                            <AccessibilityIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Nuevo club"/>
                        <ListItemIcon>
                            <GroupAddIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Clubs"/>
                        <ListItemIcon>
                            <GroupsIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Usuarios"/>
                        <ListItemIcon>
                            <BadgeIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

            </List>
        </nav>
    </Box>
    );
}
export default NavListDrawer