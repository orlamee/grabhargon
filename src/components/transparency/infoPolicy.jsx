import React from 'react'
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function InfoPolicy() {
  return (
    <section className="meta bg-light">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 justify-content-center">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className='mb-5'>
             
              <Col sm={7} className="my-3 mx-5 ">
                <Tab.Content >
                  <Tab.Pane eventKey="first">
                    <div>
                      <h2 className="my-3">
                        {" "}
                        3.2 Personal Data About Your Transactions With Us
                      </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <div>
                      <h2 className='my-3'>  3.2 Personal Data About Your Transactions With Us </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <div>
                      <h2 className='my-3'>
                      3.2 Personal Data About Your Transactions With Us
                      </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div>
                      <h2 className='my-3'>
                      3.2 Personal Data About Your Transactions With Us
                      </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <div>
                      <h2 className='my-3'>
                      3.2 Personal Data About Your Transactions With Us
                      </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <div>
                      <h2 className='my-3'>
                      3.2 Personal Data About Your Transactions With Us
                      </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <div>
                      <h2 className='my-3'>
                      3.2 Personal Data About Your Transactions With Us
                      </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eight">
                    <div>
                      <h2 className='my-3'>
                      3.2 Personal Data About Your Transactions With Us
                      </h2>
                      <p>
                      As you use your Ardilla account to perform financial transactions, we collect Personal Data in connection with each transaction, including transaction time, Naira amount, and merchant details. We may also collect photos, memos, or other information you attach to your transactions.
                      </p>
                    </div>
                  </Tab.Pane>

                 

                 
              
                </Tab.Content>
              </Col>


              <Col sm={3} className=" meme bg-white  my-3">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item className='my-4'>
                    <Nav.Link eventKey="first">Introduction</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-4">
                    <Nav.Link eventKey="second">
                    Information we collect as you use our services
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-4">
                    <Nav.Link eventKey="third">
                      {" "}
                      Managing, reviewing, and updating your information
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-4">
                    <Nav.Link eventKey="fourth">
                      {" "}
                      Exporting, removing & deleting your information
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-4">
                    <Nav.Link eventKey="fifth">
                      {" "}
                      International Transfer Of Your Data{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-4">
                    <Nav.Link eventKey="sixth">
                      {" "}
                      Changes To This Statement{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-4">
                    <Nav.Link eventKey="seventh">
                      {" "}
                     Retaining Your Infomation 
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-4">
                    <Nav.Link eventKey="eight">
                      {" "}
                     Keeping your Information secure
                    </Nav.Link>
                  </Nav.Item>
                 

                 
                </Nav>
              </Col>

            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  </section>
  );
}

export default InfoPolicy;