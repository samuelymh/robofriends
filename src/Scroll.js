import React from 'react';

const Scroll = (props) => {
    return (
        <div 
            style={{
                overflowY: 'scroll', 
                border: '2.5px solid black', 
                height: '800px'
                }}>
            {props.children}
        </div>
    );
}

export default Scroll;