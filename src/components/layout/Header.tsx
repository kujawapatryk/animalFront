import React from "react";
import './Header.css';

export const Header = () =>{

    return(
        <>
            <header>
                <h1>Adoptuj zwierzaka</h1>

                <button><a href={'/addanimal'}>Dodaj ogłoszenie</a></button>
                <button>Logowanie</button>
                <button><a href={'/registration'}>Rejestracja</a>
                </button>

            </header>

        </>
    )
}