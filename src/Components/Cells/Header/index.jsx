import React from "react";
import header1 from "../../../assets/images/header/header.png"
import { Typography } from "@mui/material";
import {useMediaQuery, useTheme, } from "@mui/material";

const Header = () => {

    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
  return (
    <div>
        <img src={header1} alt="header" width="100%" />
        <Typography sx={{ position:"absolute",top:"30%",left:"15%", color:"white",  fontSize: "48px", fontWeight:"100",  }}><div> Punto de Empleo
      del Gobierno del Chaco</div> </Typography>

    </div>
  )
}
export default Header;



