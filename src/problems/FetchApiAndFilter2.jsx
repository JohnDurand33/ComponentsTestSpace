import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchApiAndFilter2 = () => {
    const [planets, setPlanets] = useState([]);
    const [filteredPlanets, setFilteredPlanets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPlanetsApi = async () => {
            const response = await axios.get('https://swapi.dev/api/planets/');
            console.log(response.data)
            setPlanets(response.data.results)
            setFilteredPlanets(response.data.results)
        }
        fetchPlanetsApi();
    }, []);

    useEffect(() => {
        const updatedPlanets = planets.filter(planet => {
            const planetName = planet['name'].toLowerCase();
            const letters = searchTerm.toLowerCase();

            if (letters === '') return true;

            for (const letter of letters) {
                if (!planetName.includes(letter)) {
                    return false
                }
            }
            return true
        });
        setFilteredPlanets(updatedPlanets)
    }, [searchTerm, planets])

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <>
        <input
            type="text"
            placeholder="Search Planets Here!"
            value={searchTerm}
            onChange={handleSearchTerm}
            />
            
        <br />

        <ul>
                {filteredPlanets.length > 0 ? filteredPlanets.map((planet, index) =>
                    <li key={index}>{planet.name}</li>) : "No planets found"}
        </ul>
        </>
    )
};

export default FetchApiAndFilter2;