import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Search = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      const searchQuery = searchTerm.trim().split(' ').join('+');
      navigate(`/felix/?s=${searchQuery}`);
    }
  };

  return (
    <div className={cx('sub-search')}>
      <form onSubmit={handleSearchSubmit} className={cx('search-form')}>
        <input
          type="text"
          placeholder="SEARCH..."
          className={cx('search-input')}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className={cx('search-button')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
        </button>
      </form>
    </div>
  );
};

export default Search;
