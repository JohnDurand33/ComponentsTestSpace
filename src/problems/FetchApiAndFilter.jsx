import React, { useEffect, useState } from 'react';
import axios from 'axios'

const FetchApiAndFilter = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/people/');
                console.log(response.data.results)
                setCharacters(response.data.results)
                setFilteredCharacters(response.data.results)
            } catch (err) {
                console.error('error fetching data', err)
            }
        };
        fetchCharacters();
    }, []);

    useEffect(() => {
        const updatedFilteredChars = characters.filter(char => char.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredCharacters(updatedFilteredChars)
    }, [searchTerm, characters])



    return (
        <>
        <input
            type="text"
            placeholder='input character name here!'
            value={searchTerm}
            onChange={handleSearchTerm} />
            <br />
        {filteredCharacters ? filteredCharacters.map((character, index)=> 
            <li key={index}>{character.name}</li>) : 'No characters found'}
        </>
)
}

export default FetchApiAndFilter;

