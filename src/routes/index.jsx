
import Homepage from "../pages/Home"
import ProductDetail from "../components/Categories/ProductDetails"
import Shop from "../pages/Shop"
export const publicRoutes = 
    [
        {
            path: '/',
            component: Homepage  
        },
        {
            path: '/shop',
            component: Shop
        },
        {
        path: '/product/:productId',
        component: ProductDetail
    }
      
]
export const privateRoutes =  
    [

    ]
