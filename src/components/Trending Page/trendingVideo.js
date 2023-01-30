import {Link} from 'react-router-dom'
import './index.css'

const TrendingVideo = props => {
  const {videoDetail} = props
  return (
    <>
      <Link to={`/videos/${videoDetail.id}`} className="item-Link">
        <li className="video-card">
          <img
            src={videoDetail.thumbnailUrl}
            alt="video thumbnail"
            className="trend-image"
          />
          <div className="content">
            <p>{videoDetail.title}</p>
            <p>{videoDetail.channel.name}</p>
            <p>{videoDetail.viewCount} views</p>

            <p>Published at {videoDetail.publishedAt}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default TrendingVideo
