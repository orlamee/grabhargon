
import finance from "../../assets/flex.svg";
import repay from "../../assets/flexrepay.png";


export default function FlexRepay () {
  return (
    <section className='flexreplay pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={finance} alt="finance" className="img-fluid w-100" />
            <p className="mt-5 text-black">Our mortgage loans are flexible and tailored to your financial situation,<br/>giving you breathing room to pay back conveniently.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-10">
            <img src={repay} alt="repay" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
