import Header from '../Header'
import Sidebar from '../SideBar'
import SavedContext from '../../Context/savedContext'
import Gaming from '../Gaming Page'

const Game = () => (
  <SavedContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <div className="page-body">
            <Sidebar />
            <div className={`content ${!lightTheme && 'dark'}`}>
              <Gaming />
            </div>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default Game
