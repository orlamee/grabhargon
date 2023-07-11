import ads from "../../assets/ads.png";
import TextLoop from "react-text-loop";




export default function DigitalPayment () {
  return (
    <section className='dp pb-0 pe-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0" style={{marginTop: "135px"}}>
            <TextLoop mask={true}>
              <h2>Ads</h2>
              <h2>Digital</h2>
            </TextLoop>
            <h6 className="mt-4 text-white">Payment</h6>
            <p className="text-white mb-4 mt-5">Pay for Ads with Ease</p>
            <p className="text-white w-75">Take out and pay for Ads on google, facebook, and other social media platforms using our Hargon credit card. Enjoy hassle free payment solutions while expanding your business reach</p>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={ads} alt="ads payment" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
