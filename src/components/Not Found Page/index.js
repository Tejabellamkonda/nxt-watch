import './index.css'
import Header from '../Header'
import Sidebar from '../SideBar'

const NotFound = () => (
  <>
    <Header />
    <div className="page-body">
      <Sidebar />
      <div className="content">
        <div className="not-found-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not found"
            className="not-found-img"
          />
          <h1>Page Not Found</h1>
          <p>we are sorry, the page you requested could not be found.</p>
        </div>
      </div>
    </div>
  </>
)

export default NotFound
