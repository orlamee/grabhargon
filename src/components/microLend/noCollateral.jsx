import collateral from "../../assets/top.svg";




export default function NoCollateral () {
  return (
    <section className='no-c'>
      <div className='container'>
        <div className="row">
          <div className="coll-card">
            <div className="row justify-content-center">
              <div className="col-sm-4 text-center">
                <img src={collateral} alt="micro-lending" className="img-fluid" />
              </div>
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-sm-8 text-center">
                <h2 className="mb-5"><span style={{color: "#FFBD00"}}>No collateral?</span> No problem</h2>
                <p className="text-white">Our small loans do not require collateral from you, helping you focus on your<br/>business and expanding while we worry about financing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
