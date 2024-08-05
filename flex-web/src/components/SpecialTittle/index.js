import classNames from "classnames/bind";
import styles from "./SpecialTittle.module.scss";

const cx = classNames.bind(styles);

function SpecialTittle({tittle }) {
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("line")}></div>
                    <div className={cx("tittle")}>
                        {tittle}
                    </div>
                <div className={cx("line")}></div>
            </div>
        </div>
     );
}

export default SpecialTittle;