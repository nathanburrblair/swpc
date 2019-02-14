import React from 'react';
import './Container.css';

const Container = (props) => {
    return (
        <div className="singleContainer">
            <img src={props.container.image} alt=""/>
            <h1>{props.container.name}</h1>
            <h2>{props.container.description}</h2>
            <h3>{props.container.price}</h3>
        </div>
    )
}

export default Container;