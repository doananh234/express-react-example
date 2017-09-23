import React from "react";

class PortfolioGrid extends React.Component {
  render() {
    return (
      <section className="bg-light" id="listing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-main-heading">Real Estate Listings</h2>
            </div>
          </div>
          <div
            id="product-slide"
            className="carousel slide"
            data-ride="carousel"
            data-interval={9000}
          >
            <div
              className="carousel-inner row w-100 mx-auto text-center"
              role="listbox"
            >
              <div className="carousel-item col-md-3 active">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
              <div className="carousel-item col-md-3">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
              <div className="carousel-item col-md-3">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
              <div className="carousel-item col-md-3">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
              <div className="carousel-item col-md-3">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
              <div className="carousel-item col-md-3">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
              <div className="carousel-item col-md-3">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
              <div className="carousel-item col-md-3">
                <p className="item-header">7481 MITCH OWENS ROAD</p>
                <p className="text-muted">
                  <small>Ottawa, ON</small>
                </p>
                <img src="../img/item.png" alt />
                <h4 className="text-muted">$69,000</h4>
                <p className="text-muted">3 Bedroom, Townhome</p>
                <button type="button" className="btn btn-danger btn-radius">
                  Get more info
                </button>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#product-slide"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left fa-5x text-muted" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next text-faded"
              href="#product-slide"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right fa-5x text-muted" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioGrid;
