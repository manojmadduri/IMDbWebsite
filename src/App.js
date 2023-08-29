import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Title from './components/Title'; 
// Commonjs
// const Flickity = require('react-flickity-component');

 
function App(){
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          {/* <Route path='Title' Component={Title}></Route> */}
          <Route path="/title/:id" Component={Title} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
