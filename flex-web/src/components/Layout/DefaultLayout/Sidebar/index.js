import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Sidebar({ className,classNameBusiness,classNameFashion ,classNameFeatured,classNamePhotography,classNameTravel,classNameUncategorized}) {
   return (
    <div className={cx("sidebar-container",className)}>
        <div className={cx("side-bar-right")}>
                <div className={cx('widget-title')}> About Me </div>
                <img 
                    width="240" 
                    height="240" 
                    src="https://demo.farost.net/felix/wp-content/uploads/2017/08/about-me.jpg" 
                    className={cx('portrait-author')} 
                    alt="Felix" 
                    decoding="async" 
                    fetchpriority="high" 
                />
                <p className={cx('inf-author')}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem quis bibendum auctor, nisi elit consequat ipsum...</p>
                <a href="#" className={cx('mom-blogger')}> Mom & Blogger </a>
                <img 
                    width="150" 
                    height="48" 
                    src="http://demo.farost.net/felix/wp-content/uploads/2017/08/my-sign.png" 
                    className={cx('signature-author')} 
                    alt="Felix" 
                    decoding="async" 
                    fetchpriority="high" 
                />
                <div className={cx("image-list-container")}>
                    <ul className={cx("image-list")}>
                        <li><a href='#' target='_blank'><img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/felix-promo_01.png"/></a></li>
                        <li><a href='#' target='_blank'><img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/felix-promo_02.png"/></a></li>
                    </ul>
                </div>
                <div className={cx('widget-title')}> Social Me </div>
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
                <div className={cx('widget-title')}> Instagram </div>
                <p className={cx('inf-author')}>Instagram has returned invalid data.</p>
                <div className={cx('widget-title')}> Featured Tags </div>
                <div className={cx("tagcloud")}>
                    <a href='/tag/art/'>Art</a>
                    <a href='/tag/business/'>Business</a>
                    <a href='/tag/design/'>Design</a>
                    <a href='/tag/fashion/'>Fashion</a>
                    <a href='/tag/lifestyle/'>Lifestyle</a>
                    <a href='/tag/music/'>Music</a>
                    <a href='/tag/photography/'>Photography</a>
                    <a href='/tag/travel/'>Travel</a>
                </div>
                <div className={cx('widget-title')}> Categories </div>
                <div className={cx("categories-2")}> 
                    <div className={cx("categories-2-item",classNameBusiness)}><a href="/category/business">Business</a><span>(5)</span></div>
                    <div className={cx("categories-2-item",classNameFashion)}><a href="/category/fashion">Fashion</a><span>(13)</span></div>
                    <div className={cx("categories-2-item",classNameFeatured)}><a href="/category/featured">Featured</a><span>(4)</span></div>
                    <div className={cx("categories-2-item",classNamePhotography)}><a href="/category/photography">Photography</a><span>(13)</span></div>
                    <div className={cx("categories-2-item",classNameTravel)}><a href="/category/travel">Travel</a><span>(4)</span></div>
                    <div className={cx("categories-2-item",classNameUncategorized)} style={{borderBottom: 'none'}}><a href="/category/uncategorized">Uncategorized</a><span>(1)</span></div>   
                </div>
                <a href='#'>
                    <img 
                        style={{marginBottom: "30px"}}
                        src='https://demo.farost.net/felix/wp-content/uploads/2017/08/felix-promo_03.png' 
                        alt='' 
                    />
                </a>
                <div className={cx('widget-title')}> Popular Posts </div>
                <a href='#'>
                    <img
                        className={cx("straw-hat")}
                        style={{width: "100%"}}
                        src='https://demo.farost.net/felix/wp-content/uploads/2017/08/fashion-hat-straw-hat-570x422.jpg' 
                        alt='Straw hat'
                    />
                </a>
                <div className={cx("entry-content")}>
                    <a href='#' className={cx("entry-title")}>Vintage Cities</a>
                    <a href="#" className={cx("entry-post-on")}>15 August 2017</a>
                </div>
                <div className={cx('widget-title')}> Recent Posts </div>
                <div className={cx('entry-recent-posts')}>
                    <a href='#'>
                        <img
                            src='https://demo.farost.net/felix/wp-content/uploads/2017/08/fashion-hat-straw-hat-570x422.jpg' 
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='#' className={cx("entry-title")}>Vintage Cities</a>
                        <a href="#" className={cx("entry-post-on")}>15 August 2017</a>
                    </div>
                </div>
                <div className={cx('entry-recent-posts')}>
                    <a href='#'>
                        <img
                            src='https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-140x140.jpg' 
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='#' className={cx("entry-title")}>Shoe Without You</a>
                        <a href="#" className={cx("entry-post-on")}>15 August 2017</a>
                    </div>
                </div>
                <div className={cx('entry-recent-posts')} style={{borderBottom: 'none'}}>
                    <a href='#'>
                        <img
                            src='https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427088625471-da8a7193afd3-140x140.jpg' 
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='#' className={cx("entry-title")}>Women Enterprenuer</a>
                        <a href="#" className={cx("entry-post-on")}>15 August 2017</a>
                    </div>
                </div>
            </div>
    </div>

   )
}

export default Sidebar;