import Header from '../Header'
import Sidebar from '../SideBar'
import SavedContext from '../../Context/savedContext'
import Trending from '../Trending Page'

const Trend = () => (
  <SavedContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <div className="page-body">
            <Sidebar />
            <div className={`content ${!lightTheme && 'dark'}`}>
              <Trending />
            </div>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default Trend
