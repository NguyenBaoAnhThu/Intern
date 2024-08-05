import React from 'react';
import classNames from 'classnames/bind';
import styles from './NavLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NavLinks({ showNewerPosts, showOlderPosts, newerPostsLink, olderPostsLink,classNameWrapper,newerPost,olderPost }) {
    return (
        <div className={cx('wrapper',classNameWrapper)}>
            {showNewerPosts && (
                <div className={cx('nav-next')}>
                    <FontAwesomeIcon icon={faAnglesLeft} className={cx('icon')} />
                    <a href={newerPostsLink}> {newerPost}</a>
                </div>
            )}
            {showOlderPosts && (
                <div className={cx('nav-previous')}>
                    <a href={olderPostsLink}> {olderPost } </a>
                    <FontAwesomeIcon icon={faAnglesRight} className={cx('icon')} />
                </div>
            )}
        </div>
    );
}

export default NavLinks;
