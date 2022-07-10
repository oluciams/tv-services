export const Card = () => {
  return (
    <>  
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Basic</h2>
              <small>Service</small>
              <h1 className="card-text text-primary">30</h1>
              <div className="form-check">
                <input className="form-check-input" type="radio"/>              
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Premium</h2>
              <small>Service</small>
              <h1 className="card-text text-primary">50</h1>
              <div className="form-check">
                <input className="form-check-input" type="radio"/>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


