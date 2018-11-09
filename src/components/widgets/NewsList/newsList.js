import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { URL } from '../../../config';
import Button from '../Buttons/buttons';
import CardInfo from '../../widgets/CardInfo/CardInfo';
import styles from './newsList.css';

class NewsList extends Component {

  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentDidMount() {
    this.request(this.state.start, this.state.end)
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        })
    }

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items, ...response.data],
          start,
          end
        })
      })
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  renderNews = (type) => {
    let template = null;

    switch (type) {
      case ('card'):
        template = this.state.items.map((item, i) => {
          return (
            <CSSTransition
              key={i}
              classNames={{
                enter: styles.newslist_wrapper,
                enterActive: styles.newslist_wrapper__enterActive
              }}
              timeout={400} // css transitions must match
            >
              <div>
                <div className={styles.newslist_item}>
                  <Link to={`/articles/${item.id}`}>
                    <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          )
        });
        break;
      case ('cardMain'):
        template = this.state.items.map((item, i) => {
          return (
            <CSSTransition
              key={i}
              classNames={{
                enter: styles.newslist_wrapper,
                enterActive: styles.newslist_wrapper__enterActive
              }}
              timeout={400} // css transitions must match
            >
              <Link to={`/articles/${item.id}`}>
                <div className={styles.flex_wrapper}>
                  <div className={styles.left}
                    style={{
                      background: `url('/images/articles/${item.image}')`
                    }}>
                    <div></div>
                  </div>
                  <div className={styles.right}>
                    <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </CSSTransition>
          )
        });
        break;
      default:
        template = null;
    }
    return template;
  }

  render() {
    return (
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <div>
          <Button
            type="loadmore"
            loadMore={() => this.loadMore()}
            cta="Load More News"
          />
          {/* <button onClick={() => this.loadMore()} className={styles.newslist_loadmore}>Load More</button> */}
        </div>
      </div>
    );
  }
}

export default NewsList;