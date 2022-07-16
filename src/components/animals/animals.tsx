import React, {useEffect, useState} from "react";
import { apiUrl } from "../../config/api";
import {AnimalEntity} from 'types';

export const Animals= () =>{
    const [animal, setAnimal] = useState<AnimalEntity[]>([]);

    useEffect(() => {
        (async () => {

            const res = await fetch(`${apiUrl}/animal/all`);
            const data = await res.json();

            setAnimal(data);


        })();


})

    return(
        <>
            {
                animal.map(animal => (
                    <table key={animal.id}>
                        <tr><td>Zdjęcie </td>
                            <td>
                                <table>
                                    <tr><td>{animal.title}</td><td></td></tr>
                                    <tr><td>Imie: </td><td>{animal.title}</td></tr>
                                    <tr><td>Rasa: </td><td>{animal.breed}</td></tr>
                                    <tr><td>Płeć</td><td>{animal.gender}</td></tr>
                                    <tr><td>Wiek:</td><td>{animal.age}</td></tr>
                                    <tr><td>Wielkość:</td><td>{animal.dog_size}</td></tr>
                                </table>

                            </td></tr>
                    </table>

                ))
            }
       </>
    )


}