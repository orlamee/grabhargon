import TextLoop from "react-text-loop";
import asset from "../../assets/asset.png";


export default function GoBigger () {
  return (
    <section className='bigger'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <h6>Go</h6>
            <TextLoop mask={true}>
                <h2>Bigger</h2>
                <h2>Faster</h2>
                <h2>Further</h2>
            </TextLoop>
          </div>
          <div className="col-sm-5">
            <p>Hargon's LPO financing is smart for empowering your business to grow and prosper.</p>
            <p>Experience the Hargon Advantage Today!<br/>Don't let funding constraints hold you back - seize opportunities, expand your clientele, and achieve your business goals with our reliable and flexible LPO financing.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-12">
            <img src={asset} alt="go bigger" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
