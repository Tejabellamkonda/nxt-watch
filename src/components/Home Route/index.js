import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import VideoCard from './videoCard'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomePage extends Component {
  state = {
    videosList: '',
    apiStatus: apiStatusConstants.initial,
    search: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickRetrybtn = () => {
    this.getHomeVideos()
  }

  onSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {search} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',

      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const videoDetails = data.videos.map(item => ({
        channel: item.channel,
        id: item.id,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
        profileImageUrl: item.channel.profile_image_url,
      }))
      this.setState({
        videosList: videoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 400) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            className="no-saved-image"
          />
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickRetrybtn}
          >
            Retry
          </button>
        </div>
      )
    }
    return (
      <>
        <ul className="videosContainer">
          {videosList.map(eachItem => (
            <VideoCard key={eachItem.id} eachVideo={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  renderFailureView = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt=" failure view"
      />

      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button type="button" className="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color="blue"
        height="50"
        width="50"
        data-testid="loader"
      />
    </div>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div className="form-field">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onSearchInput}
          />
          <button
            type="button"
            className="search-btn"
            onClick={this.onClickSearch}
            data-testid="searchButton"
          >
            Search
          </button>
        </div>
        <div>{this.renderVideoDetails()}</div>
      </>
    )
  }
}

export default HomePage
