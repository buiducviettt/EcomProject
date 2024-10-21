import { useEffect, useState } from 'react';
import styles from './data.module.scss';
import FeedbackLayout from '../Layout/FeedbackLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Đảm bảo đã import CSS
import 'swiper/css'; // Import Swiper styles

const FeedbackData = () => {
  const [feedbacks, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments`,
        );
        const data = await response.json();
        setFeedback(data);
      } catch (error) {
        console.error(`The error is ${error}`);
      }
      setLoading(false);
    };
    fetchAPI();
    // responsive
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className={`${styles.wrapper} mt-5`}>
      <h2>OUR HAPPY CUSTOMERS</h2>
      <div className={`mt-5`}>
        {isMobile ? (
          <Swiper
            speed={2000}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className={styles.inner}>
                  <FeedbackLayout name={feedback.name} body={feedback.body} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            speed={2000} // Thời gian chuyển đổi giữa các slide
            modules={[Autoplay]} // Đăng ký Autoplay module
            spaceBetween={50} // Khoảng cách giữa các slide
            slidesPerView={4} // Số lượng slide hiển thị
            autoplay={{
              delay: 1000, // Không có độ trễ
              disableOnInteraction: false, // Tiếp tục auto sau khi tương tác
            }}
            loop={true} // Lặp lại các slide
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className={styles.inner}>
                  <FeedbackLayout name={feedback.name} body={feedback.body} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default FeedbackData;
