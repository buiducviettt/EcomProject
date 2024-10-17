import styles from './brands.module.scss';
import brand1 from '../../assets/image/Brands/Brands1.png';
import brand2 from '../../assets/image/Brands/Brands2.png';
import brand3 from '../../assets/image/Brands/Brands3.png';
import brand4 from '../../assets/image/Brands/Brands4.png';
import brand5 from '../../assets/image/Brands/Brands5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Đảm bảo đã import CSS
import 'swiper/css'; // Import Swiper styles
const brands = [
  {
    id: 1,
    src: brand1,
    alt: 'Brand 1',
  },
  {
    id: 2,
    src: brand2,
    alt: 'Brand 2',
  },
  {
    id: 3,
    src: brand3,
    alt: 'Brand 3',
  },
  {
    id: 4,
    src: brand4,
    alt: 'Brand 4',
  },
  {
    id: 5,
    src: brand5,
    alt: 'Brand 5',
  },
  {
    id: 6,
    src: brand5,
    alt: 'Brand 5',
  },
  {
    id: 7,
    src: brand5,
    alt: 'Brand 5',
  },
];
const BrandsSection = () => {
  return (
    <section className={styles.brandsSection}>
      <div className={`container ${styles.brandsWrapper}`}>
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 100,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <img
                src={brand.src}
                alt={brand.alt}
                className={styles.brandImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default BrandsSection;
