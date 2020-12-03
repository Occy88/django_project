import React from 'react';
import {withRouter} from 'react-router-dom';
import PostService from '../PostApi'
// import languages from "./lang.js";
import './style.scss';
import GenericForm from "../../Post";
import PostApi from "../PostApi";
import GenericModelForm
    from "../../../../../../static/remote_components/react_components/components/GenericBackendInterface/GenericModelForm/";

const post_types = {'title': 'text', 'content': 'text', source: 'url', is_active: 'boolean'}
const PostForm = GenericModelForm(post_types, PostApi)
export default PostForm