import {Link} from 'react-router-dom'
import './index.css'

const VideoCard = props => {
  const {eachVideo} = props
  console.log(eachVideo)
  return (
    <>
      <Link to={`/videos/${eachVideo.id}`} className="item-Link">
        <li className="card-cont">
          <img
            src={eachVideo.thumbnailUrl}
            className="image"
            alt="video thumbnail"
          />
          <div className="profile-cont">
            <img
              src={eachVideo.profileImageUrl}
              alt="channel logo"
              className="profile"
            />
            <div>
              {' '}
              <p>{eachVideo.title}</p>
              <p>{eachVideo.channel.name}</p>
              <p>{eachVideo.viewCount} views</p>
              <p>Published at {eachVideo.publishedAt}</p>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default VideoCard
