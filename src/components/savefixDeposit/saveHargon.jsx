import bank from "../../assets/savehargon.svg";
import lower from "../../assets/cubes.svg";
import expect from "../../assets/expect.svg";



export default function SaveHargon () {
  return (
    <section className='save-hargon pb-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-5">
            <img src={expect} alt="What to Expect when you Save with Hargon" className="img-fluid mb-5" />
            <img src={lower} alt="What to Expect when you Save with Hargon " className="img-fluid" />
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={bank} alt="digital bank" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
