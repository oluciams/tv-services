import { Button } from "./Button"

export const ItemAddress = () => {
  return(
    <>
      <li className='col-10 list-group-item d-flex justify-content-between shadow p-3 mb-5 bg-body rounded'>
        <div>
          <p className="text-primary">196 Willoughby</p>        
          <small>135 York Street, 11201</small>
        </div>      
        <Button 
          className="btn btn-primary mx-2 my-2" 
          text={'SELECT'}
        />      
      </li>

    </>
  )
}