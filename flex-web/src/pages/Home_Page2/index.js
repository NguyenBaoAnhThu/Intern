
import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./HomePage2.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";
import AudioPlayer from "~/components/AudioPlayer";
import GalleryComponent from "~/components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);
const images = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1441448770220-76743f9e6af6-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/95cdfeef-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-770x570.jpg",
    linkUrl: "#",
  },
];
function HomePage2() {
  return (
    <div>
      <Helmet>
        <title>Felix – Page 2 – Your Personal Blogging Friend</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <CarouselOverlay
            title="Prefect Backpacking"
            postDate="12 August 2017"
            link="https://www.facebook.com/"
            tag="TRAVEL"
            tagLink="https://www.facebook.com/"
          />
          <div>
            <AudioPlayer />
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
              orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc.
            </p>
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Back To Drake"
            postDate="11 August 2017"
            link="https://www.facebook.com/"
            tag="BUSINESS"
            tagLink="https://www.facebook.com/"
          />
          <div style={{ width: "780px" }}>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/216846955&amp;color=ff5500"
        ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: "100",
              }}
            >
              <a
                href="https://soundcloud.com/octobersveryown"
                title="octobersveryown"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                octobersveryown
              </a>{" "}
              ·
              <a
                href="https://soundcloud.com/octobersveryown/drake-back-to-back-freestyle"
                title="Drake ~ Back To Back Freestyle"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Drake ~ Back To Back Freestyle
              </a>
            </div>
          </div>

          <div className={cx("entry-summary")}>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
              orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc.
            </p>
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Working Hands Pray"
            postDate="10 August 2017"
            link="https://www.facebook.com/"
            tag="BUSINESS"
            tagLink="https://www.facebook.com/"
          />
          <iframe
            width="780"
            height="450"
            src="https://www.youtube.com/embed/YE7VzlLtp-4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div className={cx("entry-summary")}>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
              orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc.
            </p>
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Wordpress Theme"
            postDate="10 August 2017"
            link="https://www.facebook.com/"
            tag="BUSINESS"
            tagLink="https://www.facebook.com/"
          />
          <GalleryComponent images={images} className={cx("gallery-1")} />
          <div className={cx("entry-summary")}>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
              orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc.
            </p>
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Coldplay Beneath"
            postDate="10 August 2017"
            link="https://www.facebook.com/"
            tag="TRAVEL"
            tagLink="https://www.facebook.com/"
          />
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/134757562?h=67a23b0f62" // Đường dẫn nhúng từ Vimeo
            width="780"
            height="450"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className={cx("entry-summary")}>
            <p>
              Cesar Chavez; free expression; medicine revitalize innovation.
              Safeguards technology health partnership nonprofit; accelerate.
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
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="The Breakfast Work"
            postDate="10 August 2017"
            link="https://www.facebook.com/"
            tag="FASHION"
            tagLink="https://www.facebook.com/"
          />
          <iframe
          width="780"
          height="450"
          src="https://www.youtube.com/embed/dKeann_nWIs" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
          <div className={cx("entry-summary1")}>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
              orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc.
            </p>
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <NavLinks
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/"
            olderPostsLink="/Home/Page/3"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage2;
