import { createContext } from "react";



const CartContext = createContext();
const CartProvider =(({children})=>{
    const [cart, setCart]=useState([]);
    // thêm sp 
    const addProduct = (product,quantity) => {
        const newItem = {
            id: product.id,
            title : product.title,
            price : product.price,
            quantity : quantity,
            image : product.image

        }
        setCart ((prev)=>{
            let updatedCart = [...prev]

        })
        

    }

})