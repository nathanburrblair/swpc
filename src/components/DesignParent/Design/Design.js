import React from 'react';
import './Design.css';

const Design = (props) => {
    return (
        <div className="singleDesign">
            <img src={props.design.image} alt=""/>
            <h1>{props.design.name}</h1>
            <h2>{props.design.description}</h2>
            <h3>{props.design.price}</h3>
        </div>
    )
}

export default Design;