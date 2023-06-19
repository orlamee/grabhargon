import max from "../../assets/max.svg";



export default function FairSecure () {
  return (
    <section className='fair'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h2 className="mb-4 text-white">Fair and Secure </h2>
            <p className="text-white">Our platform guarantees you a professional and fair appraisal allowing you maximize the value and security of your asset</p>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-9 text-center">
            <img src={max} alt="Fair and Secure" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
