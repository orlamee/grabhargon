import bank from "../../assets/save-money.png";
import ysyc from "../../assets/ysyc.svg";



export default function DigitalBank () {
  return (
    <section className='digi'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <img src={ysyc} alt="Your Savings, Your Control!" className="img-fluid" />
            <p className="w-75 mt-5 text-white">Hargon puts you in the driver's seat of your savings journey. You have full control over your funds, with the ability to deposit or withdraw as needed, set your favorable withdrawal date and watch your money grow. </p>
          </div>
          <div className="col-sm-6">
            <img src={bank} alt="Your Savings, Your Control!" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
