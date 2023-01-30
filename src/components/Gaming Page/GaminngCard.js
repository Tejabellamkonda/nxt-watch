import {Link} from 'react-router-dom'
import './index.css'

const GamingCard = props => {
  const {gameDetail} = props
  return (
    <>
      <Link to={`/videos/${gameDetail.id}`} className="item-Link">
        <li className="card-cont">
          <img
            src={gameDetail.thumbnailUrl}
            className="image"
            alt="video thumbnail"
          />
          <p>{gameDetail.title}</p>

          <p>{gameDetail.viewCount} views</p>
        </li>
      </Link>
    </>
  )
}

export default GamingCard
