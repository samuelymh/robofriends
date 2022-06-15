import React from 'react';

// Destructuring
const Searchbox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba b--dark-blue bg-lightest-blue' 
            type='search' 
            placeholder='search robots'
            onChange={searchChange}
            />
        </div>
        
    );
}

export default Searchbox;