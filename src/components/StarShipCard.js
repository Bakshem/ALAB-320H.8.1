import React from "react";
import "../style.css";

export default function StarShipCard ( {starship}) {
    return (
        <div className="starship-card">
            <h2>{starship.name}</h2>
        </div>
    );
}