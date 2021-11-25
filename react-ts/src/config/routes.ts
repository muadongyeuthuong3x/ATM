import IRoute from '../interfaces/routes';
import Register from '../Register/Register';
import Login from '../Login/Login';
import TrangChu from '../TrangChu/Trangchu';

const routes: IRoute[] = [
    {
        path: '/register',
        name:"Đăng kí",
        component: Register,
        exact: true
    },
    {
        path: '/login',
        name :"Đăng nhập",
        component: Login,
        exact: true
    },
    {
        path: '/trangchu',
        name :"Trang chủ",
        component: TrangChu,
        exact: true
    }
]

export default routes;