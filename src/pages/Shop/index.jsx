import { useEffect ,useState} from "react";
import ProductList from "../../components/Categories/Product List"
import DefaultLayout from "../../components/Layout/Default Layout";
const Shop = () => {
    const [categories, setCategories] = useState([]);
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
                    <div className="col col-md-4">
                        <h1>Filter</h1>
                    </div>
                <div className="col col-md-8">
                <h1>Casual</h1>
            {categories.map((category) => {
               return <ProductList key={category} category={category} />
                
            })}
                        </div>
                    </div>
            
            </div>
            </DefaultLayout>
    )
}
export default Shop