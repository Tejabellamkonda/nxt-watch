import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ItemCard from './videoItemCard'
import Header from '../Header'
import Sidebar from '../SideBar'
import SavedContext from '../../Context/savedContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetail extends Component {
  state = {
    videoDetails: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideo()
  }

  onClickRetry = () => {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = ` https://apis.ccbp.in/videos/${id}`
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
      const video = {
        channel: data.video_details.channel,
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        description: data.video_details.description,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
      }

      this.setState({
        videoDetails: video,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 400) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideo()
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state
    return (
      <>
        <div>
          <ItemCard key={videoDetails.id} video={videoDetails} />
        </div>
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
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
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
      <SavedContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <Header />
              <div className="page-body">
                <Sidebar />
                <div className={`content ${!lightTheme && 'dark'}`}>
                  {this.renderVideoDetails()}
                </div>
              </div>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default VideoItemDetail
