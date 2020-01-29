import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './style.scss'
import languages from "../../../../../accounts/static/accounts/components/AccountService/lang";
import Header from "../Header";
import Footer from "../Footer";
import Dashboard from '../../../../../static/components/Dashboard';
import ExamplePage from "../ExamplePage";

let lang = languages[document.documentElement.lang];

const app_url_prefix = '/';

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
                        <Route path={app_url_prefix + "Dashboard"} render={(routeProps) => (
                            <ExamplePage {...routeProps} />
                        )}/>
                        <Route path="*" render={() => {
                            return (
                                <h2 style={{"textAlign": "center", "padding": "30px"}}>Page Not Found</h2>
                            )
                        }}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
