import './App.css';
// import Header from './Components/Header';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import ProductList from './Components/ProductList';
import SearchProduct from './Components/SearchProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      {/* <Header/> */}
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
      <Route path="/search">
        <SearchProduct/>
      </Route>
      <Route path="/">
        <ProductList/>
      </Route>
     
     </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
