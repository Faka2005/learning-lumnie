import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Acceuil</Link>
                    </li>
                    <li>
                        <Link to="/exercice">Exercice</Link>
                    </li>
                    <li>
                        <Link to="/course">Cours</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;