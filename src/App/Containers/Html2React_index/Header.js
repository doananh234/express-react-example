import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div id="main-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#main-carousel"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#main-carousel" data-slide-to={1} />
          <li data-target="#main-carousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid"
              src="img/logos/bg-1.png"
              alt="First slide"
            />
            <div className="carousel-caption">
              <p>Looking to buy a House?</p>
              <h3>Home Buying made simple.</h3>
              <p>
                Let us know what you are looking for and we enable you to make
                faster, smarter and better informed decisions on service
                providers.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-danger btn-radius btn-lg"
                  >
                    GET STARTED
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-radius btn-lg"
                  >
                    LEAN MORE
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src="img/logos/bg-1.png"
              alt="First slide"
            />
            <div className="carousel-caption">
              <p>Looking to buy a House?</p>
              <h3>Home Buying made simple.</h3>
              <p>
                Let us know what you are looking for and we enable you to make
                faster, smarter and better informed decisions on service
                providers.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-danger btn-radius btn-lg"
                  >
                    GET STARTED
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-radius btn-lg"
                  >
                    LEAN MORE
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src="img/logos/bg-1.png"
              alt="First slide"
            />
            <div className="carousel-caption">
              <p>Looking to buy a House?</p>
              <h3>Home Buying made simple.</h3>
              <p>
                Let us know what you are looking for and we enable you to make
                faster, smarter and better informed decisions on service
                providers.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-danger btn-radius btn-lg"
                  >
                    GET STARTED
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-radius btn-lg"
                  >
                    LEAN MORE
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
