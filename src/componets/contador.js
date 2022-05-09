import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador : {contador}</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default Contador;
