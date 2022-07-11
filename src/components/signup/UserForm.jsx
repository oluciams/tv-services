import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const UserForm = () => {
  return(
    <>  
      <h1 className="text-primary my-5 py-3">The Best TV service around!</h1>
      <p className="my-4 fs-5">Are you ready to enjoy ultra-best service?</p>
      <Link to='/userDetails'>
        <Button        
          className="btn btn-primary btn-lg my-4 py-2 px-4" 
          text={`LET'S DO IT!`} 
        />      
      </Link>    
    
    </>
  )
}