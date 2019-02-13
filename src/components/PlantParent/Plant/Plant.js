import React from 'react';
import './Plant.css';

const Plant = (props) => {
    return (
        <div className="singlePlant">
            <img src={props.plant.image} alt=""/>
            <h1>{props.plant.name}</h1>
            <h2>{props.plant.description}</h2>
            <h3>{props.plant.price}</h3>
        </div>
    )
}

export default Plant;