/* eslint-disable react/prop-types */
// import React from 'react'

const Count = ({ count }) => {
    console.log(count);
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
        </div>
    );
} 

export default Count