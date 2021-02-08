import React from 'react';
import "./style.scss"
import AssayCard from "../AssayCard";


/**
 * List of AssayCards.
 * This handles creating the AssayCards.
 * @param props A list of Assays from the Compound
 */
class AssayList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`assay-list column ${this.props.showAssays ? "" : "is-hidden"}`}>
                {
                    this.props.assays.map((assay) => {
                        return <AssayCard assay={assay}
                                          key={assay.result_id}/>
                    })
                }
            </div>
        )
    }
}

export default AssayList