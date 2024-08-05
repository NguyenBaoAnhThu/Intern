import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Fashion.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";

const cx = classNames.bind(styles);

function Fashion() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/posts/2?populate=*") 
      .then((response) => {
        setPost(response.data.data);
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

  if (!post) {
    return <div>No post found</div>;
  }


  const carouselOverlayProps = {
    title: "Shoe Without You",
    postDate: "15 August 2017",
    link: "/shoe-without-you",
    tag: "FASHION",
    tagLink: "/category/fashion",
    customOverlay: cx("custom-overlay"),
  };

  const images = post.attributes.Image.data.map((image) => ({
    imageUrl: `http://localhost:1337${image.attributes.url}`,
    linkUrl: "#",
  }));

  const truncatedText = post.attributes.Text.length > 300
    ? post.attributes.Text.substring(0, 795) + "..."
    : post.attributes.Text;

  return (
    <div>
      <Helmet>
        <title>Fashion - Felix</title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay {...carouselOverlayProps} />
              <img src={images[0]?.imageUrl || "default-image-url.jpg"} alt="Fashion" />
              <div className={cx("entry-summary")}>
                <p>{truncatedText}</p>
                <a href={carouselOverlayProps.link} className={cx("continue-reading")}>
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref={carouselOverlayProps.link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashion;
