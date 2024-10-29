import styles from './homebanner.module.scss';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import Image from '../../../assets/image/Images';
import SpecialNumber from '../../Layout/Default Layout/SpecialNumber';
import 'animate.css';
const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={`row ${styles.wrapper}`}>
          <div className="col col-md-12 col-lg-6">
            <div className={styles.inner}>
              <h1 className="animate__animated animate__bounce">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link to="/shop">
                <Button
                  className={`mt-3 ${styles.button}`}
                  actionName="Shop Now"
                />
              </Link>
              <div className={`mt-5 d-flex ${styles.numberDetails}`}>
                <div className="row w-100">
                  <div className="col-6 col-md-3">
                    <SpecialNumber number={200} title="International Brands" />
                  </div>
                  <div className="col-6 col-md-3">
                    <SpecialNumber
                      number={2000}
                      title="High-Quality Products"
                    />
                  </div>
                  <div className="col-6 col-md-3">
                    <SpecialNumber number={30000} title="Happy Customers" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col col-md-12 col-lg-6 ${styles.bannerHomeWrapper}`}>
            <div className={styles.bannerHome}>
              <img src={Image.styleitem1} alt="" />
            </div>
            <div className={`${styles.decor} ${styles.decor1}`}>
              <img src={Image.star} alt="" />
            </div>
            <div className={`${styles.decor} ${styles.decor2}`}>
              <img src={Image.star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
