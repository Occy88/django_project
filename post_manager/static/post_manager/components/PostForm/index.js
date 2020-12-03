import React from 'react';
import {withRouter} from 'react-router-dom';
import PostService from '../PostService'
// import languages from "./lang.js";
import './style.scss';
import Post from "../Post";
import PostList from "../PostList";
import Button from "../../../../../static/remote_components/react_components/components/Button";


/**
 * Receives a post_for id and a post id,
 * if they are valid will generate a list with a filter
 * upon user selection of an item it will call: changeShipmentSite function
 * and will pass the selected ShipmentSite object to it.
 */
class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {post: this.props.post}
    }

    updatePostState(args) {
        console.log("========================")
        console.log(args)
        this.setState({
            post: {...this.state.post, ...args}
        })
    }


    handleResponse(data) {
        alert("Success: " + data.id + " : " + data.title);
        const current = location.pathname;
        this.props.history.push("/");
        setTimeout(() => {
            this.props.history.push(current);
        });
    }

    updatePost(update_args) {
        let post = {...this.state.post, ...update_args}
        console.log(this.state.post)
        this.state.post.id !== null ?
                PostService.updatePost(post).then(
                        d => {
                            this.handleResponse(d)
                        }
                ) : PostService.createPost(post).then(d => {
                    this.handleResponse(d)
                })
    }

    restorePost() {
        this.updatePost({is_active: true})
    }

    deletePost() {
        this.updatePost({is_active: false})
    }


    registerPost() {
        PostService.registerPost(this.state.post).then(
                d => {
                    this.handleResponse(d)
                }
        )
    }

    render() {

        return (
                <div className={'PostForm'}>
                    <PostList handleSelect={this.updatePostState.bind(this)}/>,
                    <Post onChange={this.updatePostState.bind(this)}
                          post={this.state.post} modify={true}/>,

                    <Button text={'Submit'} onClick={() => this.updatePost({})}/>
                </div>

        )
    }
}

export default withRouter(PostForm)