import bills from "../../assets/hidden.png";
import nhc from "../../assets/nhc.svg";



export default function NoHiddenCharges () {
  return (
    <section className='nhc'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={bills} alt="bill payment" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4 mt-9">
            <img src={nhc} alt="No Hidden Charges" className="img-fluid" />
            <p className="text-black mt-4 ms-5">On Hargon, you enjoy transparency when paying your bills. There are no hidden charges or funny business when you pay bills with us. Enjoy standardized charges with no extra cost.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
