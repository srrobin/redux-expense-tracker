import React from 'react';

const Loading = () => {
    const center = {
        display:"flex",
        alignItem:"center",
        justifyContent:"center"
    }
    return (
        <div style={center}>
            <h3>Loading ...</h3>
        </div>
    );
};

export default Loading;