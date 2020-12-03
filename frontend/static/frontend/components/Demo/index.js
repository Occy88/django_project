import React from "react";
import './style.scss'
import Toolbar from "../../../../../static/remote_components/react_components/components/Toolbar";
import Dashboard from "../../../../../static/remote_components/react_components/components/Dashboard";
import Button from "../../../../../static/remote_components/react_components/components/Button";
import Post from "../../../../../post_manager/static/post_manager/components/Post";

/**
 * An Example of a simple widget to be used in the grid.
 *
 * Note: To be able to use a widget you must also:
 *  - Add it to the WidgetList in DashboardGrid
 *  - Create a button for it in the Toolbar
 *
 * Any given widget must take the following parameters
 * @param {function} handleRemove callback used to remove this widget
 * @param {string} i unique identity of this widget.
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardComponents: [
                {component: Post, w: 5, h: 4, text: 'Post Form'},
            ]
        };
        this.dashboard = React.createRef()
    }

    generateWidget(w) {
        this.dashboard.current.handleCreate(w.component, null, null, null, w.w, w.h, w.props)
    }

    componentDidMount() {
        this.pregenWidgets();
        this.dashboard.current.scale()
    }

    pregenWidgets() {

        // component, id, posX, posY, width, height, props

    }

    render() {
        let components = this.state.dashboardComponents.map((d, index) => {
            return <Button key={index} text={d.text}
                           onClick={() => this.generateWidget(d)}/>

        })

        return (
                <div className={'Home'}>
                    <Toolbar component={components}/>
                    <Dashboard ref={this.dashboard}/>
                </div>
        )
    }

}

export default Home;
function get_player_roles(netgames){
    for(p of Object.keys(netgames)){
        console.log(p)
    }
}