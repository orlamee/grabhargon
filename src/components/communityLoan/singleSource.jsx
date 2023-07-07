import clusters from "../../assets/ssrr.png";



export default function SingleSource () {
  return (
    <section className='cluster ssrbg'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <h2 className="mb-5 text-white">Single<br/>Source<br/>Repayment</h2>
            <p className="text-white w-75">Enjoy the security of a single-source repayment structure where community members motivate or help each other meet their repayment terms.</p>
          </div>
          <div className="col-sm-6 mt-3">
            <img src={clusters} alt="Flexible payment options as a team" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
