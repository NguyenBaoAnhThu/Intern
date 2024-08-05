import React from "react";
import { Helmet } from "react-helmet";
import styles from "./PhotographerDiary.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import SpecialTittle from "~/components/SpecialTittle";
import Author from "~/components/Author/index";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function PhotographerDiary() {
  return (
    <div>
      <Helmet>
        <title>Photographer's Diary - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Photographer's Diary"
            postDate="13 August 2017"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography/"
            customOverlay={cx(styles.customoverlay)}
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/man-hands-photographer-cameras-770x570.jpg" />
          <div className={cx("entry-summary")}>
            <p>
              I was in Dubai to receive an award from HIPA for my contributions
              to photographic education, and the whole experience was just
              really surreal. I’m covering that part of the trip over on my blog
              at scottkelby.com, but here on exposure I’m going to focus on the
              2-1/2 days I got to shoot (the “half” day was actually 1-hour at
              dawn the first morning I arrived).
            </p>
            <p>
              The shot below is from dawn on our last day there — our new
              friend, cityscape and time-lapse photographer Daniel Cheong, was
              not only kind enough to arrange access to an awesome rooftop for a
              dawn shoot, he was an incredible wealth of knowledge on where and
              what to shoot in Dubai. If only we had met sooner. You know those
              incredible shots of Dubai where you see just the tops of the
              building sticking out of the clouds? Some of those are Daniel’s.
            </p>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. A Bold Text ipsum velit. Duis sed odio
              sit amet nibh vulputate cursus a sit amet mauris. Also See Dawn
              from the rooftop.
            </p>
          </div>
          <div>
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456475719327-39c9a38d984c-770x570.jpg" />
            <p className={cx("caption-text")}>
              Many see a bath as a relaxing end of the day.
            </p>
          </div>
          <div className={cx("entry-summary3")}>
            <p>
              Criteria experience in the field meaningful, democracy global
              health recognize potential solution fairness theory of social
              change. Fight against malnutrition; organization; challenges,
              vaccines liberal accelerate progress.
            </p>
          </div>
          <div className={cx("entry-summary1")}>
          <p>
              Cesar Chavez; free expression; medicine revitalize innovation.
              Safeguards technology health partnership nonprofit; accelerate.
              Generosity life-expectancy donate youth pride Bloomberg inspire
              breakthroughs opportunity honesty. Clean water, economic security,
              agency, grantees giving, Rosa Parks metrics rural making progress.
              Pride reproductive rights participatory monitoring global network{" "}
              <span>Medecins du Monde</span> aid protect. Partner sustainable
              future.
            </p>
            <p>
              The shot below is from dawn on our last day there — our new
              friend, cityscape and time-lapse photographer Daniel Cheong, was
              not only kind enough to arrange access to an awesome rooftop for a
              dawn shoot, he was an incredible wealth of knowledge on where and
              what to shoot in Dubai. If only we had met sooner. You know those
              incredible shots of Dubai where you see just the tops of the
              building sticking out of the clouds? Some of those are Daniel’s.
            </p>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. A Bold Text ipsum velit. Duis sed odio
              sit amet nibh vulputate cursus a sit amet mauris. Also See Dawn
              from the rooftop.
            </p>
          </div>
          <TagLinks
            tag1 = "Design"
            tag2="Lifestyle"
            tag3="Music"
            linktag1="/tag/design/"
            linktag2="/tag/lifestyle/"
            linktag3="/tag/music/"
          />
          <EntryFooter leaveCommentHref="/features/" />
          <Author />
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <FormPost/>
        </div>
      </div>
    </div>
  );
}

export default PhotographerDiary;