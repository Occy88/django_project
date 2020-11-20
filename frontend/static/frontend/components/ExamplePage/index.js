import React from 'react'
import languages from "./lang.js";
import './style.scss';
import PostList from "../../../../../post_manager/static/company_manager/components/CompanyList";
import PostService from "../../../../../post_manager/static/company_manager/components/CompanyService";

let lang = languages[document.documentElement.lang];
/**
 * This module only takes care of registering a delivery and products for it in one go.
 * Once all fields are filled, first for is submitted to create a delivery, if successful
 * a second form is submitted to register all products. finally user is alerted of success or failure.
 */
export default class ExamplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example_state: props.example_state,
            post: null
        }
    }

    create(title) {
        PostService.getPostWIthImages
        PostService.registerPost()
        PostService.getCompanies({is_active:true}).then()
    }

    changePost(newpost) {
        this.setState({
            post: newpost
        })
    }

    render() {
        return (
                <div className={'ExamplePage'}>
                    <PostList handleSelect={this.changePost.bind(this)}/>
                    {lang.example_text}
                    SELECTED:
                    {this.state.post}
                    <input onChange={this.create.bind(this)}/>
                </div>
        )
    }
}

