import Cart from "../pages/frontend/Cart/Cart";
import Home from "../pages/frontend/Home";
import Login from "../pages/frontend/Login/Login";
import ProductDetail from "../pages/frontend/Product/ProductDetail"
import AllProduct from "../pages/frontend/Product/AllProducts"
import Contact from "../pages/frontend/Contact/Contact";
import ProductBrand from "../pages/frontend/Product/ProductBrand";
import CategoryProduct from "../pages/frontend/Product/CategoryProducts";
import Register from "../pages/frontend/Register/register";
import Account from "../pages/frontend/Account";
import Order from "../pages/frontend/Account/Order";
import Setting from "../pages/frontend/Account/Setting";
import SettingPassword from "../pages/frontend/Account/SettingPassword";
import SettingAddress from "../pages/frontend/Account/SettingAddress";
import Payment from "../pages/frontend/Payment";
import Product_Search from "../pages/frontend/Product/Product_Search";
import News from "../pages/frontend/Blog/Bloga";
import NewsDetail from "../pages/frontend/Blog/NewsDetail";
import NewsTopic from "../pages/frontend/Blog/NewsTopic";
import Productbestseller from "../pages/frontend/Product/ProductBestseller";
import Productsale from "../pages/frontend/Product/ProductSale";


const RouterPublic = [
    
    {path:'/',component:Home},
    {path:'/login',component:Login},
    {path:'/register',component:Register},

    {path:'/gio-hang',component:Cart},
     {path:'/tat-ca-san-pham',component:AllProduct},
     {path:'/Bestseller',component:Productbestseller},
     {path:'/ProductSale',component:Productsale},
     {path:'/Contact',component:Contact},
     {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
     {path:"/san-pham/:slug", component:ProductBrand},
     {path:"/san-pham-theo-danh-muc/:id", component:CategoryProduct},
     {path:'/tai-khoan',component:Account},
     {path:'/tai-khoan/don-hang',component:Order},
     {path:'/tai-khoan/cai-dat',component:Setting},
     {path:'/tai-khoan/mat-khau',component:SettingPassword},
     {path:'/tai-khoan/dia-chi/:code',component:SettingAddress},
     {path:'/payment',component:Payment},
     {path:'/tim-kiem/:key/:page/:limit',component:Product_Search},

     {path:'/tin-tuc',component:News},
     {path:'/tin-tuc/:slug/:page/:limit',component:NewsTopic},
     {path:'/tin-tuc/:slug',component:NewsDetail},
 
   
   




];

export default RouterPublic;