import React, {useState} from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, IconButton, ListItemText} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["INICIO", "CONTACTO", "INFORMATORIO", "CENIT", "INICETIVOs PARA EMPLEO"];
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
        <Drawer 
         anchor="left"
         open={openDrawer}
         onClose={()=> setOpenDrawer(false)}
        >
            <List>
                {pages.map((page, index) => (
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                            {page}
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                ))}
            </List>
        </Drawer>
        <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="white" />
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp