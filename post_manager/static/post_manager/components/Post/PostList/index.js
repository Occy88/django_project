import React from 'react';
import GenericModelList
    from "../../../../../../static/remote_components/react_components/components/GenericBackendInterface/GenericModelList";
import PostApi from "../PostApi";

/**
 * Gets a list of companies registered to the user using the api,
 * on selection of a Post by the user it calls changePost for the parent, sending the Post object.
 */
const PostList = GenericModelList(PostApi, {is_active: 'True'}, 'title')


export default PostList
