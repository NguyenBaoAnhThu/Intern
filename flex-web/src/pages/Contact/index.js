import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import {faFacebookF,faTwitter,faLinkedinIn, faPinterestP,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Contact - Felix </title>
      </Helmet>
      <Logo />
      <Header customcontactClassName={cx(styles.customcontact)} 
      customHomeClassName={cx(styles.customhome)} 
      />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("contact")}>
            <h2>Contact</h2>
            <div className={cx("entry-summary1")}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eleifend ante pretium leo aliquet venenatis. Nunc ac
                feugiat elit. Aliquam erat volutpat. Pellentesque consectetur
                elit sapien, imperdiet maximus diam dictum condimentum. In
                laoreet finibus dolor, nec molestie urna condimentum et. Donec
                nec nisl at arcu faucibus dignissim ac non ex.
              </p>
            </div>
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457459588520-2ae325c92c09-770x570.jpg" />
            <div className={cx("entry-summary2")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. To Say Hello write to me
                at <span>hello@felix.blog</span>
              </p>
            </div>
            <FormPost/>
          </div>
          <div className={cx("sidebar")}>
            <div className={cx("side-bar-right")}>
              <div className={cx("widget-title")}> About Me </div>
              <img
                width="240"
                height="240"
                src="https://demo.farost.net/felix/wp-content/uploads/2017/08/about-me.jpg"
                className={cx("portrait-author")}
                alt="Felix"
                decoding="async"
                fetchpriority="high"
              />
              <p className={cx("inf-author")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum...
              </p>
              <a href="#" className={cx("mom-blogger")}>
                {" "}
                Mom & Blogger{" "}
              </a>
              <img
                width="150"
                height="48"
                src="http://demo.farost.net/felix/wp-content/uploads/2017/08/my-sign.png"
                className={cx("signature-author")}
                alt="Felix"
                decoding="async"
                fetchpriority="high"
              />
              <div className={cx("image-list-container")}>
                <ul className={cx("image-list")}>
                  <li>
                    <a href="#" target="_blank">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/felix-promo_01.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/felix-promo_02.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={cx("widget-title")}> Social Me </div>
              <div className={cx("social-menu-container")}>
                <ul className={cx("list-social")}>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="Pinterest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
