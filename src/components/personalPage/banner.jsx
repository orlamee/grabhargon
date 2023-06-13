
import banner from "../../assets/personal.png";
import loan from "../../assets/personalloan.svg";
import why from "../../assets/whystop.svg";
import users from "../../assets/profiles.svg";


export default function Banner () {
  return (
    <section className='personalbg'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={loan} alt="personal" className="img-fluid" />
            <img src={why} alt="title" className="img-fluid mt-4 mb-4" />
            <p className="w-75">Embrace the many opportunities Hargon's marketplace offers and experience the freedom of making impactful financial decisions.</p>
            <img src={users} alt="profile" className="img-fluid mt-4" />
          </div>
          <div className="col-sm-6">
            <img src={banner} alt="banner" className="img-fluid w-100 " />
          </div>
        </div>
      </div>
    </section>
    
  )
}
