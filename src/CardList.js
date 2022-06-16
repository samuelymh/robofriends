import React from 'react';
import Card from './Card';

// Destructuring: { robots } = prop (prop is properties of the HTML tag)
const CardList = ({ robots }) => {
    const cardArray = robots.map(robot => {
        return (
            <Card
                key={robot.id} 
                id={robot.id} 
                name={robot.name} 
                email={robot.email}
            />
        );
    });

    return (
        // Shorthand for Fragment, so we don't pass in a parent element.
        <>
            {/* Anything we put inside curly brackets is javascript */}
            {cardArray}
        </>
    );
}

export default CardList;