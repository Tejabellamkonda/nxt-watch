import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import './index.css'

const MenuPopup = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <Popup
        modal
        trigger={
          <button type="button" className="logoutButton">
            Logout
          </button>
        }
      >
        {close => (
          <>
            <div className="popup-cont">
              {' '}
              <div>
                <p>Are you sure, you want to logout</p>
              </div>
              <button
                type="button"
                className="trigger-button-close"
                onClick={() => close()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="trigger-button-confirm"
                onClick={onClickLogout}
              >
                Confirm
              </button>
            </div>
          </>
        )}
      </Popup>
    </>
  )
}

export default withRouter(MenuPopup)
