import classNames from "classnames/bind";
import styles from "./FooterCustom.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const cx = classNames.bind(styles);

function FooterCustom() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("site-footer")}>
        <div className={cx('logo')}>
        </div>
        <div className={cx("footer-text-container")}>
          <div className={cx("footer-intro")}>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </div>
          <div className={cx('footer-copyright')}>
            PAMPERED BY
            <a href="https://themeforest.net/user/farost"> FAROST </a>
            © 2016-2017
          </div>
        </div>
        <div className={cx('social-menu-container')} >
              <ul className={cx('list-social')}>
                  <li className={cx('icon')}>
                      <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                  </li>
                  <li className={cx('icon')}>
                      <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faTwitter} />
                      </a>
                  </li>
                  <li className={cx('icon')}>
                      <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                  </li>
                  <li className={cx('icon')}>
                      <a href="#" title="Pinterest" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faPinterestP} />
                      </a>
                  </li>
              </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterCustom;
