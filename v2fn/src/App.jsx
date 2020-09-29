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
import StoreApi from './utils/storeApi'
import { v4 as uuid } from 'uuid'
import InputContainer from './components/input/InputContainer.jsx';
import { makeStyles } from '@material-ui/core/styles'
import Menu from './components/views/menu.jsx';
import Contacts from './components/Contacts.jsx';
import Nav from './components/Nav.jsx';

//import SignIn from './components/view{s/SignIn.jsx';
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: 'red',

  },

}))


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [data, setData] = useState(store);
  const classes = useStyle();
  // const arraydata= data.listIds.map((listId)=>{
  // const list= data.lists[listId]
  // console.log(list)
  //})
  const addMoreCard = (title, listId) => {
    console.log(title, listId);
    const newCardId = uuid();
    console.log(newCardId);
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard]

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.list,
        [newListId]: newList
      },
    };
    setData(newState);
  };
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

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
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
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
            <Menu />
          </Route>

          <Route path="/board">
            <Nav />
            <Contacts />
            <Menu />
            <div className={classes.root}>
              {data.listIds.map((listId) => {
                const list = data.lists[listId];
                return <List list={list} key={listId} />
              })}
              <InputContainer type="list" />
            </div>

          </Route>

        </Switch>
      </Router>
    </StoreApi.Provider>
  ) : (
      <div>Cargando...</div>
    );

}

export default App;
