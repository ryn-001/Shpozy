import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Route,Routes} from "react-router-dom"
import Register from './components/Register';
import Login from "./components/Login";
import Products from "./components/Products";
import ipConfig from "./ipConfig.json";

export const config = {
  endPoint : `http:${ipConfig.workspace}:8082/api/v1`
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Products}/>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </div>
  );
}

export default App;
