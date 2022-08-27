import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  category: {
    fontSize: 12,
    marginLeft: 5,
    backgroundColor: "#c2c2c252",
    padding: 5,
    borderRadius: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 600,
    color:'#e68b59'
  },
  productDetails: {
    display: "flex",
    justifyContent: "space-between",
    margin: '0px 10px',
  },
  trend:{
    display: "flex",
    alignItems: 'center',
    color: "green",

  },
  pos: {
    marginBottom: 12,
  },
  paperHeight: {
    minHeight: "50px",
    marginBottom: "10px",
    padding: "5px",
  },
});
