import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import styles from "./Demo5.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import ContentHome from "~/components/Content/ContentHome";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo5() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <Logo/>
      <HeaderCustom tableCellClassName4={cx(styles.demo5)}/>
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                  <ContentHome/>
                  <NavLinks
                   classNameWrapper={cx(styles.navlinkswrapper)}
                    olderPost = "Older Posts"
                    showNewerPosts={false}
                    showOlderPosts={true}
                    olderPostsLink="/Home/Page/2"
                  />
                </div>
                <Sidebar />
            </div>
        </div>
      <FooterCustom/>
    </div>
  );
}

export default Demo5;
