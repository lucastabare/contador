import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    } else {
      alert("Esto es un contador, no se puede contar menos que CERO");
    }
  };

  return (
    <div>
      <h1>Contador : {contador}</h1>
      <button onClick={aumentar}>+</button>
      <button onClick={disminuir}>-</button>
    </div>
  );
}

export default Contador;
