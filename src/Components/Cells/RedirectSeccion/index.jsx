import img1 from "../../../assets/images/iconos/capacitaciones.png";
import img2 from "../../../assets/images/iconos/empleo.png";
import img3 from "../../../assets/images/iconos/oficios.png";
import img4 from "../../../assets/images/iconos/empresas.png";
import img5 from "../../../assets/images/iconos/emprendimientos.png";
import RedirectCard from "../../Atoms/RedirectCard";
import { Grid } from "@mui/material";
import { grid } from "./style";
const items = [
  {
    titulo: "Capacitaciones",
    descripcion: "Cursos para tu formación laboral y emprendedora",
    img: img1,
    url: "/cenit",
  },
  {
    titulo: "Empleo",
    descripcion: "Postulación a búsquedas laborales.",
    img: img2,
    url: "/empleo",
  },
  {
    titulo: "Oficios",
    descripcion: "Herramientas de promoción y comercialización",
    img: img3,
    url: "/oficios",
  },
  {
    titulo: "Empresas",
    descripcion: "Programas y beneficios para contratar y capacitar personal.",
    img: img4,
    url: "/empresas",
  },
  {
    titulo: "Emprendimientos",
    descripcion:
      "Herramientas de promoción, comercialización y financiamiento.",
    img: img5,
    url: "/emprendimientos",
  },
];

const index = () => {
  return (
    <Grid sx={grid} container spacing={2}>
      {items.map((item) => {
        return (
          <Grid key={item.url} item >
            <RedirectCard
              img={item.img}
              tittle={item.titulo}
              description={item.descripcion}
              url={item.url}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default index;
