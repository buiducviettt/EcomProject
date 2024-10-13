import Homepage from '../pages/Home';
import ProductDetail from '../components/Categories/ProductDetails';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
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
    path: '/product/:productId',
    component: ProductDetail,
  },
];
export const privateRoutes = [];
