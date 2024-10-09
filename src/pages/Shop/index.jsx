import { useEffect ,useState} from "react";
import ProductList from "../../components/Categories/Product List"
import DefaultLayout from "../../components/Layout/Default Layout";
import styles from './shop.module.scss';
const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("men's clothing");
    useEffect(() => {
        const fetchCategories = async () => { 
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories/');
                const data = await response.json();
                setCategories(data);
            }
            catch (error) {
                console.error ('Error ',error)         
            }
        }
        fetchCategories();
    },[])
    return (
        <DefaultLayout>
            <div className="container mt-5">
                <div className="row">
                    <div className={`col col-md-4 ${styles.filterWrapper}`}>
                        <h1>Filter</h1>
                        {categories.map((category) => (
                            <li style={{cursor:"pointer"}} key={category } onClick={()=>{setSelectedCategory(category)}} >{category}</li>     
                        ))}
                    </div>
                <div className="col col-md-8">
                        <h1>{selectedCategory || "All Product"}</h1>
                        <ProductList
                    key={selectedCategory}
                            category={selectedCategory}
                              />  
                            
                
                        </div>
                    </div>
            
            </div>
            </DefaultLayout>
    )
}
export default Shop