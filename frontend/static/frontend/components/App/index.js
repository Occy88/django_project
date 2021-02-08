import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "../Routes";
import './style.scss'
import favicon_16 from "../../../../../media/images/favicons/favicon-16x16.png"
import favicon_32 from "../../../../../media/images/favicons/favicon-32x32.png"

function setFavicons(){
    let head = document.getElementsByTagName('head')[0];
    let fav = document.createElement('link');
    fav.rel = 'icon';
    fav.type = 'image/png';
    fav.href = STATIC_URL + favicon_16;
    head.append(fav);
}

setFavicons()
/**
 * Base class for the App.
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
