import automated from "../../assets/boost.png";



export default function Boost () {
  return (
    <section className='booster'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={automated} alt="career" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-4">
            <h2 className="text-white"><span className="boost">Boost sales</span></h2>
            <h2 className="text-white">with Hargon's lending services</h2>
            <p className="mt-4 text-white">With more solutions comes more opportunities. When you have more options, you will attract more customers, boosting sales and revenue for your business.</p>
          </div>
        </div>      
      </div>
    </section>
    
  )
}
