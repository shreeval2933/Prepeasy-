import React from "react";
import { useState } from "react";
import "../css/tooplate-waso-strategy.css";
import "../css/bootstrap-icons.css";
import { Link } from "react-router-dom";

// import './css/bootstrap.min.css'
// import './css/magnific-popup.css'
import i1 from "../images/slide/christina-wocintechchat-com-NDoVgcS_lZM-unsplash.jpg";
import i3 from "../images/slide/jason-goodman-0K7GgiA8lVE-unsplash.jpg";
import i4 from "../images/services/young-entrepreneurs-mature-investor-watching-presentation-discussing-project.jpg";
import i5 from "../images/services/startup-leader-drawing-flowchart-board-discussing-project.jpg";
import i6 from "../images/services/portrait-smiling-african-american-young-woman-holding-movie-production-blackboard.jpg";
import i7 from "../images/projects/pj-gal-szabo-CIXXIWxxec4-unsplash.jpg";
import i8 from "../images/projects/team-fredi-FN3vmVee2sI-unsplash.jpg";
import i9 from "../images/projects/vmsign-x9yGe7wnvKQ-unsplash.jpg";
import i10 from "../images/projects/evangeline-shaw-nwLTVwb7DbU-unsplash.jpg";
import i11 from "../images/projects/tangerine-newt-AKH4OVEmILc-unsplash.jpg";
import i12 from "../images/services/kl.jpg";

var data = require("./MOCK_DATA.json");

