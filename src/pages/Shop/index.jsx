import { useEffect, useState } from 'react';
import ProductList from '../../components/Categories/Product List';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './shop.module.scss';
import Skeleton from 'react-loading-skeleton';
import { CartContext } from '../Cart/CartContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const { addProduct } = useContext(CartContext);
  //useLocation
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const initCate = queryParam.get('category');
  useEffect(() => {
    if (initCate) {
      setSelectedCategory(initCate);
    }
  }, [initCate]);
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, [location]); // Thực hiện khi location thay đổi (mỗi khi URL thay đổi)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories/',
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error ', error);
      } finally {
        setLoading(false); //
      }
    };
    fetchCategories();
  }, []);
  return (
    <DefaultLayout>
      <div className="container mt-5">
        <div className="row">
          <div className={`col col-md-4 ${styles.filterWrapper}`}>
            <h1>Filter</h1>
            <h3 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Category</h3>
            {loading ? (
              <Skeleton count={5} height={30} />
            ) : (
              <div className={styles.cateWrapper}>
                {categories.map((category) => (
                  <li
                    style={{
                      cursor: 'pointer',
                      marginTop: '20px',
                      fontSize: '2rem',
                      textTransform: 'uppercase',
                    }}
                    className={`${styles.titleCategory} ${
                      category === selectedCategory ? styles.active : ''
                    }`}
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </div>
            )}
          </div>
          <div className="col col-md-8">
            <h1>{selectedCategory}</h1>
            {loading ? (
              <Skeleton count={5} height={100} />
            ) : (
              <ProductList
                key={selectedCategory}
                category={
                  selectedCategory === 'All Products' ? '' : selectedCategory
                }
              />
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Shop;
