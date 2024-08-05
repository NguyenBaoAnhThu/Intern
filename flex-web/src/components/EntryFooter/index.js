import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterest } from "@fortawesome/free-brands-svg-icons";
import classNames from 'classnames/bind';
import styles from './EntryFooter.module.scss';

const cx = classNames.bind(styles); 

function EntryFooter({ customEntryFooter, leaveCommentHref }) {
    return ( 
        <div className={cx("entry-footer", customEntryFooter)}>
            <div className={cx("entry-byline")}>
                <p>
                    by<a href="#">Nigella Los</a>
                </p>
            </div>
            <div className={cx("social-menu-container")}>
                <ul className={cx("list-social")}>
                    <li className={cx("icon")}>
                        <a
                            href="https://www.facebook.com/"
                            title="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li className={cx("icon")}>
                        <a
                            href="https://x.com/intent/post?text=Shoe+Without+You&url=https%3A%2F%2Fdemo.farost.net%2Ffelix%2F%3Fp%3D129"
                            title="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li className={cx("icon")}>
                        <a
                            href="https://plus.google.com/"
                            title="GooglePlus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGooglePlusG} />
                        </a>
                    </li>
                    <li className={cx("icon")}>
                        <a
                            href="https://www.pinterest.com/pin-builder/?description=Shoe+Without+You&media=https%3A%2F%2Fdemo.farost.net%2Ffelix%2Fwp-content%2Fuploads%2F2017%2F08%2Fphoto-1456689337957-34d689850f36-770x570.jpg&method=button&url=https%3A%2F%2Fdemo.farost.net%2Ffelix%2Fshoe-without-you%2F"
                            title="Pinterest"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faPinterest} />
                        </a>
                    </li>
                    <li className={cx("icon")}>
                        <a
                            href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fdemo.farost.net%2Ffelix%2Fshoe-without-you%2F"
                            title="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={cx("entry-comments")} style={{ borderRight: "none" }}>
                <a href={leaveCommentHref}> Leave a Comment </a>
            </div>
        </div>
    );
}

export default EntryFooter;
