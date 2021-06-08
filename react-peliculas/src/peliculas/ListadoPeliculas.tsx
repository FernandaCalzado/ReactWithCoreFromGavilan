import { pelicula } from "./peliculas.model";
import React from "react";
import PeliculaIndividual from "./PeliculaIndividual";
import css from './ListadoPeliculas.module.css'
import Cargando from "../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";
export default function ListadoPeliculas(props: listadoPeliculasProps) {


    return (
        <ListadoGenerico
        // cargandoUI={<>Cargando...</>}
         listado={props.peliculas}>
            <div className={css.div}>
                {props.peliculas?.map(pel => <PeliculaIndividual pelicula={pel}
                    key={pel.id} />)}
            </div>
        </ListadoGenerico>

    )
}

interface listadoPeliculasProps {
    peliculas?: pelicula[]
}