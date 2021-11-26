import IRoute from '../interfaces/routes';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Home from '../Home/Home';
import ShowAtm from '../ShowAtm/ShowAtm'
const routes: IRoute[] = [
    {
        path: '/register',
        name:"Register",
        component: Register,
        exact: true
    },
    {
        path: '/login',
        name :"Login",
        component: Login,
        exact: true
    },
    {
        path: '/home',
        name :"Home",
        component: Home,
        exact: true
    },
    {
        path: '/listatm',
        name :"List Atm",
        component:ShowAtm,
        exact: true
    }
]

export default routes;