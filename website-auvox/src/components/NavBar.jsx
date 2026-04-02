import React from "react";
import '../styles/navBar.css';
import image from '../assets/logo.png';
function NavBar() {
    return(
        <>
            <nav>
                <div>
                    <img src={image} alt="" />
                </div>

                <div>
                    <ul>
                        <li><a href="#" id="inicio">INÍCIO</a></li>
                        <li><a href="#" id="sobre">SOLUÇÕES</a></li>
                        <li><a href="#" id="sobre">EQUIPE</a></li>
                        <li><a href="#" id="projeto">SOBRE</a></li>
                        <li><a href="#" id="contato">PROJETO</a></li>
                        <li><a href="#" id="contato">CONTATO</a></li>
                    </ul>
                </div>

                
            </nav>
        </>
    )
}

export default NavBar; 