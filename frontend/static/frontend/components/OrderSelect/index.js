import React from 'react';
import "./style.scss"

/**
 * A container for a Compound. Additional responsibilities include fetching the image for the Compound.
 * @param props This will be the Compound details served from the backend. Includes Assays.
 */
class OrderSelect extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Passes the change back up to the parent.
     * @param event The DOM event.
     */
    handleChange(event) {
        this.props.changeOrder(event.target.value)
    }

    render() {
        return (
            <div className={`select`}>
                <select value={this.props.order} onChange={this.handleChange}>
                    <option value={'compound_id'}>Compound ID</option>
                    <option value={'molecular_weight'}>Molecular Weight</option>
                    <option value={'ALogP'}>ALogP</option>
                    <option value={'num_rings'}>Number of Rings</option>
                </select>
            </div>
        )
    }
}

export default OrderSelect