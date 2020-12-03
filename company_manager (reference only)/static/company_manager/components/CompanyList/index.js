import React from 'react';

import ListSelect from '../../../../../static/remote_components/react_components/components/ListSelect'
import CompanyService from '../CompanyService'

/**
 * Gets a list of companies registered to the user using the api,
 * on selection of a company by the user it calls changeCompany for the parent, sending the company object.
 */
class CompanyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            request_failed: false,
        };
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidMount() {
        this.mounted = true;
        console.log("GETTING DATA");
        CompanyService.getCompanies({is_active: 'True'}).then(d => {
            if (this.mounted) {
                if (typeof d !== Array) {
                    this.setState({
                        company_data: []
                    })
                } else {
                    this.setState({
                        company_data: d
                    });
                }
            }
        })
    }

    render() {
        if (!this.state.company_data) return <div style={{display: 'inline-block'}}>N/A</div>;
        return (
            <div>
                <ListSelect default={DEFAULT_COMPANY} filter={false} object_list={this.state.company_data}
                            id_key={'name'}
                            str_key={'name'}
                            sort_key={'name'}
                            handleSelect={this.props.changeCompany}/>
            </div>
        )
    }
}

export default CompanyList
