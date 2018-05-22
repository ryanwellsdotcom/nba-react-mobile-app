import React from 'react';
import { Link } from 'react-router-dom';

import styles from './buttons.css';

const Buttons = (props) => {
  let template = null;
  switch (props.type) {
    case 'loadmore':
      template = (
        <button className={styles.btn_more} onClick={props.loadMore}>
          {props.cta}
        </button>
      );
      break;
    case 'linkto':
      template = (
        <Link to={props.link} className={styles.btn_more}>
          {props.cta}
        </Link>
      )
      break;
    default:
      template = null;
  }
  return template;
}

export default Buttons;