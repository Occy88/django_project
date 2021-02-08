import React from 'react';
import "./style.scss"

/**
 * A container for a Compound. Additional responsibilities include fetching the image for the Compound.
 * @param props This will be the Compound details served from the backend. Includes Assays.
 */
class AssayCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`tile is-ancestor box assay-card`}>
                <div className={`tile compound-image is-3`}>
                    <figure className={`image is-64x64`}>
                        <img src={STATIC_URL + '/media/images/favicons/favicon-32x32.png'}
                             alt="2D representation of the compound."
                        />
                    </figure>
                </div>
                <div className={`tile is-vertical compound-details is-9`}>
                    <div className={`tile`}>
                        <p>Compound ID: {this.props.assay.result_id}</p>
                    </div>
                    <div className={`tile`}>
                        <p>Target: {this.props.assay.target}</p>
                    </div>
                    <div className={`tile`}>
                        <p>Result:  {this.props.assay.result + ' '}
                                    {this.props.assay.operator + ' '}
                                    {this.props.assay.value + ' '}
                                    {this.props.assay.unit}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default AssayCard