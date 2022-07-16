import React from "react";
import './main.css';
import {Former} from "../RegistrationForm/form";
import {Routes, Route} from 'react-router-dom';
import {AnimalForm} from "../AnimalForm/AnimalForm";
import {Animals} from "../animals/animals";
import {Breeds} from "../animals/breeds";

export const Main =() => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Animals/>}/>
           <Route path="/registration" element={<Former/>}/>
            <Route path="/addanimal" element={<AnimalForm/>}/>
        </Routes>
        <div className={'main'}></div>

            </>
    );

};