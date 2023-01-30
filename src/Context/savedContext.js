import React from 'react'

const SavedContext = React.createContext({
  savedList: [],
  lightTheme: true,

  addVideo: () => {},
  deleteVideo: () => {},
  changeTheme: () => {},
})

export default SavedContext
