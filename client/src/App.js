import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Welcome from './pages/Welcome'
import Navbar  from './components/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className ="pages">
          <Routes>
            <Route 
              path = "/"
              element = {<Welcome /> }
              /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
