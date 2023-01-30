import {Link} from 'react-router-dom'
import SavedContext from '../../Context/savedContext'

const Sidebar = () => (
  <SavedContext.Consumer>
    {value => {
      const {lightTheme} = value

      return (
        <div className={`sidebar ${lightTheme === false && 'dark'}`}>
          <ul className="ul-cont">
            <Link to="/" className="link-style">
              {' '}
              <li className="li-item">Home</li>
            </Link>
            <Link to="/trending" className="link-style">
              <li className="li-item">Trending</li>
            </Link>
            <Link to="/gaming" className="link-style">
              <li className="li-item">Gaming</li>
            </Link>
            <Link to="/saved-videos" className="link-style">
              <li className="li-item">Saved videos</li>
            </Link>
          </ul>
          <div>
            <p>CONTACT US</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="logos"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="logos"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="logos"
            />
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </div>
        </div>
      )
    }}
  </SavedContext.Consumer>
)

export default Sidebar
