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
            request_failed: false,
        };
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidMount() {
        this.mounted = true;
        console.log("GETTING DATA");
        PostService.getCompanies({is_active: 'True'}).then(d => {
            if (this.mounted) {
                if (typeof d !== Array) {
                    this.setState({
                        Post_data: []
                    })
                } else {
                    this.setState({
                        Post_data: d
                    });
                }
            }
        })
    }

    render() {
        if (!this.state.Post_data) return <div style={{display: 'inline-block'}}>N/A</div>;
        return (
            <div>
                <ListSelect filter={false} object_list={this.state.Post_data}
                            id_key={'name'}
                            str_key={'name'}
                            sort_key={'name'}
                            handleSelect={this.props.changePost}/>
            </div>
        )
    }
}

export default PostList
