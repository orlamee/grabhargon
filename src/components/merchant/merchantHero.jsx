import merchant from "../../assets/merchant.png";




export default function MerchantHero () {
  return (
    <section className='merchant-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-7">
          <img src={merchant} alt="merchant" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5">
            <h2><span style={{color: "#228B22"}}>More customers,</span> <span style={{color: "#FFA529"}}>More credit</span> and infinite possibilities for your business</h2>
            <button
              className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-5"
              href="#!"
            >
              Sell on Hargon’s Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
    
  )
}
