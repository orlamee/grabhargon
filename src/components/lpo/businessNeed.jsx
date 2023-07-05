import cac from "../../assets/cac.png";


export default function BusinessNeed () {
  return (
    <section className='business-need'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-8">
            <h2 className="text-white">What does your <span style={{color: "#FFBD00"}}>business needs</span> to apply?</h2>
            <p className="mt-5 text-white">To successfully apply for loans, you will need the following<br/>documents</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 text-center">
            <img src={cac} alt="purchase order" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
