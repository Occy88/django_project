import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './style.scss'

import ExamplePage from '../ExamplePage'


const app_url_prefix = '';

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log("SERVING EXAMPLE PAGE")
        return (
            <Router>
                <div className={'Router'}>
                    <Switch {...this.props}>
                        <Route path={app_url_prefix} render={(routeProps) => (
                            <ExamplePage {...routeProps} />
                        )}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
