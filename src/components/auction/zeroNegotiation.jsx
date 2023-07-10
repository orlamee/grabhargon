import bid from "../../assets/three.png";
import zero from "../../assets/zeron.svg";


export default function Zero () {
  return (
    <section className='zero'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <img src={zero} alt="bid, win and collect" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-12 text-center">
            <img src={bid} alt="bid, win and collect" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
