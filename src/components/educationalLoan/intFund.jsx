import intl from "../../assets/intl.svg";
import crf from "../../assets/crf.svg";



export default function IntFund () {
  return (
    <section className='intfund'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={intl} alt="focus" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mt-3">
            <h2 className="mb-4">International Educational Funds</h2>
            <p className="mb-4 w-75">Make a statement with certified financial evidence. Allow Hargon's Verified Financial Resources to open doors to unrivalled educational opportunities and set you on a promising future.</p>
            <img src={crf} alt="focus" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
