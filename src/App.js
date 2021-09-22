import './App.css';
import Header from './Components/Header';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {/* <h2>E-Commerce Project</h2> */}
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/add">
        <AddProduct/>
      </Route>
      <Route path="/update">
        <UpdateProduct/>
      </Route>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
