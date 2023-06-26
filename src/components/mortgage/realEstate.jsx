
import finance from "../../assets/finance.png";


export default function RealEstate () {
  return (
    <section className='realestate pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mt-5">
            <img src={finance} alt="finance" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6">
            <h2>Financing for Property Investment </h2>
            <p className="text-white w-75 mt-5">Open the doors to your real estate and property dreams with flexible, customizable, Competitive financing and expert advice on channelling your real estate investments.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
