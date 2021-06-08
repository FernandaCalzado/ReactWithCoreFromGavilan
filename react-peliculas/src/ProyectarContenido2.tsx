import React, { ReactElement } from "react";

export default function ProyectarContenido2(props: proyectarContenido2Props)
{
    return (
       <>
      parte Superior: { props.parteSuperior? props.parteSuperior : <h3>Contenido por defecto si no mandan nada</h3>}
      <hr></hr>
      { props.parteIntermedia}
      <hr></hr>
      { props.parteInferior}
       </> 
    )

}

interface proyectarContenido2Props {
parteSuperior?: ReactElement;
parteIntermedia: ReactElement;
parteInferior: ReactElement;
}