import React from 'react';
// import languages from "./lang.js";
import './style.scss';

let lang = languages[document.documentElement.lang];

/**
 * Views a post only
 */
export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    onTitleChange(event) {
        this.props.onChange({'title': event.target.value})
    }

    onContentChange(event) {
        this.props.onChange({'content': event.target.value})
    }

    onSourceChange(event) {
        this.props.onChange({'source': event.target.value})
    }

    render() {
        return (

                <div className={'Post'} aria-readonly={!this.props.modify}>
                    <textarea readOnly={!this.props.modify}
                              onChange={this.onTitleChange.bind(this)}
                              className={'title'}
                              value={this.props.post ? this.props.post.title : 'Title'}

                    />
                    <textarea readOnly={!this.props.modify}
                              onChange={this.onContentChange.bind(this)}
                              className={'content'}
                              value={this.props.post ? this.props.post.content : 'content'}
                    />

                    <textarea readOnly={!this.props.modify}
                              onChange={this.onSourceChange.bind(this)}
                              className={'source'}
                              value={this.props.post ? this.props.post.source : 'source'}

                    />
                </div>
        )
    }
}

