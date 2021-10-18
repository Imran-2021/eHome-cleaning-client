import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sign.css"
const SignIn = () => {
    return (
        <div className="signin">
            <Container
                className="d-flex align-items-center justify-content-center"
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign In</h2>

                            <Form>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"  required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"  required />
                                </Form.Group>
                                <Button className="w-100 mt-3" type="submit">
                                    Sign-In
                                </Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                                <Link onClick={()=>alert('Insha Allah,developer will update this functionality.')} to="/sign-in">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/sign-up">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;