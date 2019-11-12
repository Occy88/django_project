import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "../Routes";
import Header from '../Header'
import Footer from '../Footer'
/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Routes/>

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
