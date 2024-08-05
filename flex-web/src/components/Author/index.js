import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faPinterestP,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Author.module.scss";
import classNames from "classnames/bind";



const cx = classNames.bind(styles);
function Author({authorwrapper}) {
    return ( 
        <div>
            <div className={cx("entry-summary9",authorwrapper)}>
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/admin-140x140.jpg" />
            <div>
              <div className={cx("entry-summary9-social")}>
                <h4> NIGELLA LOS </h4>
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
              <p>
                Honor complexity working families healthcare, international
                development save lives. Efficient best practices, Peace Corps
                crisis management inclusive capitalism.
              </p>
            </div>
          </div>
        </div>
     );
}

export default Author;