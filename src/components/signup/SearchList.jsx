import { Button } from "../Button"

export const SearchList = () => {

  const name = 'Alejandro'
  return(
    <>   
      <h4 className="mt-5">Pleasure to meet you, {name} !</h4>
      <h4>What is your install address?</h4>
      <form className="row mt-5 pt-4 aliang-item-center">
        <div className="col-6">
          <input
            className="form-control" 
            type="search" 
            placeholder="Street Address, City"
          />
          <small>I can&#39;t find my address</small> 
        </div>
        <div className="col-2">
          <input 
            className="form-control" 
            type="search" 
            placeholder="Apt #" 
          />
        </div>
      </form>        
      <Button 
        className="btn btn-primary btn-lg my-5 py-2 px-5" 
        text={'YES!'}
      />       
    </>
  )
}