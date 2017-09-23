import React from "react";

class Services extends React.Component {
  render() {
    return (
      <section id="specific">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-main-heading">
                Looking for something specific
              </h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3">
              <p>Mortgage</p>
              <span className="mortgage-icon" />
              <p>
                <small className="text-muted">
                  <b>What Can I Afford?</b>
                </small>
              </p>
              <p className="text-muted description-content">
                <small>
                  {" "}
                  Are you looking to get a new mortgage, renew or refinance your
                  existing mortgage? Submit a request and based on your
                  situation, we will provide you access to mortgage insights and
                  connect you with the right Mortgage Agents or Advisors in your
                  area.
                </small>
              </p>
              <button type="button" className="btn btn-danger btn-lg">
                GET STARTED
              </button>{" "}
            </div>
            <div className="col-md-3">
              <p>Real Estate Agent</p>
              <span className="agent-icon" />
              <p>
                <small className="text-muted">
                  <b>Where Should I Buy?</b>
                </small>
              </p>
              <p className="text-muted description-content">
                <small>
                  Have you decided where and what to buy? We will connect you
                  with top Real Estate Agents in the area, for you to choose
                  from based on your preference while providing you access to
                  insights on preferred and recommend locations.
                </small>
              </p>
              <button type="button" className="btn btn-danger btn-lg">
                GET STARTED
              </button>
            </div>
            <div className="col-md-3">
              <p>Real Estate Lawyer</p>
              <span className="lawyer-icon" />
              <p>
                <small className="text-muted">
                  <b>Looking for a Real Estate Lawyer?</b>
                </small>
              </p>
              <p className="text-muted description-content">
                <small>
                  Discover top quality real estate legal services before
                  purchasing your home. To avoid bias opinions, you should not
                  rely on legal or real estate advice from the seller or the
                  agents of the property. A Real Estate Lawyer can facilitate
                  mortgage transactions and real estate administration.
                </small>
              </p>
              <button type="button" className="btn btn-danger btn-lg disabled">
                GET STARTED
              </button>{" "}
            </div>
            <div className="col-md-3">
              <p>Home Inspection</p>
              <span className="inspection-icon" />
              <p>
                <small className="text-muted">
                  <b>Is the property safe?</b>
                </small>
              </p>
              <p className="text-muted description-content">
                <small>
                  A home inspection is essential before you purchase your home,
                  it protect you and your family by getting the informaiton you
                  need to make an informed decision. The home inspector, can
                  help protect your investment.
                </small>
              </p>
              <button type="button" className="btn btn-danger btn-lg disabled">
                GET STARTED
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
