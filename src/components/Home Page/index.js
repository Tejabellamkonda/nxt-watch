import Header from '../Header'
import Sidebar from '../SideBar'
import './index.css'
import Banner from '../Banner Page'
import HomePage from '../Home Route'
import SavedContext from '../../Context/savedContext'

const Home = () => (
  <SavedContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <div className="page-body">
            <Sidebar />
            <div className={`content ${!lightTheme && 'dark'}`}>
              <Banner />
              <HomePage />
            </div>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default Home
