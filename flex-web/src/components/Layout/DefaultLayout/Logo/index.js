import classNames from "classnames/bind";
import styles from "./Logo.module.scss";



const cx = classNames.bind(styles);
function Logo() {
    const handleClick = () => {
        window.location.href = "/";
      };
    return ( 
        <div>
             <img 
            width="384" 
            height="138" 
            src="https://demo.farost.net/felix/wp-content/uploads/2017/08/logo.png" 
            className={cx('custom-logo')} 
            alt="Felix" 
            decoding="async" 
            fetchpriority="high" 
            onClick={handleClick}
      />
        </div>
     );
}

export default Logo;