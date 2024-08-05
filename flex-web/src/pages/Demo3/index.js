import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo3 from "~/components/Layout/CustomLayout/UnHdDemo3/index";
import GalleryComponent from "~/components/Gallery";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import styles from "./Demo3.module.scss";
import classNames from "classnames/bind";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo3() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/posts?populate=*")
      .then((response) => {
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  const firstSevenPosts = posts.slice(0, 7);

  const titleLinkMap = {
    "Vintage Cities": "/vintage-cities/",
    "Shoe Without You": "/shoe-without-you/",
    "Women Enterprenuer": "/women-enterprenuer/",
    "Photographer's Diary": "/photographers-diary/",
    "The Cold Weather": "/the-cold-weather/",
    "Move Thinking Forward": "/move-thinking-forward/",
    "Features": "/features/"
  };

  const postDateMap = [
    "15 August 2017",
    "15 August 2017",
    "15 August 2017",
    "13 August 2017",
    "13 August 2017",
    "3 August 2017",
    "1 August 2017"
  ];

  const tagMap = {
    "Vintage Cities": "TRAVEL",
    "Shoe Without You": "FASHION",
    "Women Enterprenuer": "BUSINESS",
    "Photographer's Diary": "PHOTOGRAPHY",
    "The Cold Weather": "TRAVEL",
    "Move Thinking Forward": "BUSINESS",
    "Features": "UNCATEGORIZED"
  };

  const tagLinkMap = {
    "TRAVEL": "/category/travel/",
    "FASHION": "/category/fashion/",
    "BUSINESS": "/category/business/",
    "PHOTOGRAPHY": "/category/photography/",
    "UNCATEGORIZED": "/category/uncategorized/"
  };

  const getCarouselOverlayProps = (post, index) => {
    const titles = [
      "Vintage Cities",
      "Shoe Without You",
      "Women Enterprenuer",
      "Photographer's Diary",
      "The Cold Weather",
      "Move Thinking Forward",
      "Features"
    ];

    const title = titles[index] || post.attributes.Title || "Untitled";

    const tag = tagMap[title] || "UNKNOWN";
    const tagLink = tagLinkMap[tag] || `/category/unknown/`;

    return {
      title: title,
      link: titleLinkMap[title] || `/posts/${post.id}`,
      postDate: postDateMap[index] || "Unknown Date",
      tag: tag,
      tagLink: tagLink,
      customOverlay: cx(styles.customoverlay)
    };
  };

  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName2={cx(styles.demo3)} />
      <Logo />
      <UnHdDemo3 />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            {firstSevenPosts.length > 0 && (
              <CarouselOverlay
              {...getCarouselOverlayProps(firstSevenPosts[0], 0)}
            />
            )}
            <GalleryComponent 
              images={firstSevenPosts.slice(0, 5).map((post) => ({
                imageUrl: `http://localhost:1337${post.attributes.Image?.data[0]?.attributes?.url}`,
                linkUrl: `/posts/${post.id}`
              }))} 
              className={cx("gallery-1")} 
            />
            <div className={cx("entry-summary")}>
              {firstSevenPosts.length > 0 && (
                <p>
                  {firstSevenPosts[0].attributes.Text.length > 300
                    ? firstSevenPosts[0].attributes.Text.substring(0, 795) + "..."
                    : firstSevenPosts[0].attributes.Text}
                </p>
              )}
              <a href={`/posts/${firstSevenPosts[0]?.id}`} className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
            <EntryFooter />
            <div className={cx("card-portrait")}>
              {firstSevenPosts.map((post, index) => (
                <div key={post.id} className={cx("card-post")}>
                  <a href={`/posts/${post.id}`}>
                    <img src={`http://localhost:1337${post.attributes.Image?.data[0]?.attributes?.formats?.medium?.url || post.attributes.Image?.data[0]?.attributes?.url}`} />
                  </a>
                  <div className={cx("card-content")}>
                    <CarouselOverlay
                      {...getCarouselOverlayProps(post, index)}
                      customTitle="custom-title"
                      customOverlay={cx(styles.customoverlay)}
                    />
                    <div className={cx("entry-summary1")}>
                      <p>
                        {post.attributes.Text.length > 100 
                          ? `${post.attributes.Text.substring(0, 310)}...`
                          : post.attributes.Text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Sidebar className={cx("sidebar")} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo3;
