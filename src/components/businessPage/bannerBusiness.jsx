
import banner from "../../assets/best.svg";
import loan from "../../assets/business.svg";
import why from "../../assets/fuel.svg";


export default function BannerBusiness () {
  return (
    <section className='personalbg'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={loan} alt="personal" className="img-fluid" />
            <img src={why} alt="title" className="img-fluid mt-4 mb-4" />
            <p className="w-75">Use Hargon’s flexible and reliable lending solutions to power up your business for success. Our lending solutions offer many options for your business to get ahead in an increasingly competitive industry.</p>
            <button
              className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-4"
              href="#!"
            >
              Get Started
            </button>
          </div>
          <div className="col-sm-6">
            <img src={banner} alt="banner" className="img-fluid w-100 " />
          </div>
        </div>
      </div>
    </section>
    
  )
}
