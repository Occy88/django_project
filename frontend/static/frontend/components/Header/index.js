import React from 'react'
import './style.scss'
import {Navbar, Nav} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import languages from "./lang.js"
import LanguageSelect from "../../../../../accounts/static/accounts/components/Languages";
import AccountService from "../../../../../accounts/static/accounts/components/AccountService";
import hamburger_svg from '../../../../../static/img/Hamburger_icon.svg'
import hamburger_active_svg from '../../../../../static/img/Hamburger_icon_active.png'
import settings_svg from '../../../../../static/img/settings1.png'
import settings_active_svg from '../../../../../static/img/settings1_active.png'
import CompanyList from "../../../../../company_manager/static/company_manager/components/CompanyList";
import Dropdown from "../../../../../static/remote_components/react_components/components/Dropdown";

let lang = languages[document.documentElement.lang];

const app_url_prefix = "/";

//THIS FILE REQUIRES A STATIC_URL to be defined in the base html file.
if (STATIC_URL === undefined) {
    STATIC_URL = "";
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, height: 0,
            links: [
                {'url': 'dashboard', 'text': 'Dashboard'},
                {'url': 'example', 'text': 'Example Page'},

            ]
        };
        console.log(this.state.company);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    redirect(url) {
        this.props.history.push(url);

    }

    selectCompany(object) {

        if (this.state.company === null || object.id !== this.state.company.id) {

            AccountService.setCompany(object).then((d) => {
                if (this.state.company === null || object.id !== this.state.company.id) {
                    location.reload()
                }
            });
        }
    }

    render() {
        let company_logo =
            <div className="nav-brand ">
                <Link to={'/'}>
                    <img
                        src={this.state.company && this.state.company.logo ? STATIC_URL + this.state.company.logo : "https://www.designevo.com/res/templates/thumb_small/blue-bar-graph-and-stock.png"}
                        alt="Logo"
                        style={{height: '50px'}}/>
                </Link>
            </div>;

        let settings =
            <div className="nav-settings">
                <div className={'nav-item'}>
                    <Dropdown
                        button_fill_active={<img style={{width: '30px'}}
                                                 src={STATIC_URL + settings_active_svg}/>}
                        button_fill={<img style={{width: '30px'}}
                                          src={STATIC_URL + settings_svg}/>}
                        item_list={[
                            <div className='nav-item-content'>
                                <LanguageSelect/>
                            </div>,
                            <div className='nav-item-content'>
                                <a style={{
                                    'fontWeight': 'bold',
                                    'color': 'rgba(0,178,177,0.7)'
                                }}
                                   href={'/accounts/logout/'}>{lang.logout}</a>
                            </div>
                        ]
                        }/>
                </div>
            </div>;
        let url_list = this.state.links;
        let link_list = url_list.map((obj, index) =>
            <div key={index}
                 className={(location.pathname === app_url_prefix + obj.url) ? "nav-link active" : "nav-link"}
                 onClick={() => this.redirect(app_url_prefix + obj.url)}>
                {obj.text}
            </div>);

        let custom_nav =
            <div className={'nav-links'}>
                {this.state.width < 200 * (this.state.links.length + 2) ?
                    <div className={'nav-item'}>

                        <Dropdown
                            button_fill_active={<img style={{width: '30px'}} src={STATIC_URL + hamburger_active_svg}/>}
                            button_fill={<img style={{width: '30px'}} src={STATIC_URL + hamburger_svg}/>}
                            item_list={link_list}/></div>
                    : link_list
                }
            </div>
        ;


        return (
            <div className={'Header'}>
                <div className={'nav-bar'}>
                    {company_logo}
                    {custom_nav}
                    {settings}
                </div>
            </div>


        )
    }

}

export default withRouter(Header);