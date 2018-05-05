import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../config';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
      .then(response => {
        console.log('slider', response.data)
        this.setState({
          items: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <SliderTemplates data={this.state.items} type={this.props.type} settings={this.props.settings} />
      </div>
    );
  }
}

export default NewsSlider;