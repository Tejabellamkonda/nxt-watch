import {Component} from 'react'
import {FaTimes} from 'react-icons/fa'
import './index.css'

class Banner extends Component {
  state = {
    showbanner: true,
  }

  onClickClose = () => {
    this.setState({
      showbanner: false,
    })
  }

  render() {
    const {showbanner} = this.state
    return (
      <>
        {showbanner && (
          <div className="banner-container" data-testid="banner">
            <div className="banner-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
                className="logo"
              />
              <button
                className="close-btn"
                type="button"
                onClick={this.onClickClose}
                data-testid="close"
              >
                <FaTimes />
              </button>
            </div>
            <p>Buy Nxt Watch Premium</p>
            <button type="button" className="get-btn">
              GET IT NOW
            </button>
          </div>
        )}
      </>
    )
  }
}

export default Banner
