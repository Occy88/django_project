import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "../Routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
class App extends React.Component {
    render() {
        return (
                <Routes/>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
