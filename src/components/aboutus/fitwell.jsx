import fitwell from "../../assets/fitwell.svg";


export default function Fitwell () {
  return (
    <section className='fitwell'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <h3>How well we <span style={{color: "#23A323"}}>fit with you.</span></h3>
          </div>
          <div className="col-sm-5">
            <p>With our comprehensive range of credit options, we strive to meet the diverse needs of a diverse market.</p>
            <p>At Hargon, we understand that access to credit is crucial for growth and prosperity. That's why we developed a platform offering various loan options customizable to your requirements. </p>
            <p>Whether you're an individual seeking personal loans, a business in need of working capital, or an entrepreneur looking for funding to start a new venture, we have you covered.</p>
          </div>
        </div>
        <div className="row justify-content-between mt-9">
          <div className="col-sm-12">
            <img src={fitwell} alt="about us" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
