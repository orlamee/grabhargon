import loan from "../../assets/loaners.svg";
import enable from "../../assets/enable.svg";



export default function CommunityHero () {
  return (
    <section className='comhero pb-0 pe-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-5">
            <img src={enable} alt="Enabling success through empowered business communities" className="img-fluid" />
            <p className="mt-5">Take out loans in groups or clusters of at least three or more small businesses and unlock new opportunities for growth.</p>
          </div>
          <div className="col-lg-5 offset-md-1 p-0 mt-5 pe-0">
            <img src={loan} alt="community hero" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
