import React from 'react';
import styles from "./TagLinks.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TagLinks({ tag1, tag2, tag3, linktag1, linktag2, linktag3 }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tagcloud")}>
        {tag1 && (
          <a href={linktag1} className={cx({ noBorder: !tag2 || !tag3 })}>
            {tag1}
          </a>
        )}
        {tag2 && (
          <a href={linktag2} className={cx({ noBorder: !tag1 || !tag3 })}>
            {tag2}
          </a>
        )}
        {tag3 && (
          <a href={linktag3} className={cx({ noBorder: !tag1 || !tag2 })}>
            {tag3}
          </a>
        )}
      </div>
    </div>
  );
}

export default TagLinks;