import './style/style.scss';

import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";
import {ApolloProvider} from '@apollo/react-hooks';

import NavBar from './components/NavBar';
import Foot from './components/Foot';

import modules from './modules';
import client from './graph';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <div className="container">
                            <NavBar/>
                            <Switch>
                                {modules.map(module => (
                                    <Route path={module.path} component={module.component}/>
                                ))}
                            </Switch>
                        </div>

                        <Foot/>
                    </BrowserRouter>
                </ApolloProvider>
            </div>
        );
    }

}
