import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function(props) {
  return (
    <div className="container">
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
          >
            &gt; some_company / know your client
          </Link>

          <a
            id="navbarBurger"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navBar"
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link
              to="/"
              className="navbar-item"
            >
              Home
            </Link>

            <Link
              to="/case-list"
              className="navbar-item"
            >
              Case list
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="control has-icons-right">
                <input
                  type="text"
                  className="input"
                  placeholder="Search case number"
                />
                <span className="icon is-small is-right">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </div>

            <div className="navbar-item">
              <div className="buttons">
                <Link
                  to="/settings"
                  className="button is-link is-light is-rounded"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
