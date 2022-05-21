import * as React from "react";
import RedirectSeccion from "./Components/Cells/RedirectSeccion";

import { createTheme, ThemeProvider} from "@mui/material/styles";
import AppBar from "./Components/Cells/AppBar";
import Header from "./Components/Cells/Header";


const theme = createTheme({
  /* breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  }, */
});

export default function MediaCard({ img, tittle, description }) {
  return (
    
    <ThemeProvider theme={theme}>
      <AppBar/>
      <Header/>
        <RedirectSeccion />      
    </ThemeProvider>
  );
}