const Homepage = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-5 col-7">
              <p className="text-black mb-0" style={{ width: "300px" }}>
                <i className="bi-clock site-header-icon me-2" />
                Announcement: This is Saturdays
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-12 ms-auto">
              <ul className="social-icon">
                <li>
                  <a
                    href="https://facebook.com/tooplate"
                    className="social-icon-link bi-facebook"
                  />
                </li>
                <li>
                  <a
                    href="https://pinterest.com/tooplate"
                    className="social-icon-link bi-pinterest"
                  />
                </li>
                <li>
                  <a
                    href="https://twitter.com/minthu"
                    className="social-icon-link bi-twitter"
                  />
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/tooplate"
                    className="social-icon-link bi-youtube"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg bg-white shadow-lg">
        <div className="container">
          <a href="#" className="navbar-brand">
            Prep <span className="text-danger">Easy</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ "margin-right": "16px" }}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  <small className="small-title">
                    <strong className="text-warning"></strong>
                  </small>{" "}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  <small className="small-title">
                    <strong className="text-warning"></strong>
                  </small>{" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  <small className="small-title">
                    <strong className="text-warning"></strong>
                  </small>{" "}
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  <small className="small-title">
                    <strong className="text-warning"></strong>
                  </small>{" "}
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  <small className="small-title">
                    <strong className="text-warning"></strong>
                  </small>{" "}
                  Contact
                </a>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </nav>
      <main>
        <section className="hero">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div
                id="carouselExampleCaptions"
                className="carousel carousel-fade hero-carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container position-relative h-100">
                      <div
                        className="carousel-caption d-flex flex-column justify-content-center"
                        style={{ "margin-left": "58px" }}
                      >
                        {/* //search BOx 
                        <div
                          style={{
                            "justify-content": " center",
                            "align-items": "center",
                            display: "flex",
                            "margin-left": "155px",
                            "margin-bottom": "0px",
                            "padding-top": "40px",
                          }}
                        >
                          <div className="wrap">
                            <div className="search search-input">
                              <a href="" target="_blank" hidden></a>
                              <input
                                type="text"
                                className="searchTerm"
                                value={value}
                                onChange={onChange}
                                placeholder="  What are you looking for?"
                              />
                              <button type="submit" className="searchButton">
                                Search
                              </button>
                            </div>
                            <div className="dropdown ">
                              {data
                                .filter((item) => {
                                  const searchTerm = value.toLowerCase();
                                  const fullName = item.full_name.toLowerCase();

                                  return (
                                    searchTerm &&
                                    fullName.startsWith(searchTerm) &&
                                    fullName !== searchTerm
                                  );
                                })
                                .slice(0, 8)
                                .map((item) => (
                                  <div
                                    onClick={() => onSearch(item.full_name)}
                                    className="dropdown-rowh my-2 "
                                    key={item.full_name}
                                  >
                                    {item.full_name}
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>*/}
                        <h1 style={{ "margin-top": "-50px" }}>
                          THE{" "}
                          <span className="text-warning">SUGGETION MASTER</span>{" "}
                          for you !!!
                        </h1>
                      </div>
                    </div>
                    <div className="carousel-image-wrap">
                      <img
                        src={i1}
                        className="img-fluid carousel-image"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <div
            className="floating-container"
            style={{ "margin-right": "0px", "z-index": "1" }}
          >
            <div className="floating-button" style={{ "margin-right": "15px" }}>
              +
            </div>
            <div className="element-container">
              <span className="float-element" style={{ cursor: "pointer" }}>
                <Link to={"/utube"}>
                  <i className="material-icons">smart_display</i>
                </Link>
              </span>
              <span className="float-element" style={{ cursor: "pointer" }}>
                <Link to={"/dropzone"}>
                  <i className="material-icons">edit_square</i>
                </Link>
              </span>
              <span className="float-element" style={{ cursor: "pointer" }}>
              <Link to={"/dropzone"}>
                  <i className="material-icons">assignment_add</i>
                </Link>
              </span>
            </div>
          </div>
        </>*/}
        <section
          className="about section-padding"
          style={{ "padding-bottom": "100px" }}
          id="section_2"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 mb-lg-0 mt-8">
                <div
                  className="about-image-wrap"
                  style={{
                    height: "775px",
                    "margin-top": "45px",
                    "margin-bottom": "20px",
                  }}
                >
                  <img src={i12} className="img-fluid about-image" alt="img" />
                  <div className="about-image-info">
                    <h4 className="text-white">Harsh Mavani, Founder</h4>
                    <p className="text-white mb-0">
                      You can freely use Prep Easy for your prepartion. Thank
                      you for visiting Prep Easy.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-12 d-flex flex-column mt-8"
                style={{ "margin-top": "45px" }}
              >
                <div className="about-thumb bg-white shadow-lg">
                  <div className="about-info">
                    <small>
                      <h2>About</h2>
                    </small>
                    <h2 className="mb-3">Suggestion Master</h2>
                    <h5 className="mb-3" style={{ "padding-top": "10px" }}>
                      Helping students since 2020
                    </h5>
                    <p>
                      Prep Easy is easy tool for students to find relevent study
                      material on topic in three varous forms video, pdf and
                      hanndwritten notes. Prep Easy is blessing for many
                      students.
                    </p>
                    <p>
                      Students can reduce their preparation time by finding best
                      study material on topic with just few clicks. Thank you.
                    </p>
                  </div>
                </div>
                <div className="row h-10">
                  <div className="col-lg-6 col-6">
                    <div className="about-thumb d-flex flex-column justify-content-center bg-danger mb-lg-0 h-10">
                      <div className="about-info">
                        <h5 className="text-white m-8">
                          We're growing free educational platfrom
                        </h5>
                        <button
                          className="custom-btn btn custom-bg-primary"
                          href="#section_3"
                          style={{
                            width: "fit-content",
                            height: "fit-content",
                            "margin-left": "35px",
                            "margin-bottom": "15px",
                            "margin-top": "35px",
                          }}
                        >
                          Join us
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="about-thumb d-flex flex-column justify-content-center bg-warning mb-lg-0 h-10">
                      <div className="about-info">
                        <h5 className="text-white mb-4">
                          Is it complicated to use Prep Easy?
                        </h5>
                        <p className="text-white mb-0">
                          Just enter your keyword & get best containt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="services section-padding"
          style={{ padding: "100px" }}
          id="section_3"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 text-center mx-auto mb-5">
                <h2>How can we help you?</h2>
              </div>
              <div className="col-lg-6 col-12">
                <nav>
                  <div
                    className="nav nav-tabs flex-column"
                    id="nav-tab"
                    role="tablist"
                    style={{ margin: "0px" }}
                  >
                    <button
                      className="nav-link active"
                      id="nav-business-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-business"
                      type="button"
                      role="tab"
                      aria-controls="nav-business"
                      aria-selected="true"
                      style={{
                        "margin-left": "25px",
                        "padding-bottom": "48px",
                      }}
                    >
                      Business Consulting
                    </button>
                    <button
                      className="nav-link"
                      id="nav-strategy-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-strategy"
                      type="button"
                      role="tab"
                      aria-controls="nav-strategy"
                      aria-selected="false"
                      style={{ margin: "25px", "padding-bottom": "48px" }}
                    >
                      Strategy Planning
                    </button>
                    <button
                      className="nav-link"
                      id="nav-video-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-video"
                      type="button"
                      role="tab"
                      aria-controls="nav-video"
                      aria-selected="false"
                      style={{ margin: "25px", "padding-bottom": "48px" }}
                    >
                      Video Content
                    </button>
                  </div>
                </nav>
              </div>
              <div className="col-lg-6 col-12">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-business"
                    role="tabpanel"
                    aria-labelledby="nav-intro-tab"
                  >
                    <img src={i4} className="img-fluid" alt="img" />
                    <h5 className="mt-4 mb-2">
                      Introduction to Business Consulting
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut dolore
                    </p>
                    <ul>
                      <li>Helping small businesses</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Business Strategy and Management</li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="nav-strategy"
                    role="tabpanel"
                    aria-labelledby="nav-strategy-tab"
                  >
                    <img src={i5} className="img-fluid" alt="img" />
                    <h5 className="mt-4 mb-2">Strategy Planning</h5>
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dolore
                        </p>
                      </div>
                      <div className="col-lg-6 col-12">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dolore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="nav-video"
                    role="tabpanel"
                    aria-labelledby="nav-video-tab"
                  >
                    <img src={i6} className="img-fluid" alt="img" />
                    <h5 className="mt-4 mb-2">Video Content</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut dolore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="projects section-padding pb-0"
          style={{ padding: "100px" }}
          id="section_4"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 text-center mx-auto mb-5">
                <h2>Brands we've crafted so far</h2>
              </div>
              <div className="col-lg-4 col-12">
                <div className="projects-thumb projects-thumb-small">
                  <a href="project-detail.html">
                    <img
                      src={i7}
                      className="img-fluid projects-image"
                      alt="img"
                    />
                    <div className="projects-info">
                      <div className="projects-title-wrap">
                        <small className="projects-small-title">Business</small>
                        <h2 className="projects-title">MCL Group</h2>
                      </div>
                      <div className="projects-btn-wrap mt-4">
                        <span className="custom-btn btn">
                          <i className="bi-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="projects-thumb projects-thumb-small">
                  <a href="project-detail.html">
                    <img
                      src={i8}
                      className="img-fluid projects-image"
                      alt="img"
                    />
                    <div className="projects-info">
                      <div className="projects-title-wrap">
                        <small className="projects-small-title">
                          Strategy Planning
                        </small>
                        <h2 className="projects-title">Fredi</h2>
                      </div>
                      <div className="projects-btn-wrap mt-4">
                        <span
                          className="custom-btn btn"
                          href="project-detail.html"
                        >
                          <i className="bi-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="projects-thumb projects-thumb-small">
                  <a href="project-detail.html">
                    <img
                      src={i9}
                      className="img-fluid projects-image"
                      alt="img"
                    />
                    <div className="projects-info">
                      <div className="projects-title-wrap">
                        <small className="projects-small-title">
                          Video Content
                        </small>
                        <h2 className="projects-title">Banana</h2>
                      </div>
                      <div className="projects-btn-wrap mt-4">
                        <span
                          className="custom-btn btn"
                          href="project-detail.html"
                        >
                          <i className="bi-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-12">
                <div className="projects-thumb projects-thumb-large">
                  <a href="project-detail.html">
                    <img
                      src={i10}
                      className="img-fluid projects-image"
                      alt=""
                    />
                    <div className="projects-info">
                      <div className="projects-title-wrap">
                        <small className="projects-small-title">
                          Video Content
                        </small>
                        <h2 className="projects-title">Conference</h2>
                      </div>
                      <div className="projects-btn-wrap mt-4">
                        <span
                          className="custom-btn btn"
                          href="project-detail.html"
                        >
                          <i className="bi-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="projects-thumb projects-thumb-small">
                  <a href="project-detail.html">
                    <img
                      src={i11}
                      className="img-fluid projects-image"
                      alt=""
                    />
                    <div className="projects-info">
                      <div className="projects-title-wrap">
                        <small className="projects-small-title">Business</small>
                        <h2 className="projects-title">Maldon</h2>
                      </div>
                      <div className="projects-btn-wrap mt-4">
                        <span
                          className="custom-btn btn"
                          href="project-detail.html"
                        >
                          <i className="bi-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact" id="section_5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f9c10b"
              fillOpacity={1}
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <div className="contact-container-wrap">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 col-12"
                  style={{ "padding-top": "35px" }}
                >
                  <form
                    className="custom-form contact-form"
                    action=""
                    method="post"
                    role="form"
                  >
                    <h2 className="mb-5">Say Hi to us</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="your@company.com"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control"
                          rows={7}
                          id="message"
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                        <button
                          type="submit"
                          className="form-control"
                          style={{ "padding-bottom": "36px" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 col-12">
                  <div
                    className="contact-thumb"
                    style={{ "padding-top": "135px" }}
                  >
                    <div className="contact-info bg-white shadow-lg">
                      <h5 className="mb-4">
                        1340 Atwater St, Detroit, MI 48207
                      </h5>
                      <h4 className="mb-2">
                        <a href="tel: 240-480-9600">
                          <i className="bi-telephone contact-icon me-2" />
                          240-480-9600
                        </a>
                      </h4>
                      <h5>
                        <a
                          href="mailto:info@company.com"
                          className="footer-link"
                        >
                          <i className="bi-envelope-fill contact-icon me-2" />
                          info@company.com
                        </a>
                      </h5>
                      {/* Copy "embed a map" HTML code from any point on Google Maps -> Share Link  */}
                      <iframe
                        className="google-map mt-4"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4063.103580426464!2d-83.0264337484065!3d42.33402597908653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cce05ddf4f1%3A0xcc0559eb3fda00c9!2sDetroit%20Riverwalk%2C%20Detroit%2C%20MI!5e1!3m2!1sen!2sus!4v1657814406289!5m2!1sen!2sus"
                        width="100%"
                        height={300}
                        allowFullScreen=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div style={{ justifyContent: "center" }}>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div style={{ marginLeft: "435px" }}>
                <div className="site-footer-wrap d-flex align-items-center">
                  <ul className="social-icon">
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://facebook.com/tooplate"
                        className="social-icon-link bi-facebook"
                      />
                    </li>
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://pinterest.com/tooplate"
                        className="social-icon-link bi-pinterest"
                      />
                    </li>
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://twitter.com/minthu"
                        className="social-icon-link bi-twitter"
                      />
                    </li>
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://www.youtube.com/tooplate"
                        className="social-icon-link bi-youtube"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  paddingTop: "20px",
                }}
              >
                <p className="copyright-text mb-0 me-4">
                  Copyright © 2023 PrepEasy
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Homepage;

{
  /*
<footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="site-footer-wrap d-flex align-items-center">
                <p className="copyright-text mb-0 me-4">
                  Copyright © 2036 Waso Strategy Co., Ltd.
                </p>
                <ul className="social-icon">
                  <li>
                    <a
                      href="https://facebook.com/tooplate"
                      className="social-icon-link bi-facebook"
                    />
                  </li>
                  <li>
                    <a
                      href="https://pinterest.com/tooplate"
                      className="social-icon-link bi-pinterest"
                    />
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/minthu"
                      className="social-icon-link bi-twitter"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/tooplate"
                      className="social-icon-link bi-youtube"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
 */
}
