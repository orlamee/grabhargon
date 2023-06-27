import hargon from "../../assets/h-ac.svg";


export default function Three () {
  return (
    <section className='three'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-8">
            <h2>You need just three items to get started</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-12 text-center">
            <img src={hargon} alt="quick loan" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
