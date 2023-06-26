import det from "../../assets/det.svg";
import savecharts from "../../assets/savecharts.png";



export default function LowerRisk () {
  return (
    <section className='lowerrisk'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <img src={det} alt="You determine your savings terms" className="img-fluid" />
            <p className="text-black w-50" style={{marginTop: "100px"}}>Manage your savings on your terms; You can save for a long or short term, it's all up to you! Hargon empowers you to make financial decisions with confidence.</p>
          </div>
          <div className="col-sm-6">
            <img src={savecharts} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
