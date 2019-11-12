import React from "react";
// import ForceDirectedGraph from "../../../../knn_backend/static/knn_backend/js/KnnGraph.jsx";
import vis from 'vis'

export default class DrawNetwork extends React.Component {
    constructor(props) {
        super(props);
        this.network = React.createRef();
        this.state = {
            nodes: props.nodes,
            edges: props.edges
        };
        this.constructNetwork=this.constructNetwork.bind(this)
        // console.log(props)

    }
    handleClick(properties) {
        this.props.handleClick(properties)
    }

    static compareItems(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i += 1) {
            if (arr1[i].id !== arr2[i].id) {
                return false
            }
        }
        return true
    }
    componentDidMount() {
        this.constructNetwork()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (DrawNetwork.compareItems(nextProps.nodes, this.state.nodes) && DrawNetwork.compareItems(nextProps.edges, this.state.edges)) {
            return
        }
        this.setState({
            nodes: nextProps.nodes,
            edges: nextProps.edges,
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (DrawNetwork.compareItems(prevState.nodes, this.state.nodes) && DrawNetwork.compareItems(prevState.edges, this.state.edges)) {
            return
        }
        this.constructNetwork();
    }

    constructNetwork() {
        // console.log(this.state);
        let options = {
            nodes: {
                shape: 'dot',
                size: 30,
                font: {
                    size: 32,
                    color: '#ffffff'
                },
                borderWidth: 2
            },
            edges: {
                width: 2
            }
        };
        this.netRef = new vis.Network(this.network.current, this.state, options);
        this.netRef.on('click', this.handleClick.bind(this));

    }


    render() {
        const canvStyle = {
            position: 'relative',
            width: '100%',
            height: '100%',
        };
        const style = {
            position: 'relative',
            overflow: 'hidden',
            touchAction: 'pan-y',
            width: '100%',
            height: '100%',
        };
        return (
            <div style={{backgroundColor: 'rgba(0,0,0,1)', height: '500px', width: '500px'}}>
                {/*<button onClick={this.constructNetwork}>Show Network</button>*/}
                <div style={{height: '500px', width: '500px'}} ref={this.network}>
                    <canvas style={canvStyle}></canvas>
                    <div className={"vis-network"} style={style}></div>
                </div>
            </div>


        )
    }
}
