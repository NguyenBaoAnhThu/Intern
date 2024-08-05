import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import styles from "./Demo4.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import ContentHome from "~/components/Content/ContentHome";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo4() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <HeaderCustom tableCellClassName3={cx(styles.demo4)}/>
      <Logo />
      <UnHdDemo2 />
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
      <Footer/>
    </div>
  );
}

export default Demo4;
