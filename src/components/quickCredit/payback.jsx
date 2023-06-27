import dashboard from "../../assets/dashboard.png";


export default function Payback () {
  return (
    <section className='pay'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2>Get your <span style={{color: "#23A323" , fontSize: "66px"}}>loan in minutes,</span> <span style={{color: "#FFBD00" , fontSize: "66px"}}>Pay back</span> over 12 months</h2>
            <p className="mt-5 text-black">That financial emergency doesn't have to be around for long. It only<br/>takes a moment to get the perfect solution.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-5 text-center">
            <img src={dashboard} alt="dashboard" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
