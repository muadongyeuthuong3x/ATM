import React from "react";
import { BrowserRouter, Route, Switch  ,Redirect} from "react-router-dom";
import Register from './Register/Register'
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login/Login";
import Home from './Home/Home'
import ShowAtm  from './ShowAtm/ShowAtm'
import tokenlogin from './api/token'
const App: React.FunctionComponent<{}> = (props) => {
   

  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login"  component={Login}/>
          <Route path="/register"  component={ Register}/>  
          { tokenlogin ? (<>
          <Route path="/home"  component={Home}/>    
          <Route path="/listatm"  component={ShowAtm}/> </> )
            :<Redirect to="/login" />}

        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
