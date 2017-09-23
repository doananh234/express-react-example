import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src="img/logos/logo.png" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  How it work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Service Provider
                </a>
              </li>
              <li className="nav-item">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">
                      Jane Smith
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-bell-o" aria-hidden="true" />
                    <span className="badge">5</span>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
