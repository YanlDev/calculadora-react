import React from "react";
import '../style-sheets/Clear.css';

function Clear ({ children, borrarClic}) {
  return (
    <div className="boton-clear"
      onClick={ ()=> borrarClic()}
    >
      {children}
    </div>
  );
}

export default Clear