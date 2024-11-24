import React, { useEffect, useState } from "react";
import { getAllStarships } from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";
import "./style.css"

function App () {
    const [ starships , setStarShips ] = useState ([]);

    useEffect(() => {
        async function fetchStarships(params) {
            const data = await getAllStarships();
            setStarShips(data.results || [] );
        }
        fetchStarships();
    }, [] );

    return (
        <div className="app">
            <h1> STAR WAR STARSHIPS </h1>
            <div className="container">
                {starships.map((starship) => (
                    <StarShipCard key={starship.name} starship={starship} />
                ))}
            </div>
        </div>
    )
}

export default App;