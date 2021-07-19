import React from 'react';
import {
    Link
    // Switch,
    // Route,
} from 'react-router-dom';
import { Pages } from 'Pages/Routes';


function Navbar() {
    require('./Navbar.styl')

    // return <React.Fragment>
    //         <div className='navbar'>
    //             <div className='logo'>
                    
    //             </div>
    //                  <div>
    //                      <ul>
    //                         {Pages.map((page, index) => 
    //                         <li>
    //                           <Link to={page.link} key={index}>{page.title}</Link> 
    //                         </li>)}
    //                     </ul>
    //                 </div>

                    
    //         </div>

    //     </React.Fragment>

    return (
        <>
            <nav className = 'navbar'>
                <div className='logo'>
                    <img src='./../../Resources/Common/logo.png' />
                    <h3>Univé</h3>
                </div>
                {Pages.map((page, index) => {
                    return (
                            
                                <ul>
                                    <li key={index} className='nav_menu__option'>
                                        <Link to={page.link}>
                                            <img src={page.icon} />
                                            <span>{page.title}</span>
                                        </Link>
                                    </li>
                                </ul>
                            
                            );
                        }
                    )
                }
            </nav>
        </>
    )
}

export default Navbar;
