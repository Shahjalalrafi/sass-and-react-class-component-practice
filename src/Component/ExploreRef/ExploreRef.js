import React, { useRef } from 'react';

const ExploreRef = () => {

    const userName = useRef(null)
    const handleClick = () => {
        userName.current.focus()
        console.log(userName.current.value)
    }

    return (
        <div>
            <input type="text" ref={userName} />
            <button onClick={handleClick}>click</button>
        </div>
    );
};

export default ExploreRef;