import Button from '../../../Button';
import styles from './footer.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Image from '../../../../assets/image/Images';
const Footer = () => {
  const [form, setForm] = useState('');
  const [noti, setNoti] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setForm(newValue);
  };
  //responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    //gọi phương thức
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleClick = () => {
    // Cập nhật thông báo khi người dùng nhấn nút
    if (form.trim() === '') {
      // Nếu form trống, không hiển thị thông báo
      setNoti('');
      return;
    }

    // Regex kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form)) {
      setNoti('Email không hợp lệ');
      setIsValidEmail(false);
    } else {
      setNoti(`Đã gửi mail đến: ${form}`);
      setIsValidEmail(true);
      setForm('');
    }
  };

  return (
    <>
      <div className={`container mt-5 ${styles.formFooter}`}>
        <div className="row">
          <div className="col-md-8">
            <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
          </div>
          <div className="col-md-4">
            <div className={` ${styles.emailInput}`}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
              <input
                type="email"
                placeholder="Enter your email"
                value={form}
                onChange={handleChange}
              />
            </div>

            {noti && (
              <p className={isValidEmail ? styles.sucess : styles.error}>
                {noti}
              </p>
            )}
            <Button
              onClick={handleClick}
              className={styles.ctaButton}
              actionName="Subscribe to Newsletter"
              color="black"
            />
          </div>
        </div>
      </div>
      <footer className={`mt-5 ${styles.footer}`}>
        {isMobile ? (
          <div className={styles.mainFooter}>
            <div className="container">
              <div className="row">
                <div className={`col col-xs-12 ${styles.colLogo}`}>
                  <a href="/">
                    <div className="styles logoImage">
                      <img src={Image.logo} alt="" />
                    </div>
                  </a>
                  <p>
                    We have clothes that suits your style and which you’re proud
                    to wear. From women to men.
                  </p>
                  <div className={styles.iconSocial}>
                    <a href="">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="">
                      {' '}
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="">
                      {' '}
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-6 ">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.mainFooter}>
            <div className="container">
              <div className="row">
                <div className={`col col-xs-12 ${styles.colLogo}`}>
                  <a href="/">
                    <div className="styles logoImage">
                      <img src={Image.logo} alt="" />
                    </div>
                  </a>
                  <p>
                    We have clothes that suits your style and which you’re proud
                    to wear. From women to men.
                  </p>
                  <div className={styles.iconSocial}>
                    <a href="">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="">
                      {' '}
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="">
                      {' '}
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Features</a>
                    </li>
                    <li>
                      <a href="">Works</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};
export default Footer;
