import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import React, { useEffect, useState } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})
  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          { id: 1, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 2, titulo: 'Mohana', poster: 'https://i.pinimg.com/originals/cd/74/80/cd748039b894b8097419f83979278367.png' },
          { id: 3, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 4, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 5, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 6, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 7, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },

        ],
        proximosEstrenos: [
          { id: 1, titulo: 'Soul', poster: '' },
          { id: 2, titulo: 'Mohana', poster: 'https://i.pinimg.com/originals/cd/74/80/cd748039b894b8097419f83979278367.png' },
          { id: 3, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 4, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 5, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 6, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },
          { id: 7, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg' },

        ]
      })
    }, 500);
    return () => clearTimeout(timerId);
  })
  // const peliculasEnCartelera : pelicula[] = [

  // ]

  // const peliculasProximosExtrenos : pelicula[] = [

  // ]

  // const peliculaPrueba: pelicula = {
  //   id:1, titulo: 'Spiderman', poster: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg'
  // }  
  
  return (
      <>  <h3> En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />
        <h3> Proximos Extrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
  </>
    )
}