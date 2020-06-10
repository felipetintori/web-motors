import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import HomeInterna from './page/HomeInterna';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/versao/:id" component={HomeInterna}/>               
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
