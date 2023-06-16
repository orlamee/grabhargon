import places from "../../assets/picaso.png";



export default function DreamVac() {
  return (
    <section className='dreamvac'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <img src={places} alt="tourism loans" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5" style={{marginTop: "120px"}}>
            <h2 className="t">Plan For Your Dream Vacation</h2>
            <h5 className="my-5">With Hargon you can invest in your travel experience</h5>
            <p>Plan and save towards your travel experience with our financing options, providing you the means to make lasting memories with friends and loves ones</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
