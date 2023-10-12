
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<Signup/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
