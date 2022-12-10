import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import {Toaster} from 'react-hot-toast'
import Cart from './components/Cart';




function App() {
  return (
    


<Router>
      <div>
        <Routes>
          <Route exact path="/" element= {<Home/>}/>
          
          <Route exact path="/login" element= {<Login/>}/>
          <Route exact path="/createUser" element= {<Signup/>}/>
           <Route exact path="/cart" element={<Cart/>}/>

        </Routes>


      </div>
      <Toaster/>
    
    </Router>

   
     
  );
}

export default App;
