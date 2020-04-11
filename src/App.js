import React, { Component } from "react";
import "./App.scss";
import imageLogo from "./img/logo-white.png";
import nat1 from "./img/nat-1-large.jpg";
import nat2 from "./img/nat-2-large.jpg";
import nat3 from "./img/nat-3-large.jpg";
import nat8 from "./img/nat-8.jpg";
import nat9 from "./img/nat-9.jpg";
import vid1 from "./Videos/video.mp4";
import vid2 from "./Videos/video.webm";
import logoGreen from "./img/logo-green-2x.png";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <div className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>About natours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>Your benefits
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>Popular tours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>Stories
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>Book now
                </a>
              </li>
            </ul>
          </div>
        </div>
        <header className="header">
          <div className="header__logo-box">
            <img src={imageLogo} alt="Logo" className="header__logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors</span>
              <span className="heading-primary--sub">
                {" "}
                is where life happens
              </span>
            </h1>
            <a href="#section-tours" className="btn btn--white btn--animated">
              Discover our tours
            </a>
          </div>
        </header>
        <div>
          <div className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Exciting tours for adventurous people
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-terciary u-margin-bottom-small">
                  You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure.
                </p>
                <h3 className="heading-terciary u-margin-bottom-small">
                  Live adventures like you never have before
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <a href="#" className="btn-text">
                  Learn more &rarr;
                </a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={nat1}
                    alt="Pic 1"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src={nat2}
                    alt="Pic 2"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={nat3}
                    alt="Pic 3"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world"></i>
                  <h3 className="heading-terciary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass"></i>
                  <h3 className="heading-terciary u-margin-bottom-small">
                    Meet nature
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map"></i>
                  <h3 className="heading-terciary u-margin-bottom-small">
                    Find your way
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart"></i>
                  <h3 className="heading-terciary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Most popular tours</h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        The Sea Explorer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#popup" className="btn btn--white btn--animated">
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                {" "}
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        The Forest Hiker
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#popup" className="btn btn--white btn--animated">
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                {" "}
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        The Snow Adventurer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#popup" className="btn btn--white btn--animated">
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-big">
              <a href="#" className="btn btn--green">
                Discover all tours
              </a>
            </div>
          </div>
          <div className="section-stories">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay loop muted>
                <source src={vid1} type="video/mp4" />
                <source src={vid2} type="video/webm" />
                Your browser is not supported
              </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat8}
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-terciary u-margin-bottom-small">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat9}
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    Jack Wilson
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-terciary u-margin-bottom-small">
                    WOW! My life is completely different now
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="u-center-text u-margin-top-big">
                <a href="#" className="btn-text">
                  Read all stories &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="section-book">
            <div className="row">
              <div className="book">
                <div className="book__form">
                  <form className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">Start Booking now</h2>
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Full Name"
                        id="name"
                        required
                      />
                      <label for="name" className="form__label">
                        Full Name
                      </label>
                    </div>
                    <div className="form__group">
                      <input
                        type="email"
                        className="form__input"
                        placeholder="Full Name"
                        id="email"
                        required
                      />
                      <label for="email" className="form__label">
                        Email Address
                      </label>
                    </div>

                    <div className="form__group u-margin-bottom-medium">
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="small"
                          name="size"
                        />
                        <label for="small" className="form__radio-label">
                          <span className="form__radio-button"></span>
                          Small tour group
                        </label>
                      </div>
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="large"
                          name="size"
                        />
                        <label for="large" className="form__radio-label">
                          <span className="form__radio-button"></span>
                          Large tour group
                        </label>
                      </div>
                    </div>
                    <div className="form_group">
                      <button className="btn btn--green">
                        Next step &rarr;
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer__logo-box">
              <img src={logoGreen} alt="Full logo" className="footer__logo" />
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <div className="footer__navigation">
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Company
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Contact Us
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Careers
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Privacy policy
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-1-of-2">
                <p className="footer__copyright">
                  Built by{" "}
                  <a href="#" className="footer__link">
                    Rivera
                  </a>{" "}
                  for his online course{" "}
                  <a href="#" className="footer__link">
                    Advanced CSS and Sass
                  </a>{" "}
                  Copyright &copy; by Jonas Schmedtman. You are 100% allowed to
                  use this webpage for both personal and commercial use, but NOT
                  to claim it as your own design. A credit to the original
                  author is of course highly appreciate it.
                </p>
              </div>
            </div>
          </div>
          <div className="popup" id="popup">
            <div className="popup__content">
              <dic className="popup__left">
                <img src={nat8} alt="Tour photo" className="popup__img" />
                <img src={nat9} alt="Tour photo" className="popup__img" />
              </dic>
              <div className="popup__right">
                <a href="#section-tours" className="popup__close">
                  &times;
                </a>
                <h2 className="heading-secondary u-margin-bottom-small">
                  Start booking now
                </h2>
                <h3 className="heading-terciary u-margin-bottom-small">
                  Important &ndash; Please read these terms beafore booking
                </h3>
                <p className="popup__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed turpis tincidunt id aliquet risus. Egestas diam in arcu
                  cursus euismod quis viverra nibh. Mauris ultrices eros in
                  cursus turpis. Viverra justo nec ultrices dui sapien eget mi
                  proin. Molestie at elementum eu facilisis. Scelerisque viverra
                  mauris in aliquam sem fringilla ut. Viverra aliquet eget sit
                  amet tellus cras. Turpis massa tincidunt dui ut ornare lectus
                  sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et
                  ligula ullamcorper malesuada. Eget dolor morbi non arcu risus
                  quis varius. Etiam tempor orci eu lobortis elementum nibh
                  tellus. A erat nam at lectus urna duis convallis convallis.
                  Condimentum mattis pellentesque id nibh tortor id aliquet. At
                  urna condimentum mattis pellentesque id nibh tortor id. Enim
                  blandit volutpat maecenas volutpat blandit aliquam etiam erat
                  velit. Lobortis elementum nibh tellus molestie nunc non
                  blandit. Sit amet consectetur adipiscing elit duis tristique.
                  Elementum nisi quis eleifend quam adipiscing vitae proin
                  sagittis.
                </p>
                <a href="#" className="btn btn--green">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
