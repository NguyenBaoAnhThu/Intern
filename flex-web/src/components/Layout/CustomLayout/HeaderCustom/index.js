
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import classNames from "classnames/bind";
import styles from "./HeaderCustom.module.scss";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function HeaderCustom({ tableCellClassName ,tableCellClassName3,tableCellClassName4,tableCellClassName5}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchButtonRef = useRef(null);
  const tippyRef = useRef(null);
  
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleClickOutsideSearch = (event) => {
    if (
      isSearchOpen &&
      tippyRef.current &&
      !tippyRef.current.querySelector('.sub-search').contains(event.target) &&
      !searchButtonRef.current.contains(event.target)
    ) {
      setIsSearchOpen(false); 
    }
  };

  const handleOutsideClick = (instance, event) => {
    if (searchButtonRef.current && !searchButtonRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideSearch);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSearch);
    };
  }, []);
  
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(true);
  };

  const handleHide = () => {
    setVisible(false);
  };
  
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('social-menu-container')}>
            <ul className={cx('list-social')}>
              <li className={cx('icon')}>
                <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="#" title="Pinterest" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </li>
            </ul>
          </div>
          <div className={cx('primary-menu-container')}>
            <ul className={cx('primary-menu')}>
              <Tippy 
                interactive={true}
                content={
                  <div className={cx('sub-home')}>
                    <table>       
                      <tbody>
                        <tr><td className={cx('table-cell')}><a href="/demo=2">Demo 2</a></td></tr>
                        <tr><td className={cx('table-cell')}><a href="/demo=3">Demo 3</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName3)}><a href="/demo=4">Demo 4</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName4)}><a href="/demo=5">Demo 5</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName5)}><a href="/demo=6">Demo 6</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/demo=7">Demo 7</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/demo=8">Demo 8</a></td></tr>
                      </tbody>
                    </table>
                  </div>
                }
                placement="bottom"
                delay={[0, 0]}
                duration={[0, 0]}
              >
                <li className={cx('primary-menu-home')}>
                  <a href="#" onClick={handleClick}>Home</a>
                  <svg className={cx('btn-down-arrow')}
                    xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </li>
              </Tippy>
              <Tippy
                interactive
                content={
                  <div className={cx('sub-home')}>
                    <table>       
                      <tbody>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/coldplay-beneath/">Video Post</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/back-to-drake/">Audio Post</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/the-cold-weather/">Gallery Post</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/photographers-diary/">Image Post</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/my-exterior-behaviors/">Quote Post</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/long-legs-walking/">Link Post</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/postlayout=full">Post Full Width</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/page-default/">Page Default</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/page-left-sidebar/">Page Left Sidebar</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/page-right-sidebar/">Page Right Sidebar</a></td></tr>
                        <tr><td className={cx('table-cell', tableCellClassName)}><a href="/page-full-width-alternate/">Page Full Width Afternate</a></td></tr>
                      </tbody>
                    </table>
                  </div>
                }
                placement="bottom"
                delay={[0, 0]}
                duration={[0, 0]}
              >
                <li className={cx('primary-menu-posts')}>
                  <a href="#">Posts</a>
                  <svg className={cx('btn-down-arrow')}
                    xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </li>
              </Tippy>
              <li className={cx('primary-menu-features')}><a href="/features">Features</a></li>
              <li className={cx('primary-menu-fashion')}><a href="/category/fashion/">Fashion</a></li>
              <li className={cx('primary-menu-photography')}><a href="/category/photography/">Photography</a></li>
              <li className={cx('primary-menu-about')}><a href="/about">About</a></li>
              <li className={cx('primary-menu-contact')}><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className={cx('extra-menu-container')}>
            <ul className={cx('list-extra-menu')}>
              <Tippy
                interactive={true}
                content={
                  <div className={cx('sub-search')}>
                    <input type="text" placeholder="SEARCH..." className={cx('search-input')} />
                    <button className={cx('search-button')}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                    </button>
                  </div>
                }
                placement="bottom"
                visible={isSearchOpen}
                delay={[0, 0]}
                duration={[0, 0]}
                onClickOutside={handleOutsideClick}
              >
                <li>
                  <button ref={searchButtonRef} className={cx('search-btn')} onClick={handleSearchToggle}>
                    <FontAwesomeIcon icon={isSearchOpen ? faTimes : faMagnifyingGlass} />
                  </button>
                </li>
              </Tippy>
              <li>
                <button className={cx('list-menu-btn')} onClick={handleShow}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </li>
              {visible && (
                <>
                  <div className={cx('overlay', { show: visible })} onClick={handleHide} />
                  <div className={cx('sub-list-menu')}>
                    <PopperWrapper />
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCustom;
