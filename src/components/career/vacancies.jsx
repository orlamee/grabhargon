import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
import axios from "axios";

export default function Vacancies() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [jobs, setJobs] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const getPostingData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://hargon-admin-be.onrender.com/api/v1/hargon/admin/career/job_posts`,
          {
            signal: controller.signal,
          }
        );
        console.log({ data });
        if (data.code === 200) {
          setJobs(data.job_posts);
        }
      } catch (error) {
        setFetchError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPostingData();
    return () => {
      controller.abort();
    };
  }, []); //eslint-disable-line

  return (
    <section className="vacancies">
      {fetchError && (
        <p className="text-center mt-4">error fetching job openings</p>
      )}
      {isLoading && (
        <div className="text-center mt-6 mb-6">
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {jobs && jobs.length > 0 && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-5">
              <ul
                className="nav nav-pills mb-3 justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Current Vacancies
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Past Vacancies
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0"
                >
                  {jobs
                    .filter((j) => j.deleted === false)
                    .map((n, i) => (
                      <div className="vac-card mb-4" key={i}>
                        <div className="row justify-content-between">
                          <div className="col-sm-6 mb-3 mt-3">
                            <h6>{n.title}</h6>
                          </div>
                          <div className="col-sm-3">
                            <Button
                              className="btn btn-primary btn-main rounded-pill px-5 py-3"
                              onClick={() =>
                                navigate(`/career/apply/job/${n.job_post_id}`)
                              }
                            >
                              Apply for Position
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
                >
                  {jobs
                    .filter((j) => j.deleted === true)
                    .map((n, i) => (
                      <div className="vac-card mb-4">
                        <div className="row justify-content-between">
                          <div className="col-sm-6 mb-3 mt-3">
                            <h6>{n.title}</h6>
                          </div>
                          <div className="col-sm-3">
                            <button className="btn btn-primary btn-post rounded-pill px-5 py-3">
                              Position is filled
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
