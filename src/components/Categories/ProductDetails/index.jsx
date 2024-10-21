import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../Layout/Default Layout/index';
import styles from './productdetail.module.scss';
import Button from '../../Button';
import Image from '../../../assets/image/Images';
import StarRating from '../../StarRating';
import QuantityNumber from '../../QuantityNumber';
import ProductList from '../Product List';
import { CartContext } from '../../../pages/Cart/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState('');
  const [noti, setNoti] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('');

  // Noti
  const handleSubmit = () => {
    addProduct(product, quantity);
    setNoti(`Bạn đã thêm thành công`);
    setTimeout(() => {
      setNoti('');
    }, 2000);
  };
  //set Tab
  const tabs = [
    {
      id: 'details',
      label: 'Product Details',
    },
    {
      id: 'rating',
      label: 'Rating',
    },
  ];
  // Gọi API
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
        );
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.image);
      } catch (error) {
        console.error(`Error from ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, [productId]);
  if (loading) return <div>Loading....</div>;
  if (!product) return <div>No Products in this link....</div>;

  return (
    <DefaultLayout>
      <div className="container mt-5">
        <div className="row">
          <div className={`col col-md-6`}>
            <div className={styles.wrapper}>
              <div className="row">
                <div className="col col-md-4">
                  <div className={styles.gallery}>
                    <img
                      src={product.image}
                      alt=""
                      className={styles.selectedImage}
                      onClick={() => setSelectedImage(product.image)}
                    />
                    <img
                      src={Image.styleitem5}
                      alt=""
                      className={styles.thumbnail}
                      onClick={() => setSelectedImage(Image.styleitem5)}
                    />
                    <img
                      src={Image.styleitem6}
                      alt=""
                      className={styles.thumbnail}
                      onClick={() => setSelectedImage(Image.styleitem6)}
                    />
                    <img
                      src={Image.styleitem7}
                      alt=""
                      className={styles.thumbnail}
                      onClick={() => setSelectedImage(Image.styleitem7)}
                    />
                  </div>
                </div>
                <div className="col col-md-8">
                  <div className={styles.productImage}>
                    <img src={selectedImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className={styles.contentInner}>
              <a href="">{`${product.category}`}</a>
              <h1>{product.title}</h1>
              <StarRating rating={product.rating.rate} />
              <p className={styles.priceItem}>{`Price: $${product.price}`}</p>
              <p>{`${product.description}`}</p>

              <div className={styles.ctaWrapper}>
                <QuantityNumber onQuantityChange={setQuantity} />
                <Button onClick={handleSubmit} actionName="Add to Cart" />
              </div>
              <p style={{ color: 'green', fontWeight: 'bold' }}>{noti}</p>
            </div>
          </div>
        </div>
        {/* {tab} */}
        <div className={`mt-5 ${styles.tabsWrapper}`}>
          <div className={styles.tabBtn}>
            {tabs.map((tab) => {
              return (
                <button
                  // className="btn btn-primary"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? styles.active : ''}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className={styles.tabContent}>
            {activeTab === 'details' && (
              <div>
                <h1>{product.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur at magnam facilis dolorum placeat delectus alias
                  accusantium ipsa. Dolorem maiores repellat laudantium laborum
                  corporis obcaecati error ratione nulla, nostrum placeat.
                </p>
              </div>
            )}
            {activeTab === 'rating' && (
              <div>
                <p>Thông tin đánh giá sản phẩm sẽ ở đây.</p>
              </div>
            )}
          </div>
        </div>

        <div className="container mt-5">
          <ProductList
            title="You might also like"
            category={product.category}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetail;
