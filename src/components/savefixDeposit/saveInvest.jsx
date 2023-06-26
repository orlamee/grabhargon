import bank from "../../assets/phonehargon.png";
import ysyc from "../../assets/saveinvest.svg";



export default function SaveInvest () {
  return (
    <section className='digi pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-8 mb-3">
            <img src={ysyc} alt="Save & Invest Secure and Regulated Partner" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-6">
            <img src={bank} alt="Your Savings, Your Control!" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5">
            <p className="w-75 mt-5 text-white">Rest easy knowing that your savings are in safe hands. Hargon adheres to strict security measures and regulations to ensure the utmost protection of your funds. We prioritize the security and privacy of our customers, providing you with peace of mind. </p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
