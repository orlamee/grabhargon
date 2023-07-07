import clusters from "../../assets/calendar.png";
import flex from "../../assets/flexi.svg";



export default function BusinessCluster () {
  return (
    <section className='cluster'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6 mb-3" style={{marginTop: "100px"}}>
            <h2 className="mb-5 text-white">Flexible payment options as a team</h2>
            <p className="text-white w-75">Enjoy low-interest and convenient payment solutions on our community credit solutions, giving you and your cluster all the flexibility, you need.</p>
            <img src={flex} alt="Flexible payment options as a team" className="img-fluid mt-9" />
          </div>
          <div className="col-sm-6">
            <img src={clusters} alt="Flexible payment options as a team" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
