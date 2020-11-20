import React from 'react';

import ListSelect from '../../../../../static/remote_components/react_components/components/ListSelect'
import PostService from '../PostService'

/**
 * Gets a list of companies registered to the user using the api,
 * on selection of a Post by the user it calls changePost for the parent, sending the Post object.
 */
class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_list: []
        }
    }

    componentDidMount() {
        this.mounted = true;
        console.log("GETTING DATA");
        PostService.getPosts({is_active: 'True'}).then(d => {
            this.setState({
                post_list: d
            })
        })
    }

    render() {
        return (
                <ListSelect filter={false} object_list={this.state.post_list}
                            id_key={'id'}
                            str_key={'title'}
                            sort_key={'id'}
                            handleSelect={this.props.handleSelect}/>
        )
    }
}

export default PostList
