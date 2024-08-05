import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import {faFacebookF,faTwitter,faLinkedinIn, faPinterestP,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PageLeftSidebar.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function PageLeftSidebar() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Page Left Sidebar – Felix </title>
      </Helmet>
      <Logo />
      <Header tableCellClassName17={cx(styles.pageleftsidebar)} 
      customHomeClassName={cx(styles.customhome)} 
      />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
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
          <div className={cx("contact")}>
            <h2>Page left sidebar</h2>
            <div className={cx("entry-summary")}>
            <p>
              <strong>Lorem Ipsum </strong>is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry’s
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h4>WHERE DOES IT COME FROM?</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et
              Malorum” (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, “Lorem
              ipsum dolor sit amet..”, comes from a line in section 1.10.32.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <h4>WHY DO WE USE IT?</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLeftSidebar;