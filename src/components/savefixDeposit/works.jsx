import saver from "../../assets/saver.png";
import save from "../../assets/open.svg";
import ysyc from "../../assets/hiw.svg";



export default function Work () {
  return (
    <section className='worker'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-4 mb-3 text-center">
            <img src={ysyc} alt="How it work" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5">
            <img src={saver} alt="How it work" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4">
            <img src={save} alt="How it work" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
