import React, { useState } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sign.css"
// _____________________ 
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import FirebaseConfig from './FirebaseConfig';
initializeApp(FirebaseConfig);
const SignUp = () => {
    const history = useHistory()
    let { from } = { from: { pathname: "/sign-in" } };
    const [user, setUser] = useState({
        name: "",
        email: "",
        active: false,
        password: "",
        error: "",
        success: false,
        created: false,

    })

    const handleChange = (e) => {
        let validp = true;
        console.log(e.target.name, e.target.value);
        if (e.target.name === "email") {
            validp = e.target.value
        }
        if (e.target.name === "name") {
            validp = e.target.value
        }
        if (e.target.name === "password") {
            validp = e.target.value.length > 5
        }

        if (validp) {
            const newUser = { ...user }
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }


    const handleSubmit = (e) => {
        if (user.password && user.email) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const userr = userCredential.user;
                    console.log(userr);
                    const newUser = { ...user }
                    newUser.error = "";
                    newUser.success = true;
                    newUser.created = false;
                    updated(user.name)
                    console.log("object", user.name);
                    setUser(newUser);
                    setTimeout(() => {
                        history.replace(from);
                    }, 3000)
                })
                .catch((error) => {
                    const newUser = { ...user }
                    newUser.error = error.message;
                    newUser.success = false;
                    setUser(newUser);
                });
        }

        e.preventDefault();
    }
    console.log(user);
    // signin ---- 

    const auth = getAuth();
    function updated(name) {

        updateProfile(auth.currentUser, {
            displayName: `${name}`,
        }).then(() => {
            console.log("name updated");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="signin">
            <Container
                className="d-flex align-items-center justify-content-center"
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                        {
                                    user.error && <p style={{ color: 'red' }}>error {user.error}</p>
                                }
                                {
                                    user.success && <p style={{ color: 'green' }}>new account creating successful.</p>
                                }
                            <h2 className="text-center mb-4">Sign Up</h2>

                            <Form onSubmit={handleSubmit}>
                                
                                <Form.Group>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="text" onBlur={handleChange} name="name" placeholder="Enter your name"  required />
                                </Form.Group>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" onBlur={handleChange} type="email" placeholder="Enter email"  required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  onBlur={handleChange} type="password" name="password" placeholder="Password"  required />
                                </Form.Group>
                                <input className="btn btn-primary w-100 mt-3" type="submit" value="Sign Up" />
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