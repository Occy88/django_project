import React from 'react';
import CompoundCard from "../CompoundCard";
import "./style.scss"


/**
 * List of CompoundCards.
 * This handles creating the CompoundCards.
 * @param props A list of Compounds from the backend.
 */
class CompoundList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`compound-list box`}>
                {
                    this.props.compounds_data.map((compound) => {
                        return <CompoundCard compound={compound}
                                             key={compound.compound_id}/>
                    })
                }
            </div>
        )
    }
}

export default CompoundList