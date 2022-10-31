import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import hook auth
import { useAuthContext } from './hooks/useAuthContext'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Navbar  from './components/Navbar'
import ActivityList  from './components/ActivityList'
//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:"+process.env.PORT+"/graphql",
  cache: new InMemoryCache()
});

function App() {
  //get user
   const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className ="pages">
          <Routes>
            <Route 
              path = "/"
              element = { user ? <Welcome /> : <ApolloProvider client={client}>
              <ActivityList></ActivityList>
            </ApolloProvider> }
              /> 
              <Route
              path = "/login"
              element = { !user ? <Login /> : <Navigate to = "/" /> }
              />
              <Route
              path = "/signup"
              element = { !user ? <Signup /> : <Navigate to = "/" /> }
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
