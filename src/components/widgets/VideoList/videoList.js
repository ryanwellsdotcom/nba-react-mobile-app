import React, { Component } from 'react';
import styles from './videoList.css';
import axios from 'axios';
import { URL } from '../../../config'
import Button from '../Buttons/buttons';
import VideoTemplate from './videoListTemplate';

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  request = (start, end) => {
    if (this.state.teams < 1) {
      axios.get(`${URL}/teams`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        });
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          videos: [...this.state.videos, ...response.data]
        })
      })
  }

  renderTitle = () => {
    return (
      this.props.title ?
        <h3><strong>NBA</strong> Videos</h3> :
        null
    )
  }

  renderVideos = () => {
    let template = null;

    switch (this.props.type) {
      case 'card':
        template = <VideoTemplate data={this.state.videos} teams={this.state.teams} />
        break;
      default:
        template = null;
    }
    return template;
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  componentDidMount() {
    this.request(this.state.start, this.state.end);
  }

  renderButton = () => {
    return (
      this.props.loadmore ?
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More Videos"
        />
        :
        <Button
          type="loadmore"
          cta="Load More Videos"
          loadMore={() => this.loadMore()}
        // link="/videos"
        />
    )
  }

  render() {
    return (
      <div className={styles.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;