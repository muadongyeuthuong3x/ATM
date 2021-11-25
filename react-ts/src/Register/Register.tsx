import React ,{useEffect, useState} from 'react';
import IPage from '../interfaces/page';
import { Button ,Form  } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'; 
import Cookies from 'js-cookie';
import './register.css'
import axios from 'axios'
import { FormSubmit } from '../interfaces/typescript'
import { Link } from "react-router-dom";
  const Register: React.FunctionComponent<IPage> = props => {
    const [email, setEmail] = useState<string>();
    const [password,setPassword ] = useState<string>();
    useEffect(() => {
      document.title =props.name
   }, []);
    const handleSubmit = async(e: FormSubmit) => {
        e.preventDefault();
        const valuedk ={
          email,
          password
        }
    
        await  axios.post("http://localhost:5000/api/v1/auth/register",valuedk).then((res)=>{
          setTimeout(function(){
            toast.success(res.data.message) }, 1000);
            Cookies.set('cookielogin', res.data.PRIVATE_TOKEN)
            window.location.href  = "/trangchu"
        }).catch(err=>{
            toast.error(err.response.data)
        })

    }
return (
    <>
      <div className="blocklogin"> 
      <ToastContainer
      position="top-right"
      autoClose={1000}
      closeOnClick/>
    <div className="container">
    <div className="row">
    <div className="col-lg-4 col-md-4">
              </div>
            <div className="col-lg-4 col-md-4 formlogin">


            <Form  className="formdata" onSubmit={handleSubmit} >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email You</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name ="email" value={email} onChange={e => setEmail(e.target.value)} />
  </Form.Group>
 <Form.Group  className="mb-3" controlId="formPlaintextPassword" >
      <Form.Label >  Password  </Form.Label>
     
        <Form.Control type="password" placeholder="Password" name="password"   value={password} onChange={e => setPassword(e.target.value)}/>
     
    </Form.Group>

    <Button variant="primary" type="submit">Đăng kí </Button>

    <br/>
    <Link to="/login" >
Đăng Nhập  </Link> 

</Form>

</div>
</div>

        </div>
        </div>
    </>
)
}

export default Register