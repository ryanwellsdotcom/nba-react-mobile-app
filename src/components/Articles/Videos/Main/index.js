import React from 'react';
import VideosList from '../../../widgets/VideoList/videoList';


const VideosMain = () => {

  return (
    <VideosList
      type="card"
      title={false}
      loadMore={true}
      start={0}
      amount={4}
    />
  )
}

export default VideosMain;