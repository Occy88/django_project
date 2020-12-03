import React from 'react';
import languages from "./lang.js"
import ListSelect from "../../../../../static/remote_components/react_components/components/ListSelect";
import AccountService from "../AccountService";
import {withRouter} from "react-router-dom";


/**
 * Receives a stock_holder id,
 * Tries to load all stock list from api,
 * adds a filter allows user to select a stock,
 * sends selected object to parent vial changeSupplier function
 */
class LanguageSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language_list: null,
            language: null
        };


    }

    componentDidMount() {

        AccountService.getLanguageChoices().then(d => {
            this.setState({
                language_list: d.languages
            })
        });
        AccountService.getLanguage().then(d => {
            console.log(d)
            this.setState({
                language: d
            })
        })
    }

    changeLanguage(object) {
        if (object.code === this.state.language.code) {
            return
        }
        if (object && document.documentElement.lang !== object.code) {
            AccountService.setLanguage(object).then(d => {
                // location.reload()
            })
        }
        const current = location.pathname;
        this.props.history.push("/");
        console.log('pushing props')
        setTimeout(() => {
            this.props.history.push(current);
        });
        document.documentElement.lang = object.code

    }

    render() {
        if (!this.state.language_list || !this.state.language) return <div style={{display: 'inline-block'}}>N/A</div>;
        return (
                <div>
                    <ListSelect default={this.state.language} filter={false}
                                object_list={this.state.language_list}
                                id_key={'code'}
                                str_key={'name'}
                                sort_key={'name'}
                                handleSelect={this.changeLanguage.bind(this)}/>
                </div>
        )
    }
}

export default withRouter(LanguageSelect)