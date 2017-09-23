import React from "react";

class footerAskguage extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="img/logos/logo.png" alt />
            </div>
            <div className="col-md-4">
              <p>
                <b>Quick Menu</b>
              </p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>Contact Us</li>
                    <li>Terms & Condtion</li>
                    <li>About US</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>Privacy Policy</li>
                    <li>Social Media</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <p>
                <b>Follow us</b>
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>
                <b>Subscribe</b>
              </p>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Email address"
              />
              <button type="button" className="btn btn-danger btn-lg">
                Subscrible
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footerAskguage;
