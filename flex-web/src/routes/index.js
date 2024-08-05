import Home from "~/pages/Home";
import HomePage2 from "pages/Home_Page2";
import Demo2 from "pages/Demo2";
import Demo3 from "pages/Demo3";
import Demo4 from "pages/Demo4";
import Demo5 from "pages/Demo5";
import Demo6 from "pages/Demo6";
import Demo7 from "pages/Demo7";
import Demo8 from "pages/Demo8";
import About from "pages/About";
import Contact from "pages/Contact";
import Features from "pages/Features";
import Error from "pages/Error";
import Business from "pages/Business";
import Fashion from "pages/Fashion";
import Featured from "pages/Featured";
import Photography from "pages/Photography";
import TravelCategogy from "pages/TravelCategory";
import Uncategorized from "pages/Uncategorized";
import Art from "pages/Art/index";
import ArtPage2 from "pages/ArtPage2";
import BackToDrake from "pages/Posts/BackToDrake/index";
import ColdPlayBenefit from "pages/Posts/ColdPlayBenefit/index";
import TheColdWeather from "pages/Posts/TheColdWeather/index";
import PhotographerDiary from "pages/Posts/PhotographerDiary/index";
import MyExteriorBehaviors from "pages/Posts/MyExteriorBehaviors/index";
import LongLegsWalking from "pages/Posts/LongLegsWalking/index";
import PostFullWidth from "pages/Posts/PostFullWidth/index";
import PageDefault from "pages/Posts/PageDefault/index";
import PageLeftSidebar from "pages/Posts/PageLeftSidebar/index";
import PageRightSidebar from "pages/Posts/PageRightSidebar/index";
import PageFullWidth from "pages/Posts/PageFullWidth/index";
import SearchResult from "pages/SearchResult/index";
import VintageCities from "pages/Posts/VintageCities/index";
import ShoeWithoutYou from "pages/Posts/ShoeWithoutYou/index";
import WomenEnterprenuer from "pages/Posts/WomenEnterprenuer/index";

const publicRouters = [
  // không cần đăng nhập vẫn xem được
  { path: "/", component: Home },
  { path: "/Home/Page/2", component: HomePage2 },
  { path: "/demo=2", component: Demo2, layout: null },
  { path: "/demo=3", component: Demo3, layout: null },
  { path: "/demo=4", component: Demo4, layout: null },
  { path: "/demo=5", component: Demo5, layout: null },
  { path: "/demo=6", component: Demo6, layout: null },
  { path: "/demo=7", component: Demo7, layout: null },
  { path: "/demo=8", component: Demo8, layout: null },
  { path: "/about", component: About, layout: null },
  { path: "/contact", component: Contact, layout: null },
  { path: "/postlayout=full", component: PostFullWidth, layout: null },
  { path: "/page-default/", component: PageDefault, layout: null ,  },
  { path: "/page-left-sidebar/", component: PageLeftSidebar, layout: null ,  },
  { path: "/page-right-sidebar/", component: PageRightSidebar, layout: null ,  },
  { path: "/page-full-width-alternate/", component: PageFullWidth, layout: null ,  },
  {
    path: "/features",
    component: Features,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      featuresClassName: "custom-features-class",
    },
  },
  { path: "/wp-comments-post.php", component: Error, layout: null },
  {
    path: "/category/business",
    component: Business,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "BUSINESS",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameBusiness: "custom-business-class" },
  },
  {
    path: "/category/fashion",
    component: Fashion,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "FASHION",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameFashion: "custom-fashion-class" },
  },
  {
    path: "/category/featured",
    component: Featured,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "FEATURED",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameFeatured: "custom-featured-class" },
  },
 {
    path: "/category/photography",
    component: Photography,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "PHOTOGRAPHY",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNamePhotography: "custom-photography-class" },
  },
  {
    path: "/category/travel",
    component: TravelCategogy,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "TRAVEL",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameTravel: "custom-travel-class" },
  },
  {
    path: "/category/uncategorized",
    component: Uncategorized,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "UNCATEGORIZED",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameUncategorized: "custom-uncategorized-class" },
  },
  {
    path: "/tag/art/",
    component: Art,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "ART",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/art/page/2/",
    component: ArtPage2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "ART",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/back-to-drake/",
    component: BackToDrake,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName10 : "custom-audio-posts"
    },
  },
  {
    path: "/coldplay-beneath/",
    component: ColdPlayBenefit,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName9 : "custom-video-posts"
    },
  },
  {
    path: "/the-cold-weather/",
    component: TheColdWeather,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName12 : "custom-gallery-post"
    },
  },
  {
    path: "/photographers-diary/",
    component: PhotographerDiary,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName13 : "custom-image-post"
    },
  },
  {
    path: "/my-exterior-behaviors/",
    component: MyExteriorBehaviors,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName14 : "custom-quote-post"
    },
  },  
  {
    path: "/long-legs-walking/",
    component: LongLegsWalking,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName15 : "custom-link-post"
    },
  }, 
  {
    path: "/vintage-cities/",
    component: VintageCities,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
    },
  }, 
  {
    path: "/shoe-without-you/",
    component: ShoeWithoutYou,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/women-enterprenuer/",
    component: WomenEnterprenuer,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
    },
  }, 
  {
    path: "/felix",
    component: SearchResult,
    layout: SearchResult,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "SEARCH RESULTS",
},
];

const privateRouters = [
  // nếu không đăng nhập thì dẫn tới trang login
];

export { publicRouters, privateRouters };
