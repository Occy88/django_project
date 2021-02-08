import React from 'react';
import "./style.scss"
import AssayList from "../AssayList";

/**
 * A container for a Compound. Additional responsibilities include fetching the image for the Compound.
 * @param props This will be the Compound details served from the backend. Includes Assays.
 */
class CompoundCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAssays: false
        }
    }

    render() {
        return (
            <div className={`tile is-ancestor box compound-card`}>
                <div className={`tile is-parent is-vertical`}>
                    <div className={`tile is-parent`}>
                        <div className={`tile is-parent is-vertical is-4`}>
                            <div className={`tile compound-image `}>
                                <figure className={`image is-128x128`}>
                                    <img src={'/compounds/media/' + this.props.compound.image }
                                         alt="2D representation of the compound."
                                    />
                                </figure>
                            </div>
                            <div className={`tile`}>
                                <button className={`button`}
                                        onClick={() => this.setState({showAssays: !this.state.showAssays})}>Show Assay
                                    Results
                                </button>
                            </div>
                        </div>
                        <div className={`tile is-vertical compound-details is-8`}>
                            <div className={`tile`}>
                                <p>Compound ID: {this.props.compound.compound_id}</p>
                            </div>
                            <div className={`tile`}>
                                <p>SMILES: {this.props.compound.smiles}</p>
                            </div>
                            <div className={`tile`}>
                                <p>Molecular weight: {this.props.compound.molecular_weight}</p>
                            </div>
                            <div className={`tile`}>
                                <p>ALogP: {this.props.compound.ALogP}</p>
                            </div>
                            <div className={`tile`}>
                                <p>Formula: {this.props.compound.molecular_formula}</p>
                            </div>
                            <div className={`tile`}>
                                <p>Rings: {this.props.compound.num_rings}</p>
                            </div>

                        </div>
                    </div>
                    <div className={`tile`}>
                        <AssayList showAssays={this.state.showAssays} assays={this.props.compound.assay_results}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default CompoundCard