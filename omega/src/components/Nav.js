import './Nav.css'
import lupa from './lupa.png'

export default ()=>{
    return(
       <div className='nav--principal'>
        <ul>
         <li>Popular</li>
         <li>Drama</li>
         <li>Ação</li>
         <li>Aventura</li>
         <li>Comédia</li>
         <li>Crime</li>
         <li>Fantasia</li>
         <li>Família</li>
         <li><a href="/">
             <img  src={lupa}/>
            </a></li>

          </ul>
       </div>
    )
}