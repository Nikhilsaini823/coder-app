import { About } from './About';
import Home from './Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Login } from './Login';
import { Register } from './Register';
import { Todo } from './Todo';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Home />}></Route>
          <Route path = "/about" element={<About />}></Route>
          <Route path = "/card1" element ={<Card1/>}></Route>
          <Route path = "/card2" element ={<Card2/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
          <Route path = "/register" element={<Register/>}></Route>
          <Route path = "/todo" element={<Todo/>}></Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App;
