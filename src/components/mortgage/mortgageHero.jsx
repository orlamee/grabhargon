import mortgage from "../../assets/mortgage.svg";



export default function MortgageHero () {
  return (
    <section className='mo-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <h2 className="text-white">Your <span className="ally">dream house</span> might be a <span className="ally">credit away</span></h2>
            <p className="mt-4 text-white">Experience the excitement of owing your home with Hargon’s credit solutions</p>
          </div>
          <div className="col-sm-6">
            <img src={mortgage} alt="mortgage" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
