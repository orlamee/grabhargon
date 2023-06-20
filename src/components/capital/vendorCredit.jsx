import vendor from "../../assets/vendor.svg";
import vc from "../../assets/vcredit.svg";



export default function VendorCredit () {
  return (
    <section className='vc-sec pb-0'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-4 mb-3">
            <img src={vendor} alt="vendor credit" className="img-fluid" />
          </div>
          <div className="col-sm-4 mt-5">
            <p className="mb-3">Need help with materials to run your business?</p>
            <p>Get what you need from our approved vendors on Hargon’s marketplace to get your business, up, running, and profitablev</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <img src={vc} alt="vendor credit" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
