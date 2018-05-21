import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './CardInfo.css';

const CardInfo = (props) => {
  console.log(props.team)
  const teamName = (teams, team) => {

    let data = teams.find((item) => {

      return item.id === team;
    })
    if (data) {
      return data.name;
    }
  }

  return (
    <div className={styles.cardInfo}>
      <span className={styles.teamName}>
        {teamName(props.teams, props.team)}
      </span>
      <span className={styles.date}>
        <FontAwesome className={styles.icon} name="calendar-o" />
        {props.date}
      </span>
    </div>
  )
}

export default CardInfo;