import React from 'react'
import './style.scss'
// import { withRouter } from 'react-router-dom'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="container">
                    {//<img src={logo} alt="Logo" style={{height: "50px"}}></img>
                    }
                    <span className="pull-right">© OD 2019</span>

                </div>
            </div>
        )
    }
}

