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
                {Pages.map((page, index) => <Link to={page.link} key={index}>{page.title}</Link>)}
            </div>

            <Switch>
                {Pages.map((page, index) => <Route exact path={page.link} component={page.component} key={index} />)}
            </Switch>

        </React.Fragment>
};

export default Navbar;
