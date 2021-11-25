import React from 'react';
import { BrowserRouter, Route, Switch  ,Redirect } from "react-router-dom";
import routes from './config/routes';
import 'react-toastify/dist/ReactToastify.css';
import token from '../src/api/token'
import Login from './Login/Login';
const App: React.FunctionComponent<{}> = props => {
  return (
    <div>
         <BrowserRouter>
    <Switch>
 
     {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={() => ( (( route.component  != "/register" || route.component  != "/login" ) && token) ? <route.component  name={route.name}   /> : <Login  name={"Login"}   /> 

                                )}
                            />
                        );
                    })}  



    </Switch>
    </BrowserRouter>
</div>
  );
}

export default App;
