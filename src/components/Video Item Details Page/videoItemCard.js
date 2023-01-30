import ReactPlayer from 'react-player'
import SavedContext from '../../Context/savedContext'

const ItemCard = props => (
  <SavedContext.Consumer>
    {value => {
      const {addVideo} = value
      const {video} = props

      const onClickSave = () => {
        addVideo({...video})
      }

      return (
        <>
          <div className="card-bgContainer">
            <ReactPlayer url={video.videoUrl} width="100%" />
            <p>{video.title}</p>
            <div className="video-details-cont">
              <div>
                <p>{video.viewCount} views</p>
                <p>Published at {video.publishedAt}</p>
              </div>
              <div className="likes-cont">
                <button type="button">like</button>
                <button type="button">Dislike</button>
                <button type="button" onClick={onClickSave}>
                  SaveVideo{' '}
                </button>
              </div>
            </div>
            <hr />
            <div className="channel-cont">
              <img
                src={video.channel.profile_image_url}
                alt="channel logo"
                className="profile"
              />
              <div className="description-cont">
                <p>{video.channel.name}</p>
                <p>{video.channel.subscriber_count}</p>

                <p>{video.description}</p>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default ItemCard
