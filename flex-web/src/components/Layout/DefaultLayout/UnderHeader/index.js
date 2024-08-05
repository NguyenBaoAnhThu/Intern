import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./UnderHeader.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function UnderHeader(carouselClassName) {
    return (
        <div >
            <div id="carouselExample" className={cx("carousel", "slide",carouselClassName)}>
                <div className={cx("carousel-inner")}>
                    <div className={cx("carousel-item", "active")}>
                        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 1"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Posted on <a href='#' className={cx('daypost')}>3 August 2017</a><span><a href='#'>BUSINESS</a></span></p>
                            <a href='#' className={cx("item-title")}>Move Thinking Forward</a>
                            <p className={cx("item-summary")}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec...</p>
                            <a href='#' className={cx("button-default")}>
                                READ MORE
                            </a>
                        </div>
                    </div>
                    <div className={cx("carousel-item")}>
                        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452696024259-cb7474e79947-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 2"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Posted on <a href='#' className={cx('daypost')}>2 August 2017</a><span><a href='#'>FASHION</a></span></p>
                            <a href='#' className={cx("item-title")}>Flower Fiesta</a>
                            <p className={cx("item-summary")}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec...</p>
                            <a href='#' className={cx("button-default")}>
                                READ MORE
                            </a>
                        </div>
                    </div>
                    <div className={cx("carousel-item")}>
                        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445915116209-31efbc3ae6b2-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 3"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Posted on <a href='#' className={cx('daypost')}>1 August 2017</a><span><a href='#'>FASHION</a></span></p>
                            <a href='#' className={cx("item-title")}>The Secrets Of Relationships</a>
                            <p className={cx("item-summary")}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec...</p>
                            <a href='#' className={cx("button-default")}>
                                READ MORE
                            </a>
                        </div>
                    </div>
                    <div className={cx("carousel-item")}>
                        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445758184816-a0ad8e837278-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 4"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Posted on <a href='#' className={cx('daypost')}>1 August 2017</a></p>
                            <a href='#' className={cx("item-title")}>Forest Hunger Game</a>
                            <p className={cx("item-summary")}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec...</p>
                            <a href='#' className={cx("button-default")}>
                                READ MORE
                            </a>
                        </div>
                    </div>
                </div>
                <button className={cx("carousel-control-prev")} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className={cx("carousel-control-prev-icon")} aria-hidden="true"></span>
                    <span className={cx("visually-hidden")}>Previous</span>
                </button>
                <button className={cx("carousel-control-next")} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className={cx("carousel-control-next-icon")} aria-hidden="true"></span>
                    <span className={cx("visually-hidden")}>Next</span>
                </button>
            </div>
        </div>
    );
}

export default UnderHeader;
