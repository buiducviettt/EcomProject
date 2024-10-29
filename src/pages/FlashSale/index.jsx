import DefaultLayout from '../../components/Layout/Default Layout/index';
import styles from './flashsale.module.scss';
import TimeCounter from './TimeCounter';
import TimeStamp from './TimeStamp';
import ProductList from '../../components/Categories/Product List';
import { FlashSaleContext } from './FlashSaleContext';
import { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Đảm bảo đã import CSS
import 'swiper/css'; // Import Swiper styles

const FlashSale = () => {
  const [isMobile, setisMobile] = useState(false);
  const priceRange = [0, 1000];
  const { setIsFlashSaleActive, setFlashSaleDuration } =
    useContext(FlashSaleContext);
  const durationInSeconds = 10;
  useEffect(() => {
    setIsFlashSaleActive(true); // Bắt đầu flash sale
    setFlashSaleDuration(durationInSeconds); // Đặt thời gian cho flash sale
    // Cleanup để tắt flash sale khi component unmount
    return () => setIsFlashSaleActive(false);
  }, [setIsFlashSaleActive, setFlashSaleDuration, durationInSeconds]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <DefaultLayout>
      <div className={styles.flashsale}>
        <div className={styles.inner}>
          <div className={styles.innerText}>
            <h1>FLASH SALE</h1>
            <TimeCounter
              duration={durationInSeconds}
              className={styles.timeCounterStyles}
            />
          </div>
          {isMobile ? (
            <div className={styles.timeStampWrapper}>
              <Swiper spaceBetween={0} slidesPerView={2}>
                <SwiperSlide>
                  <div className={styles.timeStamp}>
                    <TimeStamp
                      time="21:00"
                      className={styles.TimeStamp}
                      title="IS HAPPENING"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.timeStamp}>
                    <TimeStamp
                      time="21:00"
                      className={styles.TimeStamp}
                      title="IS HAPPENING"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <div className={styles.timeStampWrapper}>
              <div className={styles.timeStamp}>
                <TimeStamp
                  time="21:00"
                  className={styles.TimeStamp}
                  title="IS HAPPENING"
                />
              </div>
              <div className={styles.timeStamp}>
                <TimeStamp
                  time="21:30"
                  className={styles.TimeStamp}
                  title="COMING SOON"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.productList}>
        <ProductList
          priceRange={priceRange}
          category=""
          title="SALE PRODUCTS"
        />
      </div>
    </DefaultLayout>
  );
};
export default FlashSale;
