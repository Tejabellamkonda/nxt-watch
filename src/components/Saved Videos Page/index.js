import Header from '../Header'
import Sidebar from '../SideBar'
import SavedContext from '../../Context/savedContext'
import SavedListView from '../SavedListVideos'

const SavedVideos = () => (
  <SavedContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <div className="page-body">
            <Sidebar />
            <div className={` content ${!lightTheme && 'dark'}`}>
              <div>
                <h1>Saved Videos</h1>
              </div>
              <SavedListView />
            </div>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default SavedVideos
