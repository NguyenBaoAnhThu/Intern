import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import GalleryComponent from "~/components/Gallery";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import styles from "./Demo2.module.scss";
import classNames from "classnames/bind";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vintageCityPost, setVintageCityPost] = useState(null);

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

    axios
      .get("http://localhost:1337/api/posts/1?populate=*")
      .then((response) => {
        setVintageCityPost(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching vintage city post: ", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  const firstFivePosts = posts.slice(0, 7);
  const otherPosts = posts.slice(1, 7);

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
    const title = index === 0 ? "Vintage Cities" :
                  index === 1 ? "Shoe Without You" :
                  index === 2 ? "Women Enterprenuer" :
                  index === 3 ? "Photographer's Diary" :
                  index === 4 ? "The Cold Weather" :
                  index === 5 ? "Move Thinking Forward" :
                  index === 6 ? "Features" :
                  post.attributes.Title || "Untitled";

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

  const vintageCityImageUrl = vintageCityPost
    ? `http://localhost:1337${vintageCityPost.attributes.Image?.data[0]?.attributes?.url}`
    : "";

  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName1={cx(styles.demo2)} />
      <Logo />
      <UnHdDemo2 />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <CarouselOverlay
              {...getCarouselOverlayProps(firstFivePosts[0], 0)}
            />
            <GalleryComponent 
              images={firstFivePosts.slice(0, 5).map((post, index) => ({
                imageUrl: index === 0 && vintageCityImageUrl 
                  ? vintageCityImageUrl 
                  : `http://localhost:1337${post.attributes.Image?.data[0]?.attributes?.url}`,
                linkUrl: `/posts/${post.id}`
              }))} 
              className={cx("gallery-1")} 
            />
            <div className={cx("entry-summary")}>
              <p>
                {(() => {
                  const truncatedText = firstFivePosts[0].attributes.Text.length > 300
                    ? firstFivePosts[0].attributes.Text.substring(0, 795) + "..."
                    : firstFivePosts[0].attributes.Text;
                  return truncatedText;
                })()}
              </p>
              <a href={`/posts/${firstFivePosts[0]?.id}`} className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
            <EntryFooter />
            <div className={cx("card-container", "card-portrait")}>
              {otherPosts.map((post, index) => (
                <div key={post.id} className={cx("card-post")}>
                  <a href={`/posts/${post.id}`}>
                    <img src={`http://localhost:1337${post.attributes.Image?.data[0]?.attributes?.formats?.medium?.url || post.attributes.Image?.data[0]?.attributes?.url}`} />
                  </a>
                  <CarouselOverlay
                    {...getCarouselOverlayProps(post, index + 1)}
                    customTitle="custom-title"
                  />
                  <div className={cx("entry-summary1")}>
                    <p>{post.attributes.Text.length > 100 ? `${post.attributes.Text.substring(0, 202)}...` : post.attributes.Text}</p>
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

export default Demo2;
