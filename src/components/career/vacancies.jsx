


export default function Vacancies () {
  return (
    <section className='vacancies'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-5">
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Current Vacancies</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Past Vacancies</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div className="vac-card">
                  <div className="row justify-content-between">
                    <div className="col-sm-6 mb-3 mt-3">
                      <h6>UI/UX Designer intern</h6>
                    </div>
                    <div className="col-sm-3">
                      <button className="btn btn-primary btn-main rounded-pill px-5 py-3">Apply for Position</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                <div className="vac-card">
                  <div className="row justify-content-between">
                    <div className="col-sm-6 mb-3 mt-3">
                      <h6>Head Product Design Lead</h6>
                    </div>
                    <div className="col-sm-3">
                      <button className="btn btn-primary btn-post rounded-pill px-5 py-3">Position is filled</button>
                    </div>
                  </div>
                </div>
                <div className="vac-card">
                  <div className="row justify-content-between">
                    <div className="col-sm-6 mb-3 mt-3">
                      <h6>Intern Frontend</h6>
                    </div>
                    <div className="col-sm-3">
                      <button className="btn btn-primary btn-post rounded-pill px-5 py-3">Position is filled</button>
                    </div>
                  </div>
                </div>
                <div className="vac-card">
                  <div className="row justify-content-between">
                    <div className="col-sm-6 mb-3 mt-3">
                      <h6>Senior Mobile Developer</h6>
                    </div>
                    <div className="col-sm-3">
                      <button className="btn btn-primary btn-post rounded-pill px-5 py-3">Position is filled</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
