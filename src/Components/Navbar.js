import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './index.css';
export class Navbar extends Component {
  static propTypes = {};
// business entertainment general health science sports technology
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" to="/" textdecoration="none">
              Newsify
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active check" aria-current="page" to="/" onClick={() => window.location.href="/general"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business" onClick={() => window.location.href="/business"}>
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" onClick={() => window.location.href="/technology"}>
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" onClick={() => window.location.href="/sports"}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" onClick={() => window.location.href="/entertainment"}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/health" onClick={() => window.location.href="/health"}>
                    Health 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link "  to="/science" onClick={() => window.location.href="/science"}>
                    Science 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
