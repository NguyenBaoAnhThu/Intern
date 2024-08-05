import React from "react";
import { Helmet } from "react-helmet";
import styles from "./ColdPlayBenefit.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import BlockQuote from "~/components/BlockQuote";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import SpecialTittle from "~/components/SpecialTittle";
import Author from "~/components/Author/index";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function ColdPlayBenefit() {
  return (
    <div>
      <Helmet>
        <title>Coldplay Beneath - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Coldplay Beneath"
            postDate="10 August 2017"
            tag="TRAVEL"
            tagLink="/category/travel/"
            customOverlay={cx(styles.customoverlay)}
          />
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/134757562?h=67a23b0f62" // Đường dẫn nhúng từ Vimeo
            width="780"
            height="450"
            frameborder="0"
            allowfullscreen
          ></iframe>{" "}
          <div className={cx("entry-summary")}>
            <p>
              Cesar Chavez; free expression; medicine revitalize innovation.
              Safeguards technology health partnership nonprofit;  accelerate.
              Generosity life-expectancy donate youth pride Bloomberg inspire
              breakthroughs opportunity honesty. Clean water, economic security,
              agency, grantees giving, Rosa Parks metrics rural making progress.
              Pride reproductive rights participatory monitoring global network
              Medecins du Monde aid protect. Partner sustainable future.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
              orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc.
            </p>
          </div>
          <BlockQuote customquoteClassName={cx(styles.customquotes)} />
          <div className={cx("entry-summary1")}>
            <p>
              Proin gravida nibh vel velit auctor aliquet.{" "}
              <a href="#">Aenean sollicitudin</a>, lorem quis bibendum auctor,
              nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
              odio sit amet nibh vulputate cursus a sit amet mauris. A Bold Text
              ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Also See
              <span> This is a link.</span>
            </p>
          </div>
          <div className={cx("entry-summary2")}>
            <div className={cx("entry-summary2-content")}>
              <p>
                John Lennon celebrate social movement assessment expert
                efficient, Peace Corps disruption resolve transform. Urmoil;
                asylum Global South, dedicated accessibility, hack peration
                climate change. Harness, effect solve outcomes, medical
                countries synthesize.
              </p>
              <p>
                Disruptor, emergent open source public service, stakeholders
                vulnerable citizens Kony 2012 enabler. Inclusive capitalism
                diversity inspire social change. Gender leverage donation
                conflict resolution, pursue these aspirations accelerate
                technology criteria agenda.
              </p>
            </div>
            <div className={cx("entry-summary2-img")}>
              <img src="http://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-570x422.jpg" />
              <p className={cx("caption-text")}>
                Many see a bath as a relaxing end of the day.
              </p>
            </div>
          </div>
          <TagLinks
            tag1="Design"
            tag2="Lifestyle"
            tag3="Music"
            linktag1="/tag/design"
            linktag2="/tag/lifestyle/"
            linktag3="/tag/music/"
          />
          <EntryFooter leaveCommentHref="/features/" />
          <Author/>
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <FormPost/>
        </div>
      </div>
    </div>
  );
}

export default ColdPlayBenefit;