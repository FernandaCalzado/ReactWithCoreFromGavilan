import { useEffect, useState } from "react";
import React from "react";

export default function EjemploReloj() {

    //los estados son datos que pertenencen a un componente, los cuales al ser editados, provocaran que se vuelva a renderizar el componente, 
    const [fecha, setFecha] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => {
            setFecha(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    })
    return (
        <div>
            <h3> ejemplo react </h3>
            <input />
            <div> ${fecha.toString()} </div>
        </div>
    )
}