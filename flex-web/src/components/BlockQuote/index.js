import classNames from "classnames/bind";
import styles from "./BlockQuote.module.scss";

const cx = classNames.bind(styles);

function BlockQuote({ customquoteClassName }) {
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("line")}></div>
                <div className={cx("icon")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" width="10" viewBox="0 0 384 512">
                        <path fill="#000000"
                            d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                    </svg>
                </div>
                <div className={cx("line")}></div>
            </div>
            <div className={cx("text")}>
                <p className={cx("quote",customquoteClassName)}>Not everyone is meant to be in your future. Some people are just passing through to teach you lessons
                    in life. </p>
                <p className={cx('author')}>- Dr. Seuss</p>
            </div>
        </div>
     );
}

export default BlockQuote;