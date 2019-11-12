import React from 'react'
import languages from "./lang.js";
import './style.css';

let lang = languages[document.documentElement.lang];
/**
 * This module only takes care of registering a delivery and products for it in one go.
 * Once all fields are filled, first for is submitted to create a delivery, if successful
 * a second form is submitted to register all products. finally user is alerted of success or failure.
 */
export default class ExamplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example_state: props.example_state,
        }
    }

    componentWillReceiveProps(props) {

    }

    render() {
        return (
            <div>
                Now serving the example page, Project is online and functional
            </div>

        )
    }
}

