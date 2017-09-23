import React from "react";

class Bg_light extends React.Component {
  render() {
    return (
      <section className="bg-light">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="d-block"
                      src="img/building.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="information ">
                      <h3>Mortgage Calculator</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts
                      </p>
                      <a className="lean-more" href="#">
                        Learn more{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="d-block"
                      src="img/building.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="information ">
                      <h3>Mortgage Calculator</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts
                      </p>
                      <a className="lean-more" href="#">
                        Learn more{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="d-block"
                      src="img/building.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="information ">
                      <h3>Mortgage Calculator</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts
                      </p>
                      <a className="lean-more" href="#">
                        Learn more{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left fa-5x text-muted" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right fa-5x text-muted" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Bg_light;
