import {Link, withRouter} from 'react-router-dom'
import './index.css'

const SavedVideoItem = props => {
  const {videoDetail} = props
  console.log(videoDetail)

  return (
    <>
      <Link to={`/videos/${videoDetail.id}`} className="item-Link">
        <div className=" saved-card">
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
        </div>
      </Link>
    </>
  )
}

export default withRouter(SavedVideoItem)
