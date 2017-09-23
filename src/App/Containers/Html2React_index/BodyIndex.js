import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";
import PortfolioGrid from "./PortfolioGrid";
import Blog_slide from "./Blog_slide";
import Bg_light from "./Bg_light";
import Footer from "./Footer";

class BodyIndex extends React.Component {
  render() {
    return (
      <div>
        {}
        <Navbar />
        {}
        <Header />
        {}
        <Services />
        {}
        <PortfolioGrid />
        <section id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-main-heading">BLOG</h2>
              </div>
            </div>
            <Blog_slide />
            <div className="col-md-12 text-center">
              <button type="button" className="btn btn-danger mt-5 btn-lg">
                More
              </button>
            </div>
          </div>
        </section>
        <Bg_light />
        <div className="container" />
        {}
        <Footer />
        {}
        {}
        {}
      </div>
    );
  }
}

export default BodyIndex;
