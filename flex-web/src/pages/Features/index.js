import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Features.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import BlockQuote from "~/components/BlockQuote";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpecialTittle from "~/components/SpecialTittle";
import FormPost from "~/components/FormPost/index";


const cx = classNames.bind(styles);

function Features() {
  return (
    <div>
      <Helmet>
        <title>Features - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Features"
            postDate="1 August 2017"

            tag="UNCATEGORIZED"
            tagLink="https://www.facebook.com/"
            customOverlay={cx(styles.customoverlay)}
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457439157612-a1891ff037ff-770x570.jpg" />
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
          <div className={cx("entry-summary3")}>
            <p>
              Criteria experience in the field meaningful, democracy global
              health recognize potential solution fairness theory of social
              change. Fight against malnutrition; organization; challenges,
              vaccines liberal accelerate progress.
            </p>
          </div>
          <div className={cx("entry-summary4")}>
            <div className={cx("entry-summary4-img")}>
              <img src="http://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-570x422.jpg" />
              <p className={cx("caption-text")}>
                For this cat, it’s a nightmare hell ride.
              </p>
            </div>
            <div className={cx("entry-summary4-content")}>
              <p>
                Fluctuation, Action Against Hunger onflict resolution many
                voices civil society. Incubation, carbon emissions reductions,
                invest; donation opportunity social entrepreneurship. Disrupt
                life-expectancy carbon rights policy dialogue resolve global
                organization frontline. Medecins du Monde progressive minority
                democracy social worker natural resources end hunger.
              </p>
              <p>
                Carbon emissions reductions, invest; donation opportunity social
                entrepreneurship. Policy dialogue resolve global organization
                frontline.
              </p>
              <p>
                Accessibility crowdsourcing recognition collaborative
                consumption, nonprofit climate change, institutions pursue
              </p>
            </div>
          </div>
          <div className={cx("entry-summary5")}>
            <p>
              these aspirations fellows. Donors advocate catalyze gun control
              partnership. Meaningful work beneficiaries, new approaches
              vulnerable citizens nutrition global health rural development.
            </p>
          </div>
          <div className={cx("entry-summary6")}>
            <h4>UNORDERED LIST</h4>
            <p>
              Accessibility crowdsourcing recognition
              <a href="#">
                <span> collaborative consumption</span>
              </a>
              , nonprofit climate change, institutions pursue these aspirations
              fellows. Donors advocate catalyze.
            </p>
            <ul>
              <li>Oh my goodness! That’s a whole book.</li>
              <li>The path began so long ago—when I was a child.</li>
              <li>It was almost like ecstasy.</li>
              <li>
                I was profoundly moved by what words could do, how they could
                make me feel.
              </li>
            </ul>
          </div>
          <div className={cx("entry-summary6")}>
            <h4>ORDERED LIST</h4>
            <p>
              Accessibility crowdsourcing recognition collaborative consumption,
              nonprofit climate change, institutions pursue these aspirations
              fellows. Donors advocate catalyze.
            </p>
            <ol>
              <li>
                I didn’t know that I could be a writer. I grew up working class
                and poor.
              </li>
              <li>
                I wasn’t around educated people or people who would ever dream
                of going off.
              </li>
              <li>
                Then I went to college and that was the huge shift for me.
              </li>
              <li>I’m going to be a writer. This is my path.</li>
            </ol>
          </div>
          <div className={cx("entry-summary6")}>
            <h4>ORDERED LIST</h4>
            <p>
              Accessibility crowdsourcing recognition collaborative consumption,
              nonprofit climate change, institutions pursue these aspirations
              fellows. Donors advocate catalyze.
            </p>
            <ol>
              <li>
                I didn’t know that I could be a writer. I grew up working class
                and poor.
              </li>
              <li>
                I wasn’t around educated people or people who would ever dream
                of going off.
              </li>
              <li>
                Then I went to college and that was the huge shift for me.
              </li>
              <li>I’m going to be a writer. This is my path.</li>
            </ol>
          </div>
          <div className={cx("entry-summary7")}>
            <h4>GRID IMAGE GALLERY WITH LIGHTBOX</h4>
            <p>
              Hack Nelson Mandela, significant John Lennon Angelina Jolie
              affordable health care contribution. Elevate; growth, respond,
              collaborative consumption women’s rights. Combat malaria tackling
              incubation; truth; fluctuation shift; dignity innovate
              globalization. Maximize; social. Pride reproductive rights
              participatory monitoring global network Medecins du Monde aid
              protect. Partner sustainable future; social good peace global
              social impact.
            </p>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-570x422.jpg" />
                <p className={cx("caption-text1")}>
                  For this cat, it’s a nightmare hell ride.
                </p>
              </div>
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456587349840-30f5d8581fc8-570x422.jpg" />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456615074700-1dc12aa7364d-570x422.jpg" />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457257626018-77036a3d4da0-570x422.jpg" />
              <div>
                <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-570x422.jpg" />
                <p className={cx("caption-text1")}>
                  Many see a bath as a relaxing end of the day.
                </p>
              </div>
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-570x422.jpg" />
            </div>
          </div>
          <div className={cx("entry-summary8")}>
            <h4>VIDEO EMBEDS</h4>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/134757562?h=67a23b0f62" 
              width="780"
              height="450"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <p>
              Global network vulnerable population, recognize potential lifting
              people up research worldwide fairness metrics. Agenda rights-based
              approach our ambitions immunize aid. Respect advancement NGO
              results leverage, country; celebrate Bill and Melinda Gates social
              impact. Hack; fundraising campaign expanding community ownership
              natural resources equity smart cities free expression. Efficient
              best practices, Peace Corps crisis management inclusive
              capitalism.
            </p>
          </div>
          <TagLinks
            tag1="Art"
            tag2="Business"
            tag3="Design"
            linktag1="/tag/art"
            linktag2="/tag/business"
            linktag3="/tag/design"
          />
          <EntryFooter leaveCommentHref="/features/" />
          <div className={cx("entry-summary9")}>
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/admin-140x140.jpg" />
            <div>
              <div className={cx("entry-summary9-social")}>
                <h4> NIGELLA LOS </h4>
                <ul className={cx("list-social")}>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="#"
                      title="Pinterest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                Honor complexity working families healthcare, international
                development save lives. Efficient best practices, Peace Corps
                crisis management inclusive capitalism.
              </p>
            </div>
          </div>
          <SpecialTittle
          tittle = "YOU MIGHT ALSO LIKE	"
          />
          <FormPost/>
        </div>
      </div>
    </div>
  );
}

export default Features;
