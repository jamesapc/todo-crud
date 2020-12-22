import React from 'react'
import firebase from 'firebase'

export const StoreContext = React.createContext()

const firebaseConfig = {
  apiKey: "AIzaSyAQWNmdYVPD_VuX5v6KJRK3KnEM3A_oVs8",
    authDomain: "react-authen-firebase.firebaseapp.com",
    databaseURL: "https://react-authen-firebase.firebaseio.com",
    projectId: "react-authen-firebase",
    storageBucket: "react-authen-firebase.appspot.com",
    messagingSenderId: "1045489285569",
    appId: "1:1045489285569:web:09a87d2505a54611e51740"
}

const app = firebase.initializeApp(firebaseConfig);

const contextValue = {
  firebaseApp: app
}

const TodoContext = ({ children }) => {
  return (
    <StoreContext.Provider value={contextValue}>
      { children }
    </StoreContext.Provider>
  )
}

export default TodoContext
