import React, {SyntheticEvent, useState} from 'react';
import {apiUrl} from "../../config/api";



export const AnimalForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        title: '',
        name: '',
        gender: 'suczka',
        breed: 'mieszaniec',
        dog_size: 'mały',
        reproduction: '1',
        child_friendly: '1',
        pet_friendly: '1',
        age: '0'
    });

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/animal`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
            {
                ...form
            }),
            });

            const data = await res.json();

            setId(data.id);

        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2>Trwa dodawanie ogłoszenia...</h2>;
    }

    if (id) {
        return <h2>Twoje ogłoszenie "{form.title}" zostało poprawnie dodane do serwisu pod ID: {id}.</h2>;
    }

    return(
        <form action="" className="add-form" onSubmit={saveAd}>
            <h1>Dodawanie ogłoszenia</h1>
            <p>
                <label>
                    Tytuł:
                    <input
                        type="text"
                        name="title"
                        required
                        maxLength={255}
                        value={form.title}
                        onChange={e => updateForm('title', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Imie:
                    <input
                        type="text"
                        name="name"
                        required
                        maxLength={48}
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Płeć:
                    <select
                        name="gender"
                        required
                        value={form.gender}
                        onChange={e => updateForm('gender', e.target.value)}
                    >
                        <option value="suczka">Suczka</option>
                        <option value="samiec">Samiec</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    Wiek:
                    <input
                        type="number"
                        name="age"
                        required
                        maxLength={30}
                        minLength={0}
                        value={form.age}
                        onChange={e => updateForm('age', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Rasa:
                    <select
                        name="breed"
                        required
                        value={form.breed}
                        onChange={e => updateForm('breed', e.target.value)}
                    >
                        <option value="mieszaniec">Mieszaniec</option>
                        <option value="husky">Husky</option>
                        <option value="inne">Inne</option>

                    </select>
                </label>
            </p>
            <p>
                <label>
                    Wielkość psa:
                    <select
                        name="dog_size"
                        required
                        value={form.dog_size}
                        onChange={e => updateForm('dog_size', e.target.value)}
                    >
                        <option value="mały">Mały</option>
                        <option value="średni">Średni</option>
                        <option value="duż">Duży</option>

                    </select>
                </label>
            </p>
            <p>
                <label>
                    Kastracja:
                    <select
                        name="reproduction"
                        required
                        value={form.reproduction}
                        onChange={e => updateForm('reproduction', e.target.value)}
                    >
                        <option value="2">Tak</option>
                        <option value="1">Nie</option>


                    </select>
                </label>
            </p>
            <p>
                <label>
                    Lubi dzieci:
                    <select
                        name="child_friendly"
                        required
                        value={form.child_friendly}
                        onChange={e => updateForm('child_friendly', e.target.value)}
                    >
                        <option value="2">Tak</option>
                        <option value="1">Nie</option>


                    </select>
                </label>
            </p>
            <p>
                <label>
                    Akceptuje inne zwierzęta :
                    <select
                        name="pet_friendly"
                        required
                        value={form.pet_friendly}
                        onChange={e => updateForm('pet_friendly', e.target.value)}
                    >
                        <option value="2">Tak</option>
                        <option value="1">Nie</option>


                    </select>
                </label>
            </p>
            <button>Zapisz</button>

        </form>
    )

}

