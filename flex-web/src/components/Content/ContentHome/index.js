import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./ContentHome.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function ContentHome() {
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

  const firstFivePosts = posts.slice(0, 5);

  // Ánh xạ tiêu đề, liên kết, ngày đăng và thẻ tương ứng
  const titleLinkMap = {
    "Vintage Cities": "/vintage-cities/",
    "Shoe Without You": "/shoe-without-you/",
    "Women Enterprenuer": "/women-enterprenuer/",
    "Photographer's Diary": "/photographers-diary/",
    "The Cold Weather": "/the-cold-weather/"
  };

  const postDateMap = [
    "15 August 2017",
    "15 August 2017",
    "15 August 2017",
    "13 August 2017",
    "13 August 2017"
  ];

  const tagMap = {
    "Vintage Cities": "TRAVEL",
    "Shoe Without You": "FASHION",
    "Women Enterprenuer": "BUSINESS",
    "Photographer's Diary": "PHOTOGRAPHY",
    "The Cold Weather": "TRAVEL"
  };

  const tagLinkMap = {
    "TRAVEL": "/category/travel/",
    "FASHION": "/category/fashion/",
    "BUSINESS": "/category/business/",
    "PHOTOGRAPHY": "/category/photography/"
  };

  const carouselOverlayProps = firstFivePosts.map((post, index) => {
    const title = index === 0 ? "Vintage Cities" :
                  index === 1 ? "Shoe Without You" :
                  index === 2 ? "Women Enterprenuer" :
                  index === 3 ? "Photographer's Diary" :
                  index === 4 ? "The Cold Weather" :
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
  });

  return (
    <div>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          {firstFivePosts.map((post, index) => {
            const truncatedText = post.attributes.Text.length > 300
              ? post.attributes.Text.substring(0, 795) + "..."
              : post.attributes.Text;

            const hasMultipleImages = post.attributes.Image && post.attributes.Image.data && post.attributes.Image.data.length > 1;
            const imageGalleryClass = hasMultipleImages
              ? cx("image-gallery") 
              : cx("image-gallery", "single-image");  
            const carouselProps = carouselOverlayProps[index];

            return (
              <div key={post.id} className={cx("posts")}>
                <CarouselOverlay
                  title={carouselProps.title}
                  link={carouselProps.link}
                  postDate={carouselProps.postDate}
                  tag={carouselProps.tag}
                  tagLink={carouselProps.tagLink}
                  customOverlay={carouselProps.customOverlay}
                />
                <div className={imageGalleryClass}>
                  {post.attributes.Image && post.attributes.Image.data && post.attributes.Image.data.length > 0 ? (
                    post.attributes.Image.data.map((image) => {
                      const imageUrl = image.attributes.formats?.medium?.url || image.attributes.formats?.large?.url || image.attributes.url;
                      if (imageUrl) {
                        return (
                          <img
                            key={image.id}
                            src={`http://localhost:1337${imageUrl}`}
                            alt={image.attributes.name}
                            className={cx("post-image")}
                          />
                        );
                      }
                      return null;
                    })
                  ) : (
                    <p>No images available</p>
                  )}
                </div>
                <div className={cx("entry-summary")}>
                  <p>{truncatedText}</p>
                  <a href={carouselProps.link} className={cx("continue-reading")}>
                    CONTINUE READING...
                  </a>
                </div>
                <EntryFooter leaveCommentHref={carouselProps.link} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentHome;
