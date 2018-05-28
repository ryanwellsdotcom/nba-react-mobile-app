import React from 'react';
import propTypes from 'prop-types';

import styles from '../articles.css';

const TeamInfo = (props) => {
  return (
    <div className={styles.articleTeamHeader}>
      <div
        className={styles.left}
        style={{
          background: `url('/images/teams/${props.team.logo}')`
        }}
      ></div>
      <div className={styles.right}>
        <div>
          <span>{props.team.city} {props.team.name}</span>
        </div>
        <div>
          <strong>W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}</strong>
        </div>
      </div>
    </div>
  )
}

TeamInfo.propTypes = {
  team: propTypes.shape({
    city: propTypes.string,
    count: propTypes.number,
    description: propTypes.string,
    id: propTypes.isRequired,
    logo: propTypes.string,
    name: propTypes.string,
    poll: propTypes.string // Would use bool however set to string in db.json
  })
};

export default TeamInfo;
