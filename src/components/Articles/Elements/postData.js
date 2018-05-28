import React from 'react';
import propTypes from 'prop-types';

import styles from '../articles.css';

const PostData = (props) => {

  return (
    <div className={styles.articlePostData}>
      <div>
        Date: <span>{props.data.date}</span>
      </div>
      <div>
        Author: <span>{props.data.author}</span>
      </div>
    </div>
  )
}

PostData.propTypes = {
  data: propTypes.objectOf(propTypes.string),
};

export default PostData;
