import React from 'react'
import languages from "./lang.js";
import './style.scss';
import CompoundContainer from "../CompoundsContainer";
import Navbar from "../Navbar";
import logo from "../../../../../media/images/favicons/exscientia-placeholder.png"

/**
 * An example page.
 */
export default class ExamplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example_state: props.example_state,
        }
    }

    render() {
        let lang = languages[document.documentElement.lang];

        return (
            <div className={`home`}>
                <Navbar logo_link={'/'} logo={STATIC_URL + logo}/>
                <CompoundContainer/>
            </div>
        )
    }
}

