import styles from "./Uncategorized.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import BlockQuote from "~/components/BlockQuote/index";

const cx = classNames.bind(styles);

function Uncategorized() {
  return (
    <div>
      <Helmet>
        <title> Uncategorized - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="Features"
                postDate="1 August 2017"
                link="/features/"
                tag="UNCATEGORIZED"
                tagLink="/category/uncategorized"
                customOverlay="custom-overlay"
              />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457439157612-a1891ff037ff-770x570.jpg" />
              <div className={cx("entry-summary")}>
                <p>
                  Cesar Chavez; free expression; medicine revitalize innovation.
                  Safeguards technology health partnership nonprofit; 
                  accelerate. Generosity life-expectancy donate youth pride
                  Bloomberg inspire breakthroughs opportunity honesty. Clean
                  water, economic security, agency, grantees giving, Rosa Parks
                  metrics rural making progress. Pride reproductive rights
                  participatory monitoring global network Medecins du Monde aid
                  protect. Partner sustainable future.
                </p>
              </div>
              <BlockQuote customquoteClassName={cx(styles.customquotes)} />
              <div className={cx("entry-summary1")}>
                <p>
                  Proin gravida nibh vel velit auctor aliquet.{" "}
                  <a href="#">Aenean sollicitudin</a>, lorem quis bibendum
                  auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                  elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                  mauris. A Bold Text ipsum velit. Duis sed odio sit amet nibh
                  vulputate cursus a sit amet mauris. Also See
                  <span> This is a link.</span>
                </p>
              </div>
              <div className={cx("entry-summary")}>
                <a href="/features/" className={cx("continue-reading")}>
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref="/features/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uncategorized;
