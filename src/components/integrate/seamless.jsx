import bg from "../../assets/seamless.png";



export default function Seamless () {
  return (
    <section className=''>
      <div className="seam-less">
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-sm-10 text-center">
              <h2 className="mb-5"><span style={{color: "#23A323"}}>Seamless</span> Transactions</h2>
              <p>Make transactions between you and your customers seamless,<br/>transparent, and instant using Hargon's lending services.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 px-0">
              <img src={bg} alt="bg" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
