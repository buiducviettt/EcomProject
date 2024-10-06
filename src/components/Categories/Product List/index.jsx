/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from './productlist.module.scss';
import ProductItem from "../Products Item";
import Button from "../../Button";
const ProductList = ({category,title}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    //callAPI
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setProducts(data);
            }
            catch (error) {
                console.error(`Error from : ${error}`);
            }
            finally {
                setLoading(false);
            }
        };
          fetchAPI();
        
    }, [category])
     if (loading) return <div>Loading...</div>;
    return (
        <div className={ `mt-5 container ${styles.wrapper}`}>
            <h2>{title}</h2>
            <div className={`${styles.productList} mt-5`}>
                <div className="row">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
                </div>       
            </div>
            <div className={styles.viewAllBtn}>
            <Button
                className={styles.viewAll} 
                actionName="View All"
                color="black"
                />
                </div>
            </div>
    )
}
export default ProductList