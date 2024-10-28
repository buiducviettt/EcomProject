import DefaultLayout from '../../components/Layout/Default Layout';
import { HomeBanner } from '../../components/Banner';
import { useEffect } from 'react';
import BrandsSection from '../../components/BrandsSection';
import ProductList from '../../components/Categories/Product List';
import styles from './home.module.scss';
import StyleItem from '../../components/DressStyle';
import Image from '../../assets/image/Images';
import AOS from 'aos'; // Cần import AOS
import 'aos/dist/aos.css'; // Import file CSS của AOS
import FeedbackData from '../../components/Feedback/Data/FeedBackData';
import 'animate.css';
const Homepage = () => {
  const priceRange = [0, 1000];
  useEffect(() => {
    AOS.init({
      duration: 2000, // thời gian hiệu ứng (ms)
      once: true, // chỉ animate một lần khi scroll
    });
  }, []);
  return (
    <div>
      <DefaultLayout>
        <HomeBanner />
        <BrandsSection />
        <section data-aos="fade-up">
          <ProductList
            priceRange={priceRange}
            isHome={true}
            category="men's clothing"
            title="NEW PRODUCT"
          />
        </section>
        <section data-aos="fade-up">
          <ProductList
            priceRange={priceRange}
            isHome={true}
            category="women's clothing"
            title="TOP SELLING"
          />
        </section>
        <div className={`container mt-5 ${styles.dressStyles} `}>
          <h2>BROWSE BY DRESS STYLE</h2>
          <div className={`row mt-5 ${styles.row}`}>
            <div className="col- col-md-4">
              <StyleItem title="jewelery" image={Image.styleitem1} />
            </div>
            <div className="col - col-md-8 ">
              <StyleItem title="men's clothing" image={Image.styleitem2} />
            </div>
          </div>
          <div className={`row mt-5 ${styles.row}`}>
            <div className="col- col-md-8 ">
              <StyleItem title="women's clothing" image={Image.styleitem3} />
            </div>
            <div className="col- col-md-4">
              <StyleItem title="electronics" image={Image.styleitem4} />
            </div>
          </div>
        </div>
        <section>
          <FeedbackData />
        </section>
      </DefaultLayout>
    </div>
  );
};
export default Homepage;
