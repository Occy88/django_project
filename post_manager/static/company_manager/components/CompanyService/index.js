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
const Post_MANAGER_API_URL = '/post_manager/';

class PostService extends React.Component {
    /**
     *
     * @param filter_param_dict
     * @return {Promise<Response>}
     */
    static getCompanies(filter_param_dict) {
        return fetch(`${Post_MANAGER_API_URL}?${jQuery.param(filter_param_dict)}`, {
            method: 'GET',
        }).then(d =>{
            return d.json();
        })
    }

    /**
     * Registers Post provided the relevant fields
     * @param Post
     * @return {Promise<Response>}
     */
    static registerPost(Post) {
        return fetch(`${Post_MANAGER_API_URL}`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(Post)
        }).then(d => d.json())
    }

    /**
     * Updates fields of a given Post
     * @param updated_field_dict
     * @param Post_pk
     * @return {Promise<Response>}
     */
    static updatePost(updated_field_dict, Post_pk) {
        return fetch(`${Post_MANAGER_API_URL}${Post_pk}`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(Post)
        }).then(d => d.json())
    }


    /**
     * Register a list of users to a Post
     * @param user_dict_list
     * @param Post_pk
     * @return {Promise<Response>}
     */
    static addUsersToPost(user_dict_list, Post_pk) {
        return fetch(`${Post_MANAGER_API_URL}${Post_pk}/register_user`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(Post)
        }).then(d => d.json())
    }

}

export default PostService