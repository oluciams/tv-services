import { Button } from "../Button"
import { Card } from "../Card"

export const SelectPlan = () => {
  return(
    <>
      <h2>Basic Premium</h2>
      <Card />
      <Button 
        className="btn btn-primary mx-2 my-2" 
        text={'I AM READY!'}
      />
    </>
  )
}