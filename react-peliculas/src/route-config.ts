import LandingPage from "./LandingPage";

import IndiceGeneros from "./generos/IndiceGeneros";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";

import IndiceActores from "./actores/IndiceActores";
import EditarActores from "./actores/EditarActores";
import CrearActores from "./actores/CrearActores";

import IndiceCines from "./cines/IndiceCines";
import EditarCines from "./cines/EditarCines";
import CrearCines from "./cines/CrearCines";

import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import CrearPeliculas from "./peliculas/CrearPeliculas";
import RedireccionarALanding from "./utils/RedireccionarALanding";


const rutas = [
    {path:'/peliculas/crear',componente: CrearPeliculas},
    {path:'/peliculas/editar/:id{\\d+}',componente: EditarPeliculas},
    {path:'/peliculas/filtrar',componente: FiltroPeliculas},

    {path:'/cines/crear',componente: CrearCines},
    {path:'/cines/editar/:id{\\d+}',componente: EditarCines},
    {path:'/cines',componente: IndiceCines, exact: true},

    {path:'/generos/crear',componente: CrearGenero},
    {path:'/generos/editar/:id{\\d+}',componente: EditarGenero},
    {path:'/generos',componente: IndiceGeneros, exact: true},

    {path:'/actores/crear',componente: CrearActores},
    {path:'/actores/editar/:id{\\d+}',componente: EditarActores},
    {path:'/actores',componente: IndiceActores, exact: true},

    {path:'/',componente: LandingPage, exact: true},
    {path:'*',componente: RedireccionarALanding, exact: true},

];

export default rutas;