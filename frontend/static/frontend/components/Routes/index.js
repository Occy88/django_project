import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import languages from "../../../../../accounts/static/accounts/components/AccountService/lang";
import './style.scss'

import Header from "../Header";
import Demo from "../Demo";
import ExamplePage from '../ExamplePage'


const app_url_prefix = '';

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <Header
                    logoUrl={'https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png'}
                    fluid={true}/>
                <div className={'Router'}>

                    {/*<Header/>*/}
                    <Switch {...this.props}>
                        <Route path={app_url_prefix + "/dashboard"} render={(routeProps) => (
                            <Demo {...routeProps} />
                        )}/>
                        <Route path={app_url_prefix} render={(routeProps) => (
                            <ExamplePage {...routeProps} />
                        )}/>

                    </Switch>
                    {/*<Footer/>*/}
                </div>
            </Router>
        )
    }
}
