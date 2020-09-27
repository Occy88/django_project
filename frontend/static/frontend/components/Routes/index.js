import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './style.scss'
import languages from './lang'
import Header from "../Header";
import ExamplePage from "../ExamplePage";
import Home from "../Home";

let lang = languages[document.documentElement.lang];

const app_url_prefix = '';

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello")

    }


    render() {
        return (
            <div className={'Router'}>

                <Router>
                    <Header/>
                    <Switch {...this.props}>
                        <Route path={app_url_prefix + "/dashboard"} render={(routeProps) => (
                            <Home {...routeProps} />
                        )}/>
                        <Route path={app_url_prefix} render={(routeProps) => (
                            <ExamplePage {...routeProps} />
                        )}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
