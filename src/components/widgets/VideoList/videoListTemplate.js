import React from 'react'
import { Link } from 'react-router-dom';
import styles from './videoList.css';

import CardInfo from '../CardInfo/CardInfo';

const VideoTemplate = (props) => {
  return props.data.map((item, i) => {
    return <Link to={`/videos?id=${item.id}`} key={i}>
      <div className={styles.videoListItem_template}>
        <div className={styles.left} style={{
          background: `url(/images/videos/${item.image}`
        }}>
          <div></div>
        </div>
        <div className={styles.right}>
          <CardInfo teams={props.teams} team={item.team} date={item.date} />
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  });
}

export default VideoTemplate;
