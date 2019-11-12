import React from 'react';
import './style.scss'
import languages from "./lang.js"

let lang = languages[document.documentElement.lang];

/**
 *  takes a list of objects which have an str field and an id
 *  displays the str of each object,
 *  on selection returns the object
 * list it will return The id of the object.
 */
class ListSelect extends React.Component {
    /**
     * object_list: [ {str:'display string',sort:'var by which to sort', id:'id of object',other_keys...}]
     * Props should send api_url (url to get objects from)
     * @param props : object_list, handleSelect (function)
     */
    constructor(props) {
        super(props);
        this.reverse = props.reverse;
        let temp_list = [...props.object_list];
        temp_list = ListSelect.sortList(temp_list);
        if (this.reverse) {
            temp_list.reverse()
        }
        if (props.default) {
            temp_list = ListSelect.setDefault(props.default, temp_list);
        }


        this.state = {
            object_list: props.object_list,
            temp_list: temp_list,
            selected_option: 0
        };
        this.options = React.createRef();
        this.filterList = this.filterList.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        //    set the first value if there is one...
        //  sort object list into alphabetical and then if there is a default, find it in the list via id and set it as the first item...

    }

    /**
     * Check the length, compare each item's id (we expect and id and an str), return true
     * @param arr1
     * @param arr2
     */
    static test_array_equal(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = arr1.length; i--;) {
            if (arr1[i].id !== arr2[i].id)
                return false;
        }

        return true;
    }

    componentDidMount() {
        //select the first item if there is one.

        this.state.temp_list[0] ? this.props.handleSelect(this.state.temp_list[0]) : this.props.handleSelect(null)

    }

    /**
     * Parent updates with new list of objects
     * @param props : object_list
     */
    componentWillReceiveProps(props) {
        //pre process the props (make sure they go through sorting and adding default (as in the constructor)
        let data = props.object_list;

        if (props.select_object) {
            let index = ListSelect.getIndex(props.select_object, this.state.temp_list);
            if (index !== this.state.selected_option) {
                this.handleSelect(index);
            }

        }

        if ("object_list" in props && !ListSelect.test_array_equal(data, this.state.object_list)) {
            let temp_list = ListSelect.sortList([...data]);
            if (this.reverse) {
                temp_list.reverse();
            }
            this.setState({
                object_list: data,
                temp_list: temp_list,
            });
            temp_list[0] ? this.props.handleSelect(temp_list[0]) : this.props.handleSelect(null);

        }
    }

    static getIndex(object, list) {
        let index = 0;
        for (var i = 1; i < list.length; i += 1) {
            if (list[i].id === object.id) {
                index = i
            }
        }
        return index
    }

    /**
     * If there is a default set it
     */
    static setDefault(object, list) {
        //  find and remove it from the current list
        let id_pop = ListSelect.getIndex(object, list);

        list.unshift(object);
        list.splice(id_pop + 1, 1);
        return list;

        //    set it as the first element in the list
    }

    /**
     * Function to sort alphabetically an array of objects by some specific key.
     *
     * @param {String} property Key of the object to sort.
     */
    static dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a, b) {
            let c = +a[property];
            let d = +b[property];
            if (c && d) {
                return sortOrder === -1 ? c < d ? 1 : -1 : d < c ? 1 : -1;
            }
            return sortOrder === -1 ? b[property] > a[property] ? 1 : -1 : a[property] > b[property] ? 1 : -1;

        }
    }

    /**
     * sort the list into alphabetical by the str attribute
     */
    static sortList(list) {
        list.sort(ListSelect.dynamicSort("sort"));
        return list;
    }

    /**
     * Filter the object list from the filter input
     * send the first item in the list as the selected item.
     * if there is nothing send null
     * @param event
     */
    filterList(event) {
        let all_data = this.state.object_list.filter(function (item) {
            return item.str.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        all_data = ListSelect.sortList(all_data);
        if (this.reverse) {
            all_data.reverse();
        }
        this.setState({temp_list: all_data});

        if (all_data[0]) {
            this.props.handleSelect(all_data[0]);
            this.setState({
                selected_option: 0
            })
        } else {
            this.props.handleSelect(null);
        }

    }


    handleSelect(index) {
        this.setState({
            selected_option: index
        });
        this.props.handleSelect(this.state.temp_list[index]);
    }

    /**
     * Render the list witall_datah an on click to send the id to the parent,
     * and the filter event.
     * @return {*}
     */
    render() {
        if (!this.state.temp_list) return <div style={{display: 'inline-block'}}>N/A</div>;
        let select =
            <select value={this.state.selected_option} ref={this.options}
                    onChange={(event) => this.handleSelect(event.target.value)}>
                {
                    this.state.temp_list.map((item, index) => <option value={index}
                                                                      key={item.id}> {item.str}</option>)
                }
            </select>;

        let filter = <input type="text" placeholder={lang.filter}
                            onChange={this.filterList}/>;
        if (this.props.filter === undefined || this.props.filter === true) {
            return (
                <div className={'ListSelect'}>
                    {filter}
                    {select}
                </div>
            )
        } else {
            return (
                <div className={'ListSelect'}>
                    {select}
                </div>
            )
        }
    }
}

export default ListSelect