import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title> About - Felix </title>
      </Helmet>
      <Logo />
      <Header aboutClassName={cx(styles.aboutcustom)} 
      customHomeClassName={cx(styles.customhome)} 
      />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/about.jpg" />
          <div className={cx("content")}>
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos.
              </p>
            </div>
            <div className={cx("block-quotes")}>
              <div className={cx("container-block")}>
                <div className={cx("line")}></div>
                <div className={cx("icon")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    width="10"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#000000"
                      d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                    />
                  </svg>
                </div>
                <div className={cx("line")}></div>
              </div>
              <div className={cx("text")}>
                <p className={cx("quote")}>
                  You are never too old, too wacky or too wild, to pick up a
                  book and read to a child.{" "}
                </p>
                <p className={cx("entry-summary1")}>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                </p>
                <p className={cx("entry-summary1")}>
                  Sed non mauris vitae erat consequat auctor eu in elit. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Mauris in erat justo.
                </p>
              </div>
            </div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
