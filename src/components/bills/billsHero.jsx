import bills from "../../assets/bil.svg";
import hob from "../../assets/hobb.svg";



export default function BillsHero () {
  return (
    <section className='hob pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-5 text-center">
            <span className="hob-bg">Quick, Easy, and Secure payments</span>
            <img src={hob} alt="House of bills" className="img-fluid" />
            <p>Streamline and simplify your money by paying all your bills on one platform. From cable to airlines, electricity to phone bills. We have it all. It's effortless, hassle-free and the best part? You can pay on credit.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-10">
            <img src={bills} alt="House of bills" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
