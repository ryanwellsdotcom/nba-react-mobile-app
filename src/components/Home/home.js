import React from 'react';
import NewsSlider from '../widgets/NewsSlider/newsSlider';
import NewsList from '../widgets/NewsList/newsList';
import VideoList from '../widgets/VideoList/videoList';

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{ dots: false }}
      />
      <NewsList
        type="card"
        start={3}
        amount={3}
        loadmore={true}
      />
      <VideoList
        type="card"
        title={true}
        start={3}
        amount={3}
        loadmore={false}
      />
    </div>
  )
}

export default Home;