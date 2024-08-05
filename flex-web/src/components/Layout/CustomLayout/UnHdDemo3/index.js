import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./UnHdDemo3.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function UnHdDemo3() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1));
        }
    };

    const handleNext = () => {
        if (currentIndex < 1) {
            setCurrentIndex((prevIndex) => (prevIndex + 1));
        }
    };

    return (
        <div className={cx("carousel-container")}>
            <div className={cx("carousel-inner")} style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}>
                <div className={cx("carousel-item")}>
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 1"/>
                    <div className={cx("carousel-overlay")}>
                        <p className={cx('item-post-day')}>Posted on <a href='/move-thinking-forward/' className={cx('daypost')}>3 August 2017</a><span><a href='/category/business/'>BUSINESS</a></span></p>
                        <a href='/move-thinking-forward/' className={cx("item-title")}>Move Thinking Forward</a>
                    </div>
                </div>
                <div className={cx("carousel-item")}>
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452696024259-cb7474e79947-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 2"/>
                    <div className={cx("carousel-overlay")}>
                        <p className={cx('item-post-day')}>Posted on <a href='/flower-fiesta/' className={cx('daypost')}>2 August 2017</a><span><a href='/category/fashion/'>FASHION</a></span></p>
                        <a href='/flower-fiesta/' className={cx("item-title")}>Flower Fiesta</a>
                    </div>
                </div>
                <div className={cx("carousel-item")}>
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445915116209-31efbc3ae6b2-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 3"/>
                    <div className={cx("carousel-overlay")}>
                        <p className={cx('item-post-day')}>Posted on <a href='/the-secrets-of-relationships/' className={cx('daypost')}>1 August 2017</a><span><a href='/category/fashion/'>FASHION</a></span></p>
                        <a href='/the-secrets-of-relationships/' className={cx("item-title")}>The Secrets Of Relationships</a>
                    </div>
                </div>
                <div className={cx("carousel-item")}>
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445758184816-a0ad8e837278-770x570.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 4"/>
                    <div className={cx("carousel-overlay")}>
                        <p className={cx('item-post-day')}>Posted on <a href='/forest-hunger-game/' className={cx('daypost')}>1 August 2017</a></p>
                        <a href='/forest-hunger-game/' className={cx("item-title")}>Forest Hunger Game</a>
                    </div>
                </div>
            </div>
            <button 
                className={cx("carousel-control-prev")} 
                type="button" 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{ cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentIndex === 0 ? 0.5 : 1 }}
            >
                <span className={cx("carousel-control-prev-icon")} aria-hidden="true"></span>
                <span className={cx("visually-hidden")}>Previous</span>
            </button>
            <button 
                className={cx("carousel-control-next")} 
                type="button" 
                onClick={handleNext}
                disabled={currentIndex === 1}
                style={{ cursor: currentIndex === 1 ? 'not-allowed' : 'pointer', opacity: currentIndex === 1 ? 0.5 : 1 }}
            >
                <span className={cx("carousel-control-next-icon")} aria-hidden="true"></span>
                <span className={cx("visually-hidden")}>Next</span>
            </button>
        </div>
    );
}

export default UnHdDemo3;
