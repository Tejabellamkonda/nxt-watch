import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/Login Page'
import Home from './components/Home Page'
import SavedContext from './Context/savedContext'
import VideoItemDetail from './components/Video Item Details Page'
import Trend from './components/TrendingRoute'
import Game from './components/GamingRoute'
import SavedVideos from './components/Saved Videos Page'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/Not Found Page'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedList: [],
    lightTheme: true,
  }

  addVideo = video => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, video],
    }))
  }

  changeTheme = () => {
    const {lightTheme} = this.state
    this.setState({
      lightTheme: !lightTheme,
    })
  }

  deleteVideo = () => {}

  render() {
    const {savedList, lightTheme} = this.state
    console.log(savedList)
    console.log(lightTheme)
    return (
      <>
        <SavedContext.Provider
          value={{
            lightTheme,
            savedList,
            addVideo: this.addVideo,
            deleteVideo: this.deleteVideo,
            changeTheme: this.changeTheme,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trend} />
            <ProtectedRoute exact path="/gaming" component={Game} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetail}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </SavedContext.Provider>
      </>
    )
  }
}

export default App
