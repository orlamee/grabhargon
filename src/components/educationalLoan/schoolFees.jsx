import phone from "../../assets/phone.svg";
import sf from "../../assets/sf.svg";



export default function SchoolFees () {
  return (
    <section className='schoolfees pb-0'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={sf} alt="Pay with ease, study worry-free" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5 justify-content-start">
          <div className="col-sm-4">
            <img src={phone} alt="School Fees" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 sf">
            <p className="text-white w-75">Focus on your studies while we ensure funds or finances never come between you and your educational aspirations. We are invested in making you a success.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
