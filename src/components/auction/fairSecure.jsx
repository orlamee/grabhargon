import bid from "../../assets/bidding.png";


export default function FairSecure () {
  return (
    <section className='auction-hero'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h2 className="mb-5">Fair & <span style={{color: "#23A323"}}>Square</span></h2>
            <p> even terms with all participants. Enjoy transparency <br/>and embark on an adventure with incredible spoils</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 text-center">
            <img src={bid} alt="fair and secure" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
