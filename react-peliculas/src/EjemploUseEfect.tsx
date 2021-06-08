import React, { useEffect, useState } from "react";

export default function EjemploUseEfect (){
  
    const [fecha,setFecha] = useState(new Date())
    const [clicks,setClicks] = useState(0)
  useEffect(()=>{
      console.log('componente ha cargado');
      document.title =`${clicks} veces`
  return () =>{
      //se ejecuta al destruir el componente
      console.log('')
  }
    },[clicks]) //dependencia, solo se ejecuta cuando se altere los clicks

  useEffect(()=>{
    console.log('componente ha cargado2');
const intervalId = setInterval(()=> {
setFecha(new Date())
},1000)
return () => {
    clearInterval(intervalId)
}
})

useEffect(()=>{
    console.log('componente de una sola ejecucion');
    
  },[]) // al pasar una dependencia vacia, le indicamos que solo se ejecutara una unica vez al cargar el componente y nunca mas

    return (
        <>
        <button onClick={()=> setClicks(clicks+1)  }> Me has presionado {clicks} veces </button>
        
        <div> {fecha.toString()}
        </div>
        
        </> 
        // <span>Ejemplo use efect</span>
    )
}