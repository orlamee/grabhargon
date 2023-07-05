import lpo from "../../assets/lpo.png";


export default function LPOHero () {
  return (
    <section className='lpo-hero pb-0'>
      <div className='container'>
        <div className="row justify-content-between" style={{marginTop: "-75px"}}>
          <div className="col-sm-5">
            <h2>Unleash your <span style={{color: "#23A323"}}>business’ potential</span></h2>
          </div>
          <div className="col-sm-5 mt-4">
            <p>Are you involved in the supply business, catering to incredible sectors such as oil and gas, telecoms, multinationals, banks, or government agencies? Look no further! Hargon LPO financing is here to support your business growth by providing specialized financing solutions tailored to meet your unique needs.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-11 text-center">
            <img src={lpo} alt="lpo" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
