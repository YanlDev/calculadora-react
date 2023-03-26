import React from "react";
import "../style-sheets/Boton.css";

function Boton (params) {

  const esOperador = ((valor)=>{
    return isNaN(valor) && (valor !== '.') && (valor!== '=')
  });

  return(
    <div
    className={`boton-contenedor ${esOperador(params.children) ? 'operador' : ''}`.trimEnd()}>

      {params.children}
    
    </div>
  );
}

export default Boton;