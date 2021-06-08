import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
   const claseActiva = "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <NavLink  activeClassName={claseActiva} className="navbar-brand" to="/" > React Peliculas </NavLink>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName={claseActiva} className="nav-link" to="/generos">
                            Generos 
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={claseActiva} className="nav-link" 
                            to="/peliculas/filtrar">
                            Filtrar Peliculas 
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={claseActiva} className="nav-link" 
                            to="/actores">
                            Actores 
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={claseActiva} className="nav-link" 
                            to="/cines">
                            Cines 
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={claseActiva} className="nav-link"
                             to="/peliculas/crear">
                            Crear Peliculas 
                            </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}