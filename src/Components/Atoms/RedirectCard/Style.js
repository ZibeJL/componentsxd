import { Theme } from '@mui/material/styles';

const card = (value) => {
  console.log(value);
  return {
    maxWidth: 200,
    height: 300,
    borderRadius: 45,
    display: "flex",
    paddingTop: "2rem",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    textAlign: "center",
    marginTop: "8rem",
    ":hover": {
      boxShadow: 6,
      '& .MuiDivider-root': {
        backgroundColor: 'blue',
      },
    },
  }
};
const divider ={
  backgroundColor: "red",
  height: "0.1rem",
  marginBottom: "1rem",
  marginTop: "1rem",
}

export { card, divider };
