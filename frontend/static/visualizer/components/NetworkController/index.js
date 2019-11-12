import React from "react";
import DrawNetwork from "../DrawNetwork";
import KnnService from '../../../../../knn_backend/static/knn_backend/components/KnnService/KnnService.jsx'
import './style.css'

export default class NetworkController extends React.Component {
    constructor(props) {
        console.log("CONSTRUCTOR CALLED");
        super(props);
        this.state = {
            nodes: [],
            edges: [],
            items: [],
            item_id_list: [],
            node: 0
        };
        this.constructNetwork = this.constructNetwork.bind(this);
        this.updateNetwork = this.updateNetwork.bind(this);
        this.canvases = React.createRef()
    }

    handleClick(properties) {
        let id = properties.nodes[0];
        let selected = null;
        for (let k of this.state.items) {
            if (k.hash === id) {
                selected = k
            }

        }


        while (this.canvases.current.firstChild) {
            this.canvases.current.removeChild(this.canvases.current.firstChild);
        }
        let selectedDiv = document.createElement("div");
        selectedDiv.innerText = "Selected Node: " + selected.hash + "\n" + "label:" + selected.label.name + "\n";

        let img = NetworkController.createImage(JSON.parse(selected.data));
        selectedDiv.appendChild(img);

        this.canvases.current.appendChild(selectedDiv);

        let k_nearest_images = [];
        for (let dict of selected.k_nearest) {
            let selectedDiv = document.createElement("div");
            selectedDiv.style.display = "inline-block";
            // console.log(dict);
            selectedDiv.innerText = "K_Nearest Node: " + dict.hash + "\n" + "label:" + dict.label.name + "\n";
            selectedDiv.appendChild(NetworkController.createImage(JSON.parse(dict.data)));
            this.canvases.current.appendChild(selectedDiv);

        }

    }

    /**
     * returns a vanvas (n*n) of an image
     * data does is not rgba, it is just a list of numbers,
     *
     * @param data values for each pixel on the canvas
     *
     */
    static createImage(data) {
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        console.log("CREATING IMAGE");
        // Define the image dimensions
        let width = data[0].length * 5;
        let height = data.length * 5;
        // Create an ImageData object
        let imagedata = context.createImageData(width, height);
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                // Get the pixel index
                var pixelindex = (y * width + x) * 4;

                // Generate a xor pattern with some random noise
                var red = 0;
                var green = data[Math.floor(y / 5)][Math.floor(x / 5)];
                var blue = 100;


                // Set the pixel data
                imagedata.data[pixelindex] = red;     // Red
                imagedata.data[pixelindex + 1] = green; // Green
                imagedata.data[pixelindex + 2] = blue;  // Blue
                imagedata.data[pixelindex + 3] = 255;   // Alpha
            }
        }
        context.putImageData(imagedata, 0, 0);

        return canvas
    }

    enterNumber(event) {
        this.setState({
            node: event.target.value
        })
    }

    componentDidMount() {
        this.updateNetwork();
    }

    updateNetwork() {
        console.log("getting data");
        KnnService.getItemsRelations({
            hash: Math.floor(this.state.node),
            API_KEY: 'ti^$0ys%1m0ys%n601$rhk!*q#q1$rhk!6m2#&m0ys%'
        }).then(d => this.constructNetwork(d));
    }

    checkItemExists(dict) {
        for (let i = 0; i < this.state.items.length; i += 1) {
            if (dict.hash === this.state.items[i].hash) {
                return true;
            }
        }
        return false;
    }

    constructNetwork(data) {
        /**
         * This should be constructed out of set nodes rather than
         * hard coded.
         * nodes come with the following format:
         * {hash:<hash>, label:<label>,data:<data>}
         * Group should be defined by the label
         * Label should probably just be the hash
         * and the id is obviously the hash...
         * @type {*[]}
         */
        // console.log(data);
        console.log("DATA RECIEVED:");
        let items = this.state.items;
        for (let dict of data) {
            if (!this.checkItemExists(dict)) {
                items.push(dict)
            }
        }
        let nodes = [];
        let edges = [];
        //keep a list of already added nodes to prevent duplicates.
        let id_list = [];
        for (let dict of items) {
            if (!id_list.includes(dict.hash)) {
                id_list.push(dict.hash);
                // HERE NEE
                nodes.push({id: dict.hash, label: dict.hash, group: dict.label.hash});
            }
            for (let n of dict["k_nearest"]) {
                if (!id_list.includes(n.hash)) {
                    id_list.push(n.hash);
                    // if (!this.checkItemExists(n)) {
                    //     items.push(n)
                    // }
                    nodes.push({id: n.hash, label: n.hash, group: n.label.hash});
                }

                edges.push({from: dict.hash, to: n.hash})
            }
        }
        this.setState({
            nodes: nodes,
            edges: edges,
            items: items
        });

    }

    render() {

        return (
            <div style={{width: '1750px'}}>
                <div style={{width: '1000px', display: 'block'}}>

                    <input className={"node_input"} type={"number"} onChange={this.enterNumber.bind(this)}
                           value={this.state.node}/>
                    <button className={"node_input_submit"} onClick={this.updateNetwork}>update network</button>
                </div>
                <div style={{'verticalAlign':'top',width: '600px', display: 'inline-block'}}>
                    <DrawNetwork handleClick={this.handleClick.bind(this)} nodes={this.state.nodes}
                                 edges={this.state.edges}/>
                </div>
                <div style={{width: '1000px', display: 'inline-block'}}>

                    <div ref={this.canvases}>Canvases:</div>
                </div>
            </div>


        )
    }
}
