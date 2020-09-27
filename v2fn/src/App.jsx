import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from '../src/firebase.js'
import LogIn from './components/views/LogIn.jsx';
import List from './components/list/List.jsx';
import store from './utils/store';

//import SignIn from './components/views/SignIn.jsx';

function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [data, SetData] = useState(store);
 // const arraydata= data.listIds.map((listId)=>{
   // const list= data.lists[listId]
   // console.log(list)
  //})

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  }, [])

  return firebaseUser !== false ? (
    <Router>
      <Switch>

        <Route path="/" exact>
          <LogIn />
        </Route>

        <Route path="/registro">
          {/* <SignIn /> */}
        </Route>

        <Route path="/board">
          <div>
          {data.listIds.map((listId)=>{
    const list= data.lists[listId]
    return <List  list={list} key={listId}/>
  })}
          </div>
         
        </Route>

      </Switch>
    </Router>
  ) : (
      <div>Cargando...</div>
    );
}

export default App;
