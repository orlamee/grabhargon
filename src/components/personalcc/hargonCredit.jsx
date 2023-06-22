import life from "../../assets/life-ph.png";




export default function HargonCred () {
  return (
    <section className='hargon-cred pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5 mt-5">
            <h2>Life can shock you. With <span style={{color: "#23A323"}}>Hargon's credit</span>, you can shock it right back.</h2>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-sm-4 mb-3">
           <p className="w-75">Unwanted financial situations can be annoying and tend to catch you unprepared. With Hargon's credit, you never have to go through that again. Respond promptly to any financial emergency and avoid potential see finish.</p>
          </div>
          <div className="col-sm-6">
            <img src={life} alt="credit-card" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
