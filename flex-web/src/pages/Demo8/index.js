import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2";
import EntryFooter from "~/components/EntryFooter";
import styles from "./Demo8.module.scss";
import classNames from "classnames/bind";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo8() {
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
      imageUrl: `http://localhost:1337${post.attributes.Image?.data[0]?.attributes?.url}`,
      content: post.attributes.Text || "",
      customOverlay: cx("customoverlay"),
      customTitle: cx("customtitle"),
    };
  };

  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName8={cx("demo8")} />
      <Logo />
      <UnHdDemo2 />
      <div className={cx("wrapper")}>
        <div className={cx("content-container")}>
          {firstSevenPosts.map((post, index) => {
            const props = getCarouselOverlayProps(post, index);
            return (
              <div className={cx("card-post")} key={post.id}>
                <CarouselOverlay 
                  title={props.title}
                  postDate={props.postDate}
                  link={props.link}
                  tag={props.tag}
                  tagLink={props.tagLink}
                  customOverlay={props.customOverlay}
                  customTitle={props.customTitle}
                />
                <a href={props.link}>
                  <img 
                    src={props.imageUrl} 
                    alt={props.title} 
                    className={cx("post-image")}
                  />
                </a>
                <div className={cx("entry-summary1")}>
                  <p>{props.content.length > 100 
                        ? `${props.content.substring(0, 302)}...` 
                        : props.content
                      }</p>
                </div>
                <EntryFooter customEntryFooter={cx("customentryft")} />
              </div>
            );
          })}
        </div>
      </div>
      <SidebarCustom />
      <FooterCustom />
    </div>
  );
}

export default Demo8;
