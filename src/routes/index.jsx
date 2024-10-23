import Homepage from '../pages/Home';
import ProductDetail from '../components/Categories/ProductDetails';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import AccountLogged from '../components/Account/Account_Logged';
import Login from '../components/Account/Login';
import Checkout from '../pages/Checkout';

export const publicRoutes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/product/:productId',
    component: ProductDetail,
  },
  {
    path: '/checkout',
    component: Checkout,
  },
];
export const privateRoutes = [
  {
    path: '/account',
    component: AccountLogged,
  },
  // {
  //   path: '/checkout',
  //   component: Checkout,
  // },
];
