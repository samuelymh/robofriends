import React from 'react';

// Programming paradigm with React is different in the sense that we are no
// longer concerned with separating HTML/js/css. React is just concerned
// with separating entire components that are in their own "universe".

// Destructuring props inside the parameter
// Inside return is jsx not HTML.
const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img 
                alt='robots' 
                src={`https://robohash.org/${id}?size=200x200`} 
            />
            {/* <h2 className='w5 h3'>{name}</h2> */}
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;