import customers from "../../assets/customer.svg";
import people from "../../assets/people.svg";



export default function Vendor () {
  return (
    <section className='vendor pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-4 text-center">
            <span className="ven">Vendors</span>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0" style={{marginTop: "120px"}}>
            <img src={customers} alt="More" className="img-fluid" />
            <p className="text-white mt-5 w-75" style={{marginLeft: "100px"}}>Reach more customers and grow your business through Hargon’s marketplace. Your customers buy on credit, and you get a direct deposit#.</p>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={people} alt="loan" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
