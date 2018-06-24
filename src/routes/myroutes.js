import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home/Home';

import Contact from './contact/Contact';
import Tasks from './Tasks';




export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={Home}/>
                <Route path ='/tasks' component={Tasks}/>
                <Route path ='/contact' component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
};
