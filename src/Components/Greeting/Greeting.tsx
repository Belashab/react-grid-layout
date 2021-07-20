import React from "react";

interface props {
    name: string,
}


function Greeting(props) {
    require('./Greeting.styl')
    return(
        <>
            <span className='component_greeting'>Welcome {props.name}</span>
        </>
    );
}

export default Greeting