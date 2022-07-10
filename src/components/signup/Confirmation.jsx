import { Button } from "../Button"

export const Confirmation = () => {
  return(
    <>    
      <h4 className="my-4 py-3">Great news! Your first month&#39;s free!</h4>
      <p>To get set up, just provide your email and phone number and we remind you when the free trial ends.</p>
      <form className="my-5">
        <div className="mb-3 col-6 mx-auto">                       
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email" 
          />        
          <input 
            className="form-control mb-3"
            type="text"
            placeholder="Phone Number" 
          />
        </div>
        <small>I have a prome code!</small>             
      </form>
      <Button         
        className="btn btn-primary btn-lg my-5 py-2 px-4" 
        text={'SUSCRIBE NOW!'}
      />
    </>
  )
}