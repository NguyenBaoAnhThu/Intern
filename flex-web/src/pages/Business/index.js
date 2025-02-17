import styles from "./Business.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";

const cx = classNames.bind(styles);

function Business() {
  return (
    <div>
      <Helmet>
        <title> Business - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="Women Interprenuer"
                postDate="15 August 2017"
                link="/women-enterprenuer/"
                tag="BUSINESS"
                tagLink="/category/business"
                customOverlay="custom-overlay"
              />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427088625471-da8a7193afd3-770x570.jpg" />
              <div className={cx("entry-summary")}>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                  Sed non mauris vitae erat consequat auctor eu in elit. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Mauris in erat justo.
                </p>
                <p>
                  Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                  Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                  fermentum nunc. Etiam pharetra, erat sed fermentum feugiat,
                  velit mauris egestas quam, ut aliquam massa nisl quis neque.
                  Suspendisse in orci enim. Sed ut imperdiet nisi. Proin
                  condimentum fermentum nunc.
                </p>
                <a href="/women-enterprenuer/" className={cx("continue-reading")}>
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref="/women-enterprenuer/" />
              <div className={cx("card-container")}>
                <div className={cx("card-portrait")}>
                  <div className={cx("card-post")} style={{borderBottom: 'none'}}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Move Thinking Forward "
                        postDate="3 August 2017"
                        link="/wordpress-theme"
                        tag="BUSINESS"
                        tagLink="/category/business/"
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

export default Business;
