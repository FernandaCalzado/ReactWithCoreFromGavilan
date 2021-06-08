// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MostrarTexto from './MostrarTexto';
// import ProyectarContenido from './ProyectarContenido';
// import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './ejemploReloj';
import ContenidoDinamico from './ContenidoDinamico';
import FormularioTexto from './FormularioTexto';
import ErrorBoundary from './ErrorBoundary';
// import EjemploUseEfect from './EjemploUseEfect';
// import ValorContext from './ValorContext';
// import Abuelo from './Abuelo';

function AppCopy() {
  //let texto = "";
  const [texto,setTexto] = useState('Valor por defecto');
  const [checked,setChecked] = useState(false);
  const titulo = "Hola Mundo!!!"
  const manejarClick = () => alert('click');

  // const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   console.log(e.currentTarget.value)
  //  // texto = e.currentTarget.value;
  //  setTexto(e.currentTarget.value);
  // }

  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput)
   // texto = e.currentTarget.value;
    setTexto(textoInput);
  }

  const duplicar = (valor: number) => valor * 2;
 const parteIntermedia = <EjemploReloj />
 const estilo ={
   backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'
 }
 const parteInferior = <div style={estilo}></div>
 
 const calificaciones = [
   {  nombre: 'Felipe', calificacion: 75},
   {  nombre: 'Juan', calificacion: -4},
   {  nombre: 'Carlos', calificacion: 95},
   {  nombre: 'Felipex', calificacion: 75},
   {  nombre: 'Feliper', calificacion: 75},
 ]
 
 return (
    <>
      <h1> {titulo} </h1>

{calificaciones.map(cal=>
<ErrorBoundary key={cal.nombre}
  // errorUI={<h3> Error mostrando calificacion </h3>} 
  >

<ContenidoDinamico  {...cal} />
  
</ErrorBoundary>
)}

{/* 
<ValorContext.Provider value ={texto}>
<Abuelo />
</ValorContext.Provider> */}
      {/* <EjemploUseEfect /> */}
{/* <ContenidoDinamico calificacion={8} /> */}

      {/* <ProyectarContenido>
<span>Hola</span>
      </ProyectarContenido> */}
      {/* <ProyectarContenido2

// parteSuperior = {
//   <h3>Esta es la parte de arriba</h3> 
// }
parteIntermedia = {parteIntermedia}
parteInferior={parteInferior}
      /> */}

      <button onClick={manejarClick}>Clickme</button>
      <button onClick={() => alert('click directo')}>Clickme</button>
      <h4> {duplicar(3)} </h4>
<FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />
{/* <MostrarTexto texto={texto}/> */}
<MostrarTexto />

      <div>
        <input type="checkbox" 
      onChange={(e) => setChecked(e.currentTarget.checked)}
      checked={checked} />
      </div>
      <br></br>
    </>

  );
}

export default AppCopy;
