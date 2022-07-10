import { Button } from '../Button'

export const UserForm = () => {
  return(
    <>
    <section className='container-fluid col-4 text-center py-3'>  
      <h1 className='text-primary my-4 py-3'>The Best TV service around!</h1>
      <p className='my-4 fs-5'>Are you ready to enjoy ultra-best service?</p>
      <Button
        fn={() => console.log('boton')} 
        className='btn btn-primary btn-lg my-4 py-2 px-4' 
        text={`LET'S DO IT!`} 
      />
      </section>
    </>
  )
}