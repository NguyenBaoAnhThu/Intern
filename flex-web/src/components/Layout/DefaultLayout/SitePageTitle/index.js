import styles from "./SitePageTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SitePageTitle({ title }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("overlay")}></div> 
            <div className={cx("page-title")}>
                {title}
            </div>
        </div>
    );
}

export default SitePageTitle;
