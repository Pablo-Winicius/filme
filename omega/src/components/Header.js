import React from "react";
import './Header.css'
import logo from './logo.png'
import lupa from './lupa.png'

export default ()=>{
    return(
        <header className="hearder--cabe">
           <div className="header--logo">
            <a href="/">
             <img  src={logo}/>
            </a>
            </div> 

            <div className="hearder--meio">
                <p>Séries</p>
                <p>Filmes</p>
            </div>

            <div className="header--lupa">
            <a href="/">
             <img  src={lupa}/>
            </a>
            <p>Filtro</p>
            <p>Login</p>
            </div>

            

        </header>
    )
}