import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaRegMoon} from 'react-icons/fa'

import MenuPopup from '../Popup Design Files'
import SavedContext from '../../Context/savedContext'
import './index.css'

const Header = props => (
  <SavedContext.Consumer>
    {value => {
      const {lightTheme, changeTheme} = value
      console.log(lightTheme)
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickChangeTheme = () => {
        changeTheme()
      }

      return (
        <>
          <nav className={`nav-header ${lightTheme === false && 'dark'}`}>
            <div className="nav-content">
              {lightTheme ? (
                <Link to="/" className="nav-link">
                  <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              ) : (
                <Link to="/" className="nav-link">
                  <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}

              <div className="navCont">
                <button
                  type="button"
                  className="theme-btn"
                  data-testid="theme"
                  onClick={onClickChangeTheme}
                >
                  <FaRegMoon className="theme-icon" />
                </button>
                <button type="button" className="profile-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile-icon"
                  />
                </button>

                {/* <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>

          */}
                <MenuPopup />

                <button
                  type="button"
                  className="logout-mobile-btn"
                  onClick={onClickLogout}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                    alt="logout icon"
                    className="logout-icon"
                  />
                </button>
              </div>
            </div>
          </nav>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default withRouter(Header)
