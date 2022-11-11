import './topbar.css'
import React from 'react';
import{Routes,Route,NavLink,Link} from "react-router-dom"
import Home from '../components/home/Home';
import About from '../components/about/About';
import Login from '../components/login/login';
import Services from '../components/Services/services';
function Topbar(props) {
    return (
        <div>

            <div className="topbar">
                <div className="searchbar">
                    <input className='inputsearch' type="text" placeholder='search here' />
                    <span className="search material-symbols-outlined">
                        search
                    </span>
                </div>
                <div className='topitems'>
                    
                    <ul><li><Link target={''} className='link' to='/home' >Home</Link></li>
                        <li><Link target={''} className='link' to='/About' >About</Link></li>
                        <li><Link target={''} className='link' to='/login' >Login</Link></li>
                        <li><Link target={''} className='link' to='/services' >Services </Link></li>

                    </ul>
                    </div>
                    <div>
                  <Routes>
                   
                    <Route path='/home' element={<Home></Home>}/>
                    <Route path='/About' element={<About></About>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/services' element={<Services></Services>}/>

       
                  
                  </Routes>
                  
                </div>
            </div>
        </div>
    );
    
}

export default Topbar;