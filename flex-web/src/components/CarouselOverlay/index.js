import React from 'react';
import classNames from 'classnames/bind';
import styles from './CarouselOverlay.module.scss';

const cx = classNames.bind(styles);

const CarouselOverlay = ({ title, postDate, link, tagLink, tag, customTitle, customOverlay, customePostDay }) => (
    <div className={cx('carousel-overlay', customOverlay)}> 
        <a href={link} className={cx('item-title', customTitle)}>
            {title}
        </a>
        <p className={cx('item-post-day', customePostDay)}>
            Posted on <a href={link} className={cx('daypost')}>{postDate}</a> 
            {tag && (
                <span>
                    <a href={tagLink}>
                        {tag}
                    </a>
                </span>
            )}
        </p>
    </div>
);

export default CarouselOverlay;
