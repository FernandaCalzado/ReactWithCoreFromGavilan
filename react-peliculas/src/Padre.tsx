
import ValorContext from './ValorContext'
import React, { useContext } from 'react'
import Hijo from './Hijo';
export default function Padre(){
const valor = useContext(ValorContext);
    return (
<>
<h3>Componente padre: El valor del context es: {valor} </h3>
<Hijo />
</>
        
    )
}