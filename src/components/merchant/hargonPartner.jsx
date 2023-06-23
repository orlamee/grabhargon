import merchant from "../../assets/middle.png";




export default function HargonP () {
  return (
    <section className='hargonp'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-5 text-center">
            <h2 className="text-white">Why partner with <span style={{color: "#FFA529"}}>Hargon?</span></h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12">
            <img src={merchant} alt="Why partner with Hargon?" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
