import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/newsSlider';
import NewsList from '../../../widgets/NewsList/newsList';


const NewsMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        settings={{ dots: false }}
        start={0}
        amount={3}
      />
      <NewsList
        type="card"
        loadMore={true}
        start={3}
        amount={4}
      />
    </div>
  )
}

export default NewsMain;