import React from "react";
import './Header.css';

export const Header = () =>{

    return(
        <>
            <header>
                <h1>Adoptuj zwierzaka</h1>
                {/*<div className={'navigation'}>*/}
                <button>Dodaj ogłoszenie</button>
                <button>Logowanie</button>
                <button><a href={'/registration'}>Rejestracja</a>
                </button>
                {/*</div>*/}
            </header>

        </>
    )
}