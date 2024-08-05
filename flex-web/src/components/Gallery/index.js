import React from 'react';
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';

const cx = classNames.bind(styles); 

const GalleryComponent = ({ images }) => (
  <div className={cx('gallery-1')}>
    {images.map((image, index) => (
      <a key={index} href={image.linkUrl}><img src={image.imageUrl} alt={`Image ${index}`} /></a>
    ))}
  </div>
);

export default GalleryComponent;
