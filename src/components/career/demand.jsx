import arch from "../../assets/archer.svg";
import bulleye from "../../assets/bulleye.svg";
import hunger from "../../assets/hunger.svg";



export default function Demand () {
  return (
    <section className='our-staffs pt-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2>What we <span style={{color: "#23A323"}}>need from you</span></h2>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-4 mb-3">
            <div className="demand-card text-center">
              <img src={arch} alt="archer" className="img-fluid" width={90} />
              <h4 className="my-4 text-white">Your A-game</h4>
              <p className="text-white">We have done our part to create the best environment for you, but we need you to bring your A-game daily. Only when you are at your best can we be at our best</p>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="demand-card text-center hun">
              <img src={hunger} alt="hunger" className="img-fluid" width={90}  />
              <h4 className="my-4 text-white">Hunger for knowledge</h4>
              <p className="text-white">At Hargon, we think life and work are a continuous learning process, and we expect you to have a burning hunger for knowledge. Learn, learn, learn and then innovate better.</p>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="demand-card text-center fo">
              <img src={bulleye} alt="bulleye" className="img-fluid" width={90}  />
              <h4 className="my-4 text-white">A focus on customers</h4>
              <p className="text-white">All we do is for the customer. To succeed at Hargon, you will need to have a customer-first mindset.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
