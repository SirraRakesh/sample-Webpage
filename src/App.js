import './App.css';
import Home from './components/home/Home';
import Main from './main/main';
import {Route,Routes,NavLink} from 'react-router-dom'
import Login from './components/login/login';


function App() {
  
  return (
    <div>
      <Main></Main>
      
        {/* <NavLink  to="/">Home</NavLink>

        

        <NavLink  to="/login">login</NavLink>
      

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        
        <Route path='/login' element={<Login></Login>}/>

      </Routes>
     */}
     {/* <ul>
     <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/About'>about</NavLink></li></ul>
    <Routes>
        <Route  path='/' element={<Home/>}/>
        
        <Route path='/About' element={<Login></Login>}/>

      </Routes> */}
    </div>
  );
}

export default App;
