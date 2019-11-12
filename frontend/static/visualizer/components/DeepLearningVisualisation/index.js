import React from "react";
import  {XYPlot, VerticalBarSeries} from "react-vis";
import {XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';
import DeepLearningService
    from "../../../../../deep_learning_backend/static/deep_learning_backend/components/DeepLearningService/DeepLearningService.jsx";
// import './style.css'

export default class DeepLearningVisualisation extends React.Component {
    constructor(props) {
        console.log("CONSTRUCTOR CALLED");
        super(props);
        // this.constructNetwork = this.constructNetwork.bind(this);
        // this.updateNetwork = this.updateNetwork.bind(this);
        // this.canvases = React.createRef()
    }

    // handleClick(properties) {
    //
    //
    // }


    componentDidMount() {
        // this.render()
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div style={{width: '1750px'}}>
                <XYPlot
                width={600}
                height={300}>
                    <XAxis title="Minibatches"/>
                    <YAxis title=""/>
                    <VerticalBarSeries barWidth={0.5}
                        data={[
                            {x:0.25, y:-3},
                            {x: -1.25, y:1},
                            {x: -2.25, y:2},
                            {x: -3.25, y:3},
                            {x: -4.25, y:2},
                            {x: -0.25, y:-1},
                            {x: -0.75, y:-2},
                            {x:-1.75, y:-5}
                        ]}
                    />
                </XYPlot>
            </div>
        );
    }
}
