import money from "../../assets/moremoney.svg";



export default function Benefits () {
  return (
    <section className='beneloans pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <h2 className="mb-5">Benefits of <span style={{color: "#23A323"}}>community loans</span></h2>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-12">
            <img src={money} alt="more money" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
