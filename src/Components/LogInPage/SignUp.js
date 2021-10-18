import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sign.css"
const SignUp = () => {
    return (
        <div className="signin">
            <Container
                className="d-flex align-items-center justify-content-center"
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>

                            <Form>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"  required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"  required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" required />
                                </Form.Group>
                                <Button className="w-100 mt-3" type="submit">
                                    Sign-Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/sign-in">Sign In</Link>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;