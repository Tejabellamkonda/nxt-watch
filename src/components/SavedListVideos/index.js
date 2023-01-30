import SavedContext from '../../Context/savedContext'
import SavedVideoItem from '../Saved Videos Page/savedVideos'
import './index.css'

const SavedListView = () => (
  <SavedContext.Consumer>
    {value => {
      const {savedList} = value
      if (savedList.length !== 0) {
        return (
          <ul>
            {savedList.map(item => (
              <SavedVideoItem key={item.id} videoDetail={item} />
            ))}
          </ul>
        )
      }
      return (
        <>
          <div className="no-saved-videos-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
              className="no-saved-image"
            />
            <h1>No saved videos found</h1>
            <p>Save your videos by clicking a button</p>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default SavedListView
