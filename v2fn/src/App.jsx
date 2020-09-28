import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {auth } from '../src/firebase.js'
import Contacts from './components/Contacts.jsx';
import Nav from './components/Nav.jsx';
import LogIn from './components/views/LogIn';
// import SignIn from './components/views/SingIn';

function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
      auth.onAuthStateChanged(user => {
          console.log(user)
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
  }, [])

  return firebaseUser !== false ?(
      <Router>
        <Switch>
          
          <Route path="/" exact>
            <LogIn />
          </Route>

          <Route path="/registro">
            {/* <SignIn /> */}
          </Route>

          <Route path="/inicio">
            <Nav />
            <Contacts />
          </Route>

        </Switch>
      </Router>
  ):(
    <div>Cargando...</div>
  );
}

export default App;
