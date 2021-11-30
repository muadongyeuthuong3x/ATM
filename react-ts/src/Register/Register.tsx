import React, {  useState } from "react";
import IPage from "../interfaces/page";
import { Button, Form } from "react-bootstrap";
import { ToastContainer} from "react-toastify";
import { useHistory } from "react-router";
import "./register.scss";
import { useDispatch } from "react-redux";
import { FormSubmit } from "../interfaces/typescript";
import { Link } from "react-router-dom";
import {registerHome} from './../store/action/auth'
const Register: React.FunctionComponent<IPage> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormSubmit) => {
 
  try {
   e.preventDefault()
    dispatch(registerHome(email,password))
   history.push("/home");
  } catch (error) {
    
  }
}
  return (
    <>
      <div className="blocklogin">
        <ToastContainer position="top-right" autoClose={1000} closeOnClick />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4"></div>
            <div className="col-lg-4 col-md-4 formlogin">
              <Form className="formdata" onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email You</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label> Password </Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>

                <Link to="/login">
                  <Button variant="primary" className="buttonlogin"> Login </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
