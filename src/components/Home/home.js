import React from 'react';
import NewsSlider from '../widgets/NewsSlider/newsSlider';
import NewsList from '../widgets/NewsList/newsList';

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
    </div>
  )
}

export default Home;