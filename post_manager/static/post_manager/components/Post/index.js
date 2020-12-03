import React from 'react';
// import languages from "./lang.js";
import './style.scss';
import PostList from "./PostList";
import PostForm from "./PostForm";


/**
 * Views a post only
 */
export default class Post extends React.Component {
    /**
     * props must set the data once, once the data is set
     * there are the following options
     * @param:props.edit: true|false -> form will be updated to api.
     * @param:props.data: {key:val, } -> if data contains id, we assume it is "modify" on edit. else "create"
     * @param:props.submit_button: true|false -> form will contain a submit button if modify state active, otherwise automatic submission
     * @param:props.throttle: 5000 -> form will submit after n time of user inactivity (if submit button is false)
     * the user may not change the form. this is to be set by the props (modify=true|false) default is false.
     * @param props
     */
    constructor(props) {
        super(props)
        this.state = ({
            data: null
        })
    }

    setData(data) {
        console.log("SETTING STATE")
        this.setState({
            data: data
        })
        console.log('calling set data on mounted component')
        this.state.setData ? this.state.setData(data) : null
    }

    render() {
        console.log("GENERATING GENERIC TEMPLATED")
        return (
                <div>
                    <PostList handleSelect={this.setData.bind(this)}/>
                    <PostForm setData={(func) => this.setState({setData: func})} timeout={5000} read_only={false}
                              data={this.state.data}/>
                </div>
        )
    }
}
// [ item, item, item ]
// form:
// item
// item
// item
// update, delete, create
