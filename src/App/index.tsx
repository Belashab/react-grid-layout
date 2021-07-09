import React from 'react';
import  Navbar  from '../Components/Navbar/Navbar';

export function App() {

    require('./index.styl')
    require('./../Common/Grid/gridparameters.styl')

    return(
        <div className='wrapper'>
            <Navbar />
        </div>
    );
        
}