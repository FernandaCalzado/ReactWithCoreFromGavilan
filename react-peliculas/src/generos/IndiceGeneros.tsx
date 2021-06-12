import { Link } from "react-router-dom";
import React from "react";

export default function IndiceGeneros() {
    return (
        <>
            <h3>Indice Géneros</h3>
            <Link to="generos/crear">Crear Género</Link>
        </>

    )
}