import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./TravelCategogy.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import GalleryComponent from "~/components/Gallery";

const cx = classNames.bind(styles);

function TravelCategogy() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/posts/1?populate=*")
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
    title: "Vintage Cities",
    link: "/vintage-cities/",
    postDate: "15 August 2017",
    tag: "TRAVEL",
    tagLink: "/category/travel/",
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
        <title> Travel - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay {...carouselOverlayProps} />
              <GalleryComponent images={images} className={cx("gallery-1")} />
              <div className={cx("entry-summary")}>
                <p>{truncatedText}</p>
                <a href={carouselOverlayProps.link} className={cx("continue-reading")}>
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref={carouselOverlayProps.link} />
              <div className={cx("card-container")}>
                <div className={cx("card-portrait")}>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="http://localhost:1337/uploads/medium_photo_1448920231336_a3886589d68a_770x570_8a603f1c64.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="The Cold Weather"
                        postDate="13 August 2017"
                        link="/the-cold-weather/"
                        tag="TRAVEL"
                        tagLink="/category/travel/"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          Proin gravida nibh vel velit auctor aliquet. Aenean
                          sollicitudin, lorem quis bibendum auctor, nisi elit
                          consequat ipsum, nec sagittis sem nibh id elit. Duis
                          sed odio sit amet nibh vulputate cursus a sit amet
                          mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                          odio…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCategogy;
