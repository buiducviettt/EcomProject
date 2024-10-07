import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import DefaultLayout from '../../Layout/Default Layout/index'
import styles from './productdetail.module.scss'
import Button from "../../Button";
const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(true);
    // goi API 
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            }
            catch (error) {
                console.error(`Error from ${error}`)
            }
            finally {
                setLoading(false);
            }
        }
        fetchAPI();
    }, [productId]);
    if (loading) return <div>Loading....</div>
    if(!product) return <div>No Products in this link....</div>
    
    return (
        <>
            <DefaultLayout>
                <div className="container mt-5">
                    <div className="row">
                        <div className={`col col-md-6 `}>
                            <div className={styles.wrapper}>
                            <div className={styles.productImage}>
                                <img src={product.image} alt="" />
                                </div>
                                </div>
                        </div>
                        <div className="col col-md-6">
                            <div className={styles.contentInner}>
                                <a href="">{ `${product.category}`}</a>
                                <h1>{product.title}</h1>
                                <p>{` Rate: ${product.rating.rate}`}</p>
                                <p>{`Price: ${product.price}`}</p>
                                <p>{`${product.description}`}</p>
                                <Button
                                    actionName="Buy Now"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5"></div>
                </div>
            </DefaultLayout>
            
            
            
        </>
    )
}
export default ProductDetail