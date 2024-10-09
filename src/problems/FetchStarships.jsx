import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchStarships = () => {
    // 4 useStates: list of starships, list of filtered Starships, 2 for each searchTerm
    const [searchNameTerm, setSearchNameTerm] = useState('');
    const [searchSizeTerm, setSearchSizeTerm] = useState('');
    const [shipList, setShipList] = useState([]);
    const [filteredShipList, setFilteredShipList] = useState([])
    
    // useEffect for Initial Fetch
    useEffect(() => {
        const fetchShipData = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/starships/');
                console.log(response.data);
                setShipList(response.data.results)
                setFilteredShipList(response.data.results)
            } catch (err) {
                console.error('error fetching data', err)
            }
        };
        fetchShipData();
    }, [])

    //useEffect for filtering by name
    useEffect(() => {
        const filteredShips = shipList.filter(ship => {
            const shipName = ship.name.toLowerCase();
            const letters = searchNameTerm.toLowerCase().split('');

            if (searchNameTerm !== '') {
                for (const letter of letters) {
                    if (!shipName.includes(letter)) return false;
                }
            }

            if (searchSizeTerm !== '') {
                try {
                    console.log('searchSizeTerm', searchSizeTerm)
                    const sizeNum = Number(searchSizeTerm)

                    if (ship.crew.includes('-')) {
                        console.log('ship.crew has a hyphen', ship.crew)
                        const minCrew = Number(ship.crew.split('-')[0]);
                        console.log('minCrew', minCrew)
                        const maxCrew = Number(ship.crew.split('-')[1]);
                        console.log('maxCrew', maxCrew)
                    
                        return maxCrew >= sizeNum && sizeNum >= minCrew;
                    } else {
                        console.log('ship.crew should be a single number', ship.crew)
                        return Number(ship.crew) >= sizeNum
                    }
                } catch (err) {
                    console.error('error filtering size, could be from unfinished typing of amount', err)
                }
            };
            return true
        });
        console.log('Filtered Ships after function', filteredShips)
        setFilteredShipList(filteredShips)
    }, [searchSizeTerm, searchNameTerm, shipList])


    //handleUpdateSearchNameTerm func
    const handleUpdateSearchName = (e) => {
        setSearchNameTerm(e.target.value)
    }

    //handleUpdateSearchSizeTerm func
    const handleUpdateSearchSize = (e) => {
        setSearchSizeTerm(e.target.value)
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search Starship Name Here!"
                value={searchNameTerm}
                onChange={handleUpdateSearchName}
            />

            <input
                type="text"
                placeholder="Search Starship Size Here!"
                value={searchSizeTerm}
                onChange={handleUpdateSearchSize}
            />

            <div style={{display:'flex', justifyContent:'spread-between'}}>
            <ul>
                {filteredShipList.map((ship, index) =>
                <li key={index}>{ship.name}</li>)}
            </ul>
            <ul>
                    {filteredShipList.map((ship, index) =>
                        <li key={index}>{ship.name}</li>)}
            </ul>
            </div>
        </>
    )
};

export default FetchStarships;