import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './Popper.module.scss';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

const cx = classNames.bind(styles);

const DropdownMenu = ({ items, isOpen, toggleDropdown }) => (
  <div className={cx('dropdown', { open: isOpen })}>
    <table>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className={cx('table-cell')}>
              <a href={item.link}>{item.label}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SocialLinks = () => (
  <div className={cx('social-menu-container')}>
    <ul className={cx('list-social')}>
      <SocialIcon href="https://www.facebook.com/" icon={faFacebookF} title="Facebook" />
      <SocialIcon href="https://x.com/" icon={faTwitter} title="Twitter" />
      <SocialIcon href="https://www.linkedin.com/" icon={faLinkedinIn} title="LinkedIn" />
      <SocialIcon href="https://www.pinterest.com/" icon={faPinterestP} title="Pinterest" />
    </ul>
  </div>
);

const SocialIcon = ({ href, icon, title }) => (
  <li className={cx('icon')}>
    <a href={href} title={title} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
);

const Wrapper = ({ children }) => {
  const [dropdowns, setDropdowns] = useState({
    home: false,
    posts: false,
  });

  const handleToggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const homeItems = [
    { link: "/demo=2", label: "Demo 2" },
    { link: "/demo=3", label: "Demo 3" },
    { link: "/demo=4", label: "Demo 4" },
    { link: "/demo=5", label: "Demo 5" },
    { link: "/demo=6", label: "Demo 6" },
    { link: "/demo=7", label: "Demo 7" },
    { link: "/demo=8", label: "Demo 8" }
  ];

  const postsItems = [
    { link: "/coldplay-beneath/", label: "Video Post" },
    { link: "/back-to-drake/", label: "Audio Post" },
    { link: "/the-cold-weather/", label: "Gallery Post" },
    { link: "/photographers-diary/", label: "Image Post" },
    { link: "/my-exterior-behaviors/", label: "Quote Post" },
    { link: "/long-legs-walking/", label: "Link Post" },
    { link: "/postlayout=full", label: "Post Full Width" },
    { link: "/page-default/", label: "Page Default" },
    { link: "/page-left-sidebar/", label: "Page Left Sidebar" },
    { link: "/page-right-sidebar/", label: "Page Right Sidebar" },
    { link: "/page-full-width-alternate/", label: "Page Full Width Alternate" }
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidenav-block')}>
        <div className={cx('sub-search')}>
          <input type="text" placeholder="SEARCH..." className={cx('search-input')} />
          <button className={cx('search-button')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
          </button>
        </div>
        <div className={cx('primary-menu-container')}>
          <ul className={cx('primary-menu')}>
            <li className={cx('primary-menu-home')}>
              <a href="/"> Home </a>
              <svg
                className={cx('btn-down-arrow', { open: dropdowns.home })}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => handleToggleDropdown('home')}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </li>
            {dropdowns.home && <DropdownMenu items={homeItems} isOpen={dropdowns.home} />}
            <li className={cx('primary-menu-posts')}>
              <a href="#"> Posts </a>
              <svg
                className={cx('btn-down-arrow', { open: dropdowns.posts })}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => handleToggleDropdown('posts')}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </li>
            {dropdowns.posts && <DropdownMenu items={postsItems} isOpen={dropdowns.posts} />}
            <li className={cx('primary-menu-features')}><a href="/features"> Features </a></li>
            <li className={cx('primary-menu-fashion')}><a href="/category/fashion/"> Fashion </a></li>
            <li className={cx('primary-menu-photography')}><a href="/category/photography/"> Photography </a></li>
            <li className={cx('primary-menu-about')}><a href="/about"> About </a></li>
            <li className={cx('primary-menu-contact')}><a href="/contact"> Contact </a></li>
          </ul>
        </div>
        <div className={cx('sub-author')}>
          <div className={cx('widget-title')}> About Me </div>
          <img 
            width="240" 
            height="240" 
            src="https://demo.farost.net/felix/wp-content/uploads/2017/08/about-me.jpg" 
            className={cx('portrait-author')} 
            alt="Felix" 
            decoding="async" 
            fetchpriority="high" 
          />
          <p className={cx('inf-author')}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum...</p>
          <a href="#" className={cx('mom-blogger')}> Mom & Blogger </a>
          <img 
            width="150" 
            height="48" 
            src="http://demo.farost.net/felix/wp-content/uploads/2017/08/my-sign.png" 
            className={cx('signature-author')} 
            alt="Felix" 
            decoding="async" 
            fetchpriority="high" 
          />
          <div className={cx('widget-title')}> Social Me </div>
          <SocialLinks />
          <div className={cx('widget-custom')}>
            <a href="#" className={cx('widget-custom-item')}> Privacy </a>
            <a href="#" className={cx('widget-custom-item')}> Terms </a>
            <a href="#" className={cx('widget-custom-item')}> Advertise </a>
            <a href="#" className={cx('widget-custom-item')}> About </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
