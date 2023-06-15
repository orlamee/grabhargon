import all from "../../assets/left.png";
import invest from "../../assets/investwith.svg";



export default function Invest () {
  return (
    <section className='inv'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={all} alt="Invest with hargon" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-5">
            <span className="ven">Investors</span>
            <img src={invest} alt="Invest with hargon" className="img-fluid my-5" />
            <p className="w-75">Looking to diversify or make secure investments with amazing returns? Investing in Hargon’s credit gives your investment portfolio mouth-watering short and long-term value while empowering others to meet their financial needs.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
