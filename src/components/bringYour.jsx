

export default function BringYour() {
  return (
    <section className="bringyour">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h3 className="mb-5">Bring your plans to<br/>reality</h3>
            <div style={{marginTop: "90px", marginBottom: "90px"}}>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" for="inlineRadio1">Self-employed</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" for="inlineRadio2">Employed</label>
              </div>
            </div>
            <h2 >What’s your monthly income?</h2>
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
              <label for="customRange1" class="form-label">₦50,000</label>
              <input type="range" class="form-range" />
              <label for="customRange1" class="form-label" style={{color: "#9CA3AF"}}>₦50,000</label>
            </div>
            <h2 >Loanable amount</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

