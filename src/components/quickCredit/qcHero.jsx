import quickloan from "../../assets/quickloan.png";


export default function QCHero () {
  return (
    <section className='qc-hero'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h2>Unwanted problems deserve <span style={{color: "#23A323"}}>quick solutions</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 mb-3">
            <img src={quickloan} alt="quick loan" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4 ql-img">
            <p className="w-75">Hargons quick credit solution gives you speedy access to loans for unexpected financial emergencies. Our quick credit option is designed to provide instant relief and an escape from financial stress.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
