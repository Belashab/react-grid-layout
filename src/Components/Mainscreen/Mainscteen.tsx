import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Pages } from 'Pages/Routes';

function Mainscreen() {

    return (
        <Switch>
            {Pages.map((page, index) => <Route exact path={page.link} component={page.component} key={index} />)}
        </Switch>
    );
}

export default Mainscreen;