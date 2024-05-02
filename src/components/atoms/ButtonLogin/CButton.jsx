/* eslint-disable */
import Button from "@mui/material/Button";
import "./CButton.css";
import { ChildCare } from "@mui/icons-material";

function CButton({ children, onClick }) {
 return (
  <Button
   className="button-login"
   variant="contained"
   onClick={onClick}
   sx={{
    backgroundColor: "#83ace9",
    color: "#000000",
    fontWeight: "700",
    fontFamily: "Gabriela"
   }}>
   {children}
  </Button>
 );
}

export default CButton;
