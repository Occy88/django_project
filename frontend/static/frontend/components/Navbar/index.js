import React from 'react';
import "./style.scss"

/**
 * A Basic Navbar. Accepts a logo and link.
 * @param props
 */
class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={"navbar"} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item logo-img" href={this.props.logo_link}>
                        <img className={`logo-img`} src={this.props.logo} alt={'Logo'}/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasic">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div id="navbarBasic" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href={'/'}>
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>

                        <a className="navbar-item">
                            More
                        </a>

                    </div>
                </div>
            </nav>
        )
    }

}

export default Navbar