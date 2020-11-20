import React from 'react';
import jQuery from 'jquery';
import csrftoken from '../../../../../static/js/csrf.js'
/**
 * Post Service,
 * Manage Post objects through api.
 * @param props
 * @return {*}t
 * @constructor
 */

/**
 *  Manages the product manager api.
 */
const POST_MANAGER_API_URL = '/post_manager/';

class PostService extends React.Component {
    /**
     *
     * @param filter_param_dict
     * @return {Promise<Response>}
     */
    static getPosts(filter_param_dict) {
        return fetch(`${POST_MANAGER_API_URL}?${jQuery.param(filter_param_dict)}`, {
            method: 'GET',
        }).then(d => {
            return d.json();
        })
    }

    /**
     * creates Post provided the relevant fields
     * @param post
     * @return {Promise<Response>}
     */
    static createPost(post) {
        return fetch(`${POST_MANAGER_API_URL}`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(post)
        }).then(d => d.json())
    }

    /**
     *
     * @param post : dict representing post
     * @return {Promise<any>}
     */
    static updatePost(post) {
        return fetch(`${POST_MANAGER_API_URL}${post['id']}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(post)
        }).then(d => d.json())
    }

}

export default PostService