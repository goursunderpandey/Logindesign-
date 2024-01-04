import './App.css';
import Home from './Component/Home';
import Ragister from './Component/Ragister';
import Account from './Component/Account';
import Login from './Component/Login';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Ragister/>}/>
          <Route path='/Account' element={<Account/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
