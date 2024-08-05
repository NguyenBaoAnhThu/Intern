import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { mockPosts } from '../../Data';
import styles from './SearchResult.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('s') || '';
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = mockPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPosts(filteredPosts);
  }, [searchTerm]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('search-result')}>
          <Helmet>
            <title>Search Result For "{searchTerm}" - Felix</title>
          </Helmet>
          <h1 className={cx('title')}>SEARCH RESULTS</h1>
          <p className={cx('search-term')}><i>Your search for: "{searchTerm}"</i></p>
          <div className={cx('posts')}>
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post.id} className={cx('post-item')}>
                  <a href={post.link} className={cx('post-link')}>
                    <h2 className={cx('post-title')}>{post.title}</h2>
                  </a>
                  <p className={cx('post-link')}>Link: <a href={post.link}>{post.link}</a></p>
                  <p className={cx('post-content')}>{post.content}</p>
                </div>
              ))
            ) : (
              <p className={cx('no-results')}>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
