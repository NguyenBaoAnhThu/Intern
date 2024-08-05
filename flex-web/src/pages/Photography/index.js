import styles from "./Photography.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import GalleryComponent from "~/components/Gallery";

const cx = classNames.bind(styles);
const images = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457459588520-2ae325c92c09-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_321766322-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_280607738-770x570.jpg",
    linkUrl: "#",
  },
];
function Photography() {
  return (
    <div>
      <Helmet>
        <title> Photography - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="My Winter Diary"
                postDate="14 August 2017"
                link="/my-winter-diary/"
                tag="PHOTOGRAPHY"
                tagLink="/category/photography"
                customOverlay="custom-overlay"
              />
              <GalleryComponent images={images} className={cx("gallery-1")} />
              <div className={cx("entry-summary")}>
                <p>
                  Cesar Chavez; free expression; medicine revitalize innovation.
                  Safeguards technology health partnership nonprofit;
                  accelerate. Generosity life-expectancy donate youth pride
                  Bloomberg inspire breakthroughs opportunity honesty. Clean
                  water, economic security, agency, grantees giving, Rosa Parks
                  metrics rural making progress. Pride reproductive rights
                  participatory monitoring global network{" "}
                  <span>Medecins du Monde</span> aid protect. Partner
                  sustainable future.
                </p>
                <p>
                  <strong>Transparent Standards:</strong> My first and foremost
                  guiding principle was that the services would need to continue
                  to apply transparent and objective standards for all career
                  fields to ensure leaders assign tasks, jobs, and career fields
                  throughout the force based on ability, not gender.
                </p>
                <a href="/my-winter-diary/" className={cx("continue-reading")}>
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref="/my-winter-diary/" />
              <div className={cx("card-container")}>
                <div className={cx("card-portrait")}>
                  <div className={cx("card-post")} style={{borderBottom: 'none'}}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/man-hands-photographer-cameras-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Photographer's Diary"
                        postDate="13 August 2017"
                        link="/photographers-diary/"
                        tag="PHOTOGRAPHY"
                        tagLink="/category/photography"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          I was in Dubai to receive an award from HIPA for my
                          contributions to photographic education, and the whole
                          experience was just really surreal. I’m covering that
                          part of the trip over on my blog at scottkelby.com,
                          but here on exposure I’m going to…
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

export default Photography;
