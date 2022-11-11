import './Body.css'

function Body(props) {
    return (
        <div className='body'>
            
        <div className='background'>
         <img src="Background.jpg" alt=""></img>  
         </div>
         <div className='mainsearch'>
         <div className="searchengine">
                Search engine
            </div>
         <input className='searchinput' type="text" placeholder='enter your query or url' />
         <span className="searchicon material-symbols-outlined">search </span>

         </div>
    </div>
        
    );
}

export default Body;