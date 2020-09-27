import React from 'react';
import store from './components/utils/store'

let UserContext = React.createContext();
let { Provider, Consumer } = UserContext;

function UserProvider({ children }) {




    return (
        <Provider value={{
        }}>
          {children}
        </Provider>
      )
    }
    
    export { UserProvider, Consumer as UserConsumer, UserContext }

