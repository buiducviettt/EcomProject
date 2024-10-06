import styles from './homebanner.module.scss'
import Button from '../../Button'
import Image from '../../../assets/image/Images'
import SpecialNumber from '../../Layout/Default Layout/SpecialNumber'
import 'animate.css';
const HomeBanner = () => {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={`row ${styles.wrapper}`}>
                    <div className="col col-md-6">
                        <div className={styles.inner}>
                            <h1 className='animate__animated animate__bounce'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            <Button className='mt-3' actionName="Shop Now" />
                            <div className={`mt-5 d-flex ${styles.numberDetails}`}>
                                <SpecialNumber
                                    number="200+"
                                    title = "International Brands"
                                />
                                 <SpecialNumber
                                    number="2,000+"
                                    title = "High-Quality Products"
                                />
                                 <SpecialNumber
                                    number="30,000+"
                                    title = "Happy Customers"
                                />
                                
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6">
                        <div className={styles.bannerHome}>
                            <img src={Image.bannerHome} alt="" />
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

    )
}
export default HomeBanner