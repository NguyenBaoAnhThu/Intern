import React from 'react';
import classNames from 'classnames/bind';
import styles from './Error.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet";

const cx = classNames.bind(styles);

function ErrorPage() {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className={cx("wrapper")}>
            <Helmet>
                <title>Comment Submission Failure</title>
            </Helmet>
            <div className={cx('error-form')}>
                <p><strong>Error:</strong> Please fill the required fields.</p>
                <div className={cx('nav-next')}>
                    <FontAwesomeIcon icon={faAnglesLeft} className={cx('icon')} />
                    <a href="#" onClick={handleGoBack}> Back </a>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
