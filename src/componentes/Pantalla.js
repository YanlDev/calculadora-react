import React from "react";
import '../style-sheets/Pantalla.css'

//creando componente en una constante y funcion anonima esto se hace generalmente en componentes sencillos

const Pantalla = ( { input } ) => (

  <div className="input">
    { input }
  </div>

);

export default Pantalla;