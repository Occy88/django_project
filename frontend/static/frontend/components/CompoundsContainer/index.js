import React from 'react';
import CompoundService from "../../../../../compounds/static/compounds/services/CompoundService";
import CompoundList from "../CompoundList";
import "./style.scss"
import OrderSelect from "../OrderSelect";

/**
 * Container for everything Compound related..
 * This handles fetching data from the backend and passing on to
 * other components. This keeps the state as high as possible and allows for
 * interacting components.
 * @param props
 */
class CompoundContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 'compound_id'
        }
        this.changeOrder = this.changeOrder.bind(this);
    }

    componentDidMount() {
        console.log("GETTING DATA");
        CompoundService.getCompounds({order: this.state.order})
            .then(d => {
                this.setState({
                    compounds_data: d
                });
            });
    }

    /**
     * Updates state based on the OrderSelect changes.
     * @param newOrder
     */
    changeOrder(newOrder) {
        this.setState({
            order: newOrder,
            compounds_data: this.sortByKey(this.state.compounds_data, newOrder)
        });
    }

    /**
     * Sorts an array of objects by a specified key.
     * Always sorts ascending.
     * @param array The array of objects
     * @param key The key to sort over.
     * @returns {*}
     */
    sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

    render() {
        if (!this.state.compounds_data) return <div>Nothing to show right now.</div>
        return (
            <div className={`compound-container columns`}>
                <div className={`column`}>
                    <OrderSelect order={this.state.order} changeOrder={this.changeOrder}/>
                    <CompoundList compounds_data={this.state.compounds_data}/>
                </div>
                <div className={`column`}>
                    <CompoundList compounds_data={[]}/>
                </div>
            </div>
        )
    }
}

export default CompoundContainer