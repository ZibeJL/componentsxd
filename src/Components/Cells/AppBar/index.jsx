import React, {useState} from "react";
import { AppBar,Toolbar,Tabs,Tab, useMediaQuery, useTheme, } from "@mui/material";
import DrawerComp from "./Drawer";
import logo from "../../../assets/images/logos/logo1.png"
import logoface from "../../../assets/images/iconos/facebook.png"
import logoinst from "../../../assets/images/iconos/instagram.png"

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
    return (
        <React.Fragment>

            <AppBar sx={{background:'#c8e6c9', color: 'black'}}>
                <Toolbar>
                <img src={logo} alt="logo1!" width="170" height="65" />
                    {isMatch ? (
                   <>
                   <DrawerComp/>
                   </>
                 ) : (
                    <>
                    <Tabs sx={{marginLeft: 'auto'}} textColor="inherit" value={value} onChange={(e, value)=> setValue(value) } indicatorColor="secondary">
                        <Tab label="INICIO" />
                        <Tab label="CONTACTO" />
                        <Tab label="INFORMATORIO" />
                        <Tab label="CENIT" />
                        <Tab label="INICETIVOs PARA EMPLEO" />
                    </Tabs>
                    </>
                 )}
                         <img src={logoface} alt="logo1!" width="15" height="15" style={{paddingRight:"1rem", paddingLeft:"1rem"}} />

                         <img src={logoinst} alt="logo2!" width="15" height="15" />  
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;