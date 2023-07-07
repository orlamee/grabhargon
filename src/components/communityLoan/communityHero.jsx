import get from "../../assets/get financial.svg";
import credit from "../../assets/comcredit.svg";
import member from "../../assets/members.svg";



export default function CommunityHero () {
  return (
    <section className='comhero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-9">
            <span className="explo">Explore Growth Opportunities Together</span>
            <img src={get} alt="Get financial empowerment through our community credit" className="img-fluid mt-5"/>
          </div>
        </div>
        <div className="combg">
          <div className="row justify-content-between">
            <div className="col-sm-4 mb-3">
              <h4 className="text-white">Take out loans in groups or clusters of at least three or more and unlock new levels of financial empowerment, giving you all you need to live with freedom.</h4>
              <img src={member} alt="members" className="img-fluid mt-5" />
            </div>
            <div className="col-sm-7 comimg">
              <img src={credit} alt="community credit" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
