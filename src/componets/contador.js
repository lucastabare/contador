import React, { useState } from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Box from "@mui/material/Box";

function Contador() {
  const MySwal = withReactContent(Swal);
  const [contador, setContador] = useState(0);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pueden sumar numeros negativos",
        footer: "Intente nuevamente",
      });
    }
  };

  return (
    <div>
      <div className="central">
        <h1 className={contador < 1 ? "menor" : "mayor"}>
          Contador : {contador}
        </h1>
      </div>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button
          className="button"
          size="large"
          variant="contained"
          color="error"
          onClick={disminuir}
        >
          -
        </Button>
        <Button
          size="large"
          variant="contained"
          color="success"
          onClick={aumentar}
        >
          +
        </Button>
      </Box>
    </div>
  );
}

export default Contador;
