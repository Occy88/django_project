import React from 'react';
import GenericApi
    from "../../../../../../static/remote_components/react_components/components/GenericBackendInterface/GenericApi";
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
const PostApi = new GenericApi('/post_manager/')
export default PostApi