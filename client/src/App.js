import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
// import hook auth
import { useAuthContext } from './hooks/useAuthContext'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Navbar  from './components/Navbar'
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
              element = { user ? <Welcome /> : <Navigate to ="/login" /> }
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
