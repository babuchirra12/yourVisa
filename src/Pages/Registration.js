
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const registration = {
    width: '100%',
    height: '200px',
    // backgroundImage: url`(assets/img/registration.png)`,
    backgroundImage: "url(" + "assets/img/registration.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: "#cf1717ba",
    textAlign: 'center',
}
function Registration() {
    return (
        <>
            <div>
                <div style={registration}><div><h1>APPLY NOW</h1><h6>Apply For Your Visa Here</h6></div></div>
                <div style={{ padding: '20px 0px' }}>
                    <Container>
                        <h1></h1>
                        <Row>
                            <Col xs={6}>  <img src="assets/img/RegistrationleftImg1.jpg" alt="visa App logo" />
                            </Col>
                            <Col xs={6}>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                            First Name*:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder=" First Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                            Last Name*:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder=" Last Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                            Email*:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="Email" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                            Contact*:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="Contact" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                            Country*:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Select aria-label="Default select example">
                                                <option> Select Contact</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                        Visa Type*:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Select aria-label="Default select example">
                                                <option> select Visa Type</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                        State:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="State" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="3">
                                        City:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="text" placeholder="City" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="3">
                                        Inquiry:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control as="textarea" rows={3} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="3">
                                     
                                        </Form.Label>
                                        <Col sm="9">
                                        <Button variant="primary">Submit</Button>{' '}      <Button variant="primary">Clear</Button>{' '}
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Registration;