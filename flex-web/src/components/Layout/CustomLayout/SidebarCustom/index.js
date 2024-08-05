import styles from "./SidebarCustom.module.scss"
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);
function SidebarCustom() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('sidebar-container')}>
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
                </div>
                {/* //// */}
                <div className={cx("side-bar-right")}>
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
                <div className={cx("side-bar-right")}>
                    <div className={cx('widget-title')}> Latest tweets </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faTwitter} className={cx('twitter')} />
                        <p>@</p>
                    </div>
                    <a href="#" className={cx('status')}>54 years ago</a>
                </div>
            </div>    
        </div>
     );
}

export default SidebarCustom;