import { Button } from "../Button"

export const UserDetails = () => {

  return(
    <>
      <h4 className="my-4 py-3">Awesome! Let&#39;s get started with the basics</h4>
      <form className="my-5">
        <div className="mb-3 col-3 mx-auto">                       
          <input
            className="form-control mb-3"
            type="text"
            placeholder="First Name" 
          />        
          <input 
            className="form-control mb-3"
            type="text"
            placeholder="Last Name" 
          />
        </div>           
      </form>    
      <Button         
        className="btn btn-primary btn-lg my-5 py-2 px-4" 
        text={'NEXT'}
      />
    </>
  )
}