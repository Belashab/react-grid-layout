import React from 'react';
import {
    Link,
    Switch,
    Route,
} from 'react-router-dom';
import { Pages } from 'Pages/Routes';

function Navbar() {
    require('./Navbar.styl')

    return <React.Fragment>
            <div className='navbar'>
                <div className='logo'>
                    
                </div>
                     <div>
                         <ul>
                            {Pages.map((page, index) => 
                            <li>
                              <Link to={page.link} key={index}>{page.title}</Link> 
                            </li>)}
                        </ul>
                    </div>

                    
            </div>

        </React.Fragment>
};

export default Navbar;
