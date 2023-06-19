import clusters from "../../assets/middle.svg";



export default function BusinessCluster () {
  return (
    <section className='cluster'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <img src={clusters} alt="business cluster" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
