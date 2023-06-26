import bank from "../../assets/50k.png";
import expect from "../../assets/immediate.svg";



export default function SaveHargon () {
  return (
    <section className='save-hargon pb-0 pe-0'>
      <div className='container-fluid px-0'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-5">
            <img src={expect} alt="Rewards Savvy Savers" className="img-fluid mb-5" />
            <p className="text-black w-87 skewww">Experience the advantage of interest upfront with Hargon's savings account. We offer you the opportunity to receive a portion of the interest upfront when you deposit your funds. Enjoy the immediate benefits of your savings journey, allowing you to make the most of your hard-earned money.</p>
          </div>
          <div className="col-lg-5 offset-md-1">
            <img src={bank} alt="savyy" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
