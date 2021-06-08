import React from "react";

export default function ContenidoDinamico(props: any) {
    //Ejemplo operaador ternario
    // return (
    //     <div>
    //         {props.mostrarMensajeSecreto ? <span>Mensaje secreto: 42</span> : null }
    //     </div>
    // )
    //ejemplo if
    if (props.calificacion > 90) {
        return (
            <div>
                <h3>{props.nombre}: Excelente </h3>
            </div>
        )
    }else if (props.calificacion >= 80 && props.calificacion <=90) {
        return (
            <div>
                <h3>{props.nombre}: Bien </h3>
            </div>
        )
    }
    else  if (props.calificacion >= 0 && props.calificacion <= 80){
        return (
            <div>
                <h3>{props.nombre}: Que te digo! </h3>
            </div>
        )
    } else{
        throw `Ha habido un error con la calificacion de ${props.nombre}`;
    }
}