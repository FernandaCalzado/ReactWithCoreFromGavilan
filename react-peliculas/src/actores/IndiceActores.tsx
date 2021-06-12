import { Link } from "react-router-dom";
import React from "react";

export default function IndiceActores() {
    return (
        <>
            <h3>Indice Actores</h3>
            <Link to="actores/crear">Crear Actor</Link>
        </>

    )
}