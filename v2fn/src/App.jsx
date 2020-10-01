import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from '../src/firebase.js'
import LogIn from './components/views/LogIn.jsx';
import List from './components/List/List.jsx';
import store from './utils/store';
import StoreApi from './utils/storeApi'
import { v4 as uuid } from 'uuid'
import InputContainer from './components/input/InputContainer.jsx';
import { makeStyles } from '@material-ui/core/styles'
import Menu from './components/views/menu.jsx';
import Contacts from './components/Contacts.jsx';
import Nav from './components/Nav.jsx';
import SignIn from './components/views/SignIn.jsx'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Welcome from './components/Welcome.jsx';
import { UserProvider } from './components/context/UserContext.js'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#FEFAEE',
    width: '12000px',
    padding: '90px 0px 0px 120px',
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
    list.cards = [...list.cards, newCard];

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
        ...data.lists,
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

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return firebaseUser !== false ? (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <Router>
        <Switch>

          <Route path="/" exact>
            <LogIn />
          </Route>

          <Route path="/registro">
            <SignIn />
          </Route>

          <Route path="/inicio">
            <Welcome />
            <UserProvider>
              <Nav />
            </UserProvider>
            <Contacts />
            <UserProvider>
              <Menu />
            </UserProvider>
          </Route>

          <Route path="/board">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId='app' type='list' direction='horizontal'>
                {(provided) => (
                  <div
                    className={classes.root}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="containerTittleBoard">
                      <div className="containerTittleBoardFila1">
                        <div className="tittleBoard">
                          <h1>App de System C.</h1>
                        </div>
                        <div className="BtnsBoard">
                          <h5 className="btnBoard">Mi tablero</h5>
                          <h5 className="btnBoard">Archivos</h5>
                          <h5 className="btnBoard">Avance equipo</h5>
                        </div>
                      </div>
                      <div className="containerTittleBoardFila1">
                        <h4>Aplicación para medir la productividad de los equipos</h4>
                      </div>
                    </div>
                    <div className="containerLists">
                    {data.listIds.map((listId, index) => {
                      const list = data.lists[listId];
                      return <List list={list} key={listId} iindex={index} />
                    })}
                    <InputContainer type="list" />
                    {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <UserProvider>
              <Nav />
            </UserProvider>
            <Contacts />
            <UserProvider>
              <Menu />
            </UserProvider>
          </Route>

        </Switch>
      </Router>
    </StoreApi.Provider>
  ) : (
      <div>Cargando...</div>
    );

}

export default App;
