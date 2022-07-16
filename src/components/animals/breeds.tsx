import React, {useEffect, useState} from "react";
import { Breed } from "types";
import { apiUrl } from "../../config/api";

export const Breeds = ()=>{
    const [breed, setBreed] = useState<Breed[]>([]);

    useEffect(() => {
        (async () => {

            const res = await fetch(`${apiUrl}/animal/breed`);
            const data = await res.json();

            setBreed(data);


        })();


    })

    return(

        <>

            {
                breed.map(breed=>(
                    <option key={breed.breed} value={breed.breed}>{breed.breed}</option>
                    )
                )
            }
        </>
    )

}