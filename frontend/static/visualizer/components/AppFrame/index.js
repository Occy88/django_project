import React from "react";
import './style.css';
import TopMenu from "../TopMenu";
import SideMenu from "../SideMenu";
import VisFrame from "../VisFrame";

export default class AppFrame extends React.Component {
    constructor(props) {
        console.log("CONSTRUCTOR CALLED");
        super(props);
    //    bind callbacks.
    }

    componentDidMount() {
    //
    }

    componentWillUnmount() {
    //
    }

    render() {
    //    TODO fill in.
        return (
        <div>
            <TopMenu/>
            <SideMenu/>
            <VisFrame/>
        </div>);
    }
}
