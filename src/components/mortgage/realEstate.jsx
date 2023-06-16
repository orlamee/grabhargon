
import madeeasy from "../../assets/me.svg";


export default function RealEstate () {
  return (
    <section className='realestate'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2 className="mb-3">Real-estate </h2>
            <h2 className="mb-3">Investments</h2>
            <img src={madeeasy} alt="made easy" className="img-fluid" style={{marginLeft : "-41px"}} />
            <h6 className="my-5 text-white">Get the best mortgage deals for your piece of paradise</h6>
            <p className="text-white w-75">Open the doors to your real estate dreams with flexible, customizable, and competitive loan options coupled with expert advise on how to channel your real estate investments.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
