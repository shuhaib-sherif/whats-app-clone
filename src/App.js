import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Sidebar from './components/sidebar/sidebar.component';
import Chat from './components/chat/chat.component';
import Login from './components/login/login.component';

import {useStateValue} from './StateProvider';

import './App.css';

function App() {
    const [{user}] = useStateValue();

  return (
    <div className="app">
        {!user ? (
            <Login />
        ): (
            <div className='app__body'>
                 <Router>
                    <Sidebar />

                    <Switch>

                        <Route path="/rooms/:roomId">
                            <Chat />
                        </Route>

                        <Route path="/">
                            <Chat />
                        </Route>

                    </Switch>
                </Router>
            </div>
        )}

    </div>
  );
}

export default App;
