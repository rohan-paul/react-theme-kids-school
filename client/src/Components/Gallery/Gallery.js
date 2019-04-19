import React, { Component } from "react";
import "./style.css";
// import img_1 from "././images/img_1.jpg";

export class Gallery extends Component {
  render() {
    return (
      <div className="site-wrap">
        <div className="site-mobile-menu" />
        <header className="site-navbar py-3" role="banner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-6 col-xl-2" data-aos="fade-down">
                <h1 className="mb-0">
                  <a href="index.html" className="text-black h2 mb-0">
                    Photon
                  </a>
                </h1>
              </div>
              <div
                className="col-10 col-md-8 d-none d-xl-block"
                data-aos="fade-down"
              >
                <nav
                  className="site-navigation position-relative text-right text-lg-center"
                  role="navigation"
                >
                  <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="has-children">
                      <a href="single.html">Gallery</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Nature</a>
                        </li>
                        <li>
                          <a href="#">Portrait</a>
                        </li>
                        <li>
                          <a href="#">People</a>
                        </li>
                        <li>
                          <a href="#">Architecture</a>
                        </li>
                        <li>
                          <a href="#">Animals</a>
                        </li>
                        <li>
                          <a href="#">Sports</a>
                        </li>
                        <li>
                          <a href="#">Travel</a>
                        </li>
                        <li className="has-children">
                          <a href="#">Sub Menu</a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">Menu One</a>
                            </li>
                            <li>
                              <a href="#">Menu Two</a>
                            </li>
                            <li>
                              <a href="#">Menu Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-6 col-xl-2 text-right" data-aos="fade-down">
                <div className="d-none d-xl-inline-block">
                  <ul
                    className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
                    data-class="social"
                  >
                    <li>
                      <a href="#" className="pl-0 pr-3">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-youtube-play" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                  style={{ position: "relative", top: "3px" }}
                >
                  <a
                    href="#"
                    className="site-menu-toggle js-menu-toggle text-black"
                  >
                    <span className="icon-menu h3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid" data-aos="fade" data-aos-delay={500}>
          <div className="swiper-container images-carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="image-wrap">
                  <div className="image-info">
                    <h2 className="mb-3">Nature</h2>
                    <a
                      href="single.html"
                      className="btn btn-outline-white py-2 px-4"
                    >
                      More Photos
                    </a>
                  </div>
                  <img src="././images/img_1.jpg" alt="Image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-wrap">
                  <div className="image-info">
                    <h2 className="mb-3">Portrait</h2>
                    <a
                      href="single.html"
                      className="btn btn-outline-white py-2 px-4"
                    >
                      More Photos
                    </a>
                  </div>
                  <img src="././images/img_2.jpg" alt="Image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-wrap">
                  <div className="image-info">
                    <h2 className="mb-3">People</h2>
                    <a
                      href="single.html"
                      className="btn btn-outline-white py-2 px-4"
                    >
                      More Photos
                    </a>
                  </div>
                  <img src="./images/img_3.jpg" alt="Image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-wrap">
                  <div className="image-info">
                    <h2 className="mb-3">Architecture</h2>
                    <a
                      href="single.html"
                      className="btn btn-outline-white py-2 px-4"
                    >
                      More Photos
                    </a>
                  </div>
                  <img src="./images/img_4.jpg" alt="Image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-wrap">
                  <div className="image-info">
                    <h2 className="mb-3">Animals</h2>
                    <a
                      href="single.html"
                      className="btn btn-outline-white py-2 px-4"
                    >
                      More Photos
                    </a>
                  </div>
                  <img src="./images/img_5.jpg" alt="Image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-wrap">
                  <div className="image-info">
                    <h2 className="mb-3">Sports</h2>
                    <a
                      href="single.html"
                      className="btn btn-outline-white py-2 px-4"
                    >
                      More Photos
                    </a>
                  </div>
                  <img src="./images/img_6.jpg" alt="Image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-wrap">
                  <div className="image-info">
                    <h2 className="mb-3">Travel</h2>
                    <a
                      href="single.html"
                      className="btn btn-outline-white py-2 px-4"
                    >
                      More Photos
                    </a>
                  </div>
                  <img src="./images/img_7.jpg" alt="Image" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
            <div className="swiper-scrollbar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
