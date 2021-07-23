import React from "react";
import { FunctionComponent } from "react";

const Greeting = () => {
    require('./Greeting.styl')
    return(
        <>
            <span className='component_greeting'>Welcome</span>
        </>
    );
}

export default Greeting