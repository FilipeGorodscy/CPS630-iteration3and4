import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

const Login = ({ setUsername }) => {
  const [loggedIn, setLoggedIn] = useState();
  const [usernameGiven, setUsernameGiven] = useState();
  const [passwordGiven, setPasswordGiven] = useState();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost/backend/users/read_one.php", {
      username: usernameGiven,
      password: passwordGiven,
    });
    if (res.data) {
      setLoggedIn(true);
      const user = res.data.username;
      sessionStorage.setItem("username", user);
      setUsername(user);
    }
  };

  return (
    <Container className="mt-5 p-5 border">
      <h3>Login</h3>
      <Form onSubmit={(e) => onFormSubmit(e)}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={(e) => setUsernameGiven(e.target.value)} placeholder="Enter username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPasswordGiven(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>

        <Link to="/register">Don't have an account?</Link>

        <Button variant="primary" type="submit">
          Submit
          {loggedIn && <Redirect to="/" />}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
