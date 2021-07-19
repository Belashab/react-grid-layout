import React from 'react';
import  Navbar  from '../Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pages } from 'Pages/Routes';


export function App() {

    require('./index.styl')
    require('./../Common/Grid/gridparameters.styl')

    return(
        <div className='wrapper'>
            <Router>
                <Navbar />
                <Switch>
                    {Pages.map((page, index) =>{
                        return(
                            <Route path={page.link} key={index} component={page.component}/>
                        )
                    }

                    )}
                </Switch>
            </Router>
        </div>
    );
        
}