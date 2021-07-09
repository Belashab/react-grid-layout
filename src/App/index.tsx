import React from 'react';
import  Navbar  from '../Components/Navbar/Navbar';

export function App() {

    require('./index.styl')

    return(
        <div className='wrapper'>
            <Navbar />
        </div>
    );
        
}