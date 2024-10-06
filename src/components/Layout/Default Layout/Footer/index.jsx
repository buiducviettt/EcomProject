import Button from '../../../Button'
import styles from './footer.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub,faFacebook,faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from '../../../../assets/image/Images'
const Footer = () => {
    const [form, setForm] = useState('');
    const [noti, setNoti] = useState('');
    const handleChange = (e) => {
        const newValue = e.target.value;
        setForm(newValue)
    }
    const handleClick = () => {
           // Cập nhật thông báo khi người dùng nhấn nút
      if (form.trim() === '') {
            // Nếu form trống, không hiển thị thông báo
            setNoti('');
            return;
        }
        // Cập nhật thông báo khi người dùng nhấn nút
        setNoti(`Đã gửi mail đến: ${form}`);
        // Reset lại giá trị form nếu cần
        setForm('');
        
    }
    return (
        <>
             <div className={`container ${styles.formFooter}`}>
                <div className="row">
                    <div className="col-md-8">
                        <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
                    </div>
                    <div className="col-md-4">
                        <div className={` ${styles.emailInput}`}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
                            <input type="text" placeholder='Enter your email' 
                                value={form}
                                onChange={handleChange}
                            />
                        </div>
                        
                         {noti && <p className={styles.notification}>{noti}</p>}
                        <Button
                            onClick = {handleClick}
                            className={styles.ctaButton}
                            actionName="Subscribe to Newsletter"
                            color="black"
                        />
                    </div>
                </div>
            </div>
        <footer className={`mt-5 ${styles.footer}`}>     
            <div className={styles.mainFooter}>
                <div className="container">
                    <div className="row">
                            <div className={`col ${styles.colLogo}`}>
                            <a href="/">
                                <div className="styles logoImage">
                                <img src={Image.logo} alt="" />
                                </div></a>
                            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div className={styles.iconSocial}>   
                                <a href=''><FontAwesomeIcon icon={faGithub} /></a>
                                <a href=''><FontAwesomeIcon icon={faFacebook} /></a>
                               <a href=''> <FontAwesomeIcon icon={faXTwitter} /></a>
                               <a href=''> <FontAwesomeIcon icon={faInstagram} /></a>                             
                            </div>
                        </div>
                        <div className="col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Works</a></li>
                                <li><a href="">Career</a></li>
                            </ul>
                        </div>
                          <div className="col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Works</a></li>
                                <li><a href="">Career</a></li>
                            </ul>
                        </div>
                          <div className="col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Works</a></li>
                                <li><a href="">Career</a></li>
                            </ul>
                        </div>
                          <div className="col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Works</a></li>
                                <li><a href="">Career</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            </footer>
            </>
    )

}
export default Footer