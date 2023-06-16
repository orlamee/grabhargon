import discover from "../../assets/discover.svg";
import tour from "../../assets/tourss.png";



export default function TourHero () {
  return (
    <section className='tour-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3" style={{marginTop : "100px"}}>
            <img src={discover} alt="Discover the world and create new memories" className="img-fluid" />
            <p className="mt-5">Travel and tourism just got easier with Hargon. Unleash your wanderlust as you unlock the thrills of unforgettable experiences through the cultures of the world</p>
          </div>
          <div className="col-sm-6">
            <img src={tour} alt="tourism" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
