
import Homepage from "../pages/Home"
import ProductDetail from "../components/Categories/ProductDetails"

export const publicRoutes = 
    [
        {
            path: '/',
            component: Homepage  
        },
        {
        path: '/product/:productId', // Route cho trang chi tiết sản phẩm
        component: ProductDetail
    }
      
]
export const privateRoutes =  
    [

    ]
