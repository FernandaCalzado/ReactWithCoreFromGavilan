
import ValorContext from './ValorContext'
import React, { useContext } from 'react'
export default function Hijo(){
const valor = useContext(ValorContext);
    return (
<>
<h3>Componente hijo: El valor del context es: {valor} </h3>
</>
        
    )
}