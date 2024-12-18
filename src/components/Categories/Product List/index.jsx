/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import styles from './productlist.module.scss';
import ProductItem from '../Products Item';
// import Button from "../../Button";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FlashSaleContext } from '../../../pages/FlashSale/FlashSaleContext';
const ProductList = ({ category, title, isHome = false, priceRange }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setisMobile] = useState(window.innerWidth < 768);
  // flashsale
  const { isFlashSaleActive } = useContext(FlashSaleContext);
  //callAPI
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          category
            ? `https://fakestoreapi.com/products/category/${category}`
            : `https://fakestoreapi.com/products/`,
        );
        const data = await response.json();
        const filteredProducts = data.filter(
          (product) =>
            (category === '' || product.category === category) &&
            product.price >= priceRange[0] &&
            product.price <= priceRange[1],
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error(`Error from : ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
    // Khi resize
    // eslint-disable-next-line no-unused-vars
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };
  }, [category, priceRange]);
  //  if (loading) return <div>Loading...</div>;

  return (
    <div className={`mt-5 container ${styles.wrapper} `}>
      <h2>{title}</h2>
      {isMobile ? (
        <Swiper spaceBetween={50} slidesPerView={2}>
          <div className={`${styles.productList} mt-5`}>
            <div className="row">
              {loading ? (
                <Skeleton count={1} height={300} width="100vw" />
              ) : (
                products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="col col-md-4 col-lg-3">
                      <Link
                        to={`/product/${product.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <ProductItem product={product} />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))
              )}
            </div>
          </div>
        </Swiper>
      ) : (
        <div className={`${styles.productList} mt-5`}>
          <div className="row">
            {loading ? (
              <Skeleton count={1} height={300} width="100vw" />
            ) : (
              products.slice(0, isHome ? 4 : products.length).map((product) => {
                const flashSalePrice = isFlashSaleActive
                  ? product.price * 0.5
                  : product.price;
                return (
                  <div className="col col-md-4 col-lg-3" key={product.id}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <ProductItem
                        isFlashSale={isFlashSaleActive}
                        flashSalePrice={flashSalePrice}
                        product={product}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* <div className={styles.viewAllBtn}>
            <Button
                className={styles.viewAll} 
                actionName="View All"
                color="black"
                />
                </div> */}
    </div>
  );
};
export default ProductList;
