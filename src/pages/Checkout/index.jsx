/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './checkout.module.scss';
import Button from '../../components/Button';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Modal from '../../components/ModalBox';
const Checkout = () => {
  //step
  const [currentStep, setCurrentStep] = useState(1);
  const { cart, total } = useContext(CartContext);
  const [cities, setCities] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCities, setSelectedCities] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  // lấy dữ liệu
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = () => {
    const orderData = {
      name,
      phone,
      email,
      city: selectedCities,
      district: selectedDistrict,
      ward: selectedWard,
      note,
      cart,
      total,
    };
    console.log('Order data:', orderData);
  };

  // lay api
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch('https://provinces.open-api.vn/api/p/');
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchAPI();
  }, []);
  const handleCityChange = (e) => {
    const cityID = e.target.value;
    setSelectedCities(cityID);

    const fetchDistrict = async () => {
      try {
        const response = await fetch(
          `https://provinces.open-api.vn/api/p/${cityID}?depth=2 `,
        );
        const data = await response.json();
        setDistrict(data.districts);
      } catch (error) {
        console.error('can take the district', error);
      }
    };
    fetchDistrict();
  };
  const handleChangeDistrict = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    const fetchDistrics = async () => {
      try {
        const response = await fetch(
          `https://provinces.open-api.vn/api/d/${districtId}?depth=2`,
        );
        const data = await response.json();
        setWards(data.wards);
      } catch (error) {
        console.error('can take the district', error);
      }
    };
    fetchDistrics();
  };

  return (
    <DefaultLayout>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            {currentStep === 1 && (
              <div className={styles.formWrapper}>
                <div className={styles.inner}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name here"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col col-sm-6">
                      <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter name here"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col col-sm-6">
                      <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter name here"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-sm-6">
                        <div className={styles.dropdownGroup}>
                          <label htmlFor="city">City</label>
                          <select name="" id="city" onChange={handleCityChange}>
                            <option value="">Select City</option>
                            {cities.map((city) => (
                              <option key={city.code} value={city.code}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col col-sm-6">
                        <div className={styles.dropdownGroup}>
                          <label htmlFor="district">District</label>
                          <select
                            name=""
                            id="district"
                            onChange={handleChangeDistrict}
                          >
                            <option value="">Select District</option>
                            {districts.map((district) => (
                              <option key={district.code} value={district.code}>
                                {district.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-sm-6">
                          <div className={styles.dropdownGroup}>
                            <label htmlFor="ward">Ward</label>
                            <select
                              name=""
                              id="ward"
                              onChange={(e) => setSelectedWard(e.target.value)}
                            >
                              <option value="">Select Ward</option>
                              {wards.map((ward) => (
                                <option key={ward.code} value={ward.code}>
                                  {ward.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col col-sm-6">
                          <div className={styles.inputGroup}>
                            <label htmlFor="details">Details</label>
                            <input
                              type="text"
                              placeholder="Example : 80 , ward 7 ,.."
                            />
                          </div>
                        </div>
                        <div className={styles.inputGroup}>
                          <label htmlFor="note">Note</label>
                          <textarea
                            rows={5}
                            name="note"
                            id="note"
                            placeholder="Please note here"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* STEP 2 TRONG QUY TRÌNH */}
            {currentStep === 2 && (
              <>
                <div className={styles.boxwrapper}>
                  <div className={styles.inner}>
                    <span>Phí vận chuyển</span>
                    <span style={{ color: 'green' }}>35.000 VNĐ</span>
                  </div>
                </div>
                <div className={`mt-5 ${styles.payment}`}>
                  <h3>Payment Method</h3>
                  <div
                    className={`${styles.boxwrapper} ${styles.paymentMethod}`}
                  >
                    <div className={styles.inner}>
                      <span> Bank Direct</span>
                      <input
                        type="checkbox"
                        id="direct"
                        className="form-check-input"
                      />
                    </div>
                    <p className="mt-3" style={{ color: 'gray' }}>
                      Vui lòng chuyển khoản qua stk với nội dung chuyển khoản :
                      SĐT + Mã đơn hàng Gửi hình ảnh giao dịch của bạn qua tin
                      nhắn cho chúng mình, nhân viên sẽ tư vấn và gọi điện xác
                      nhận đơn hàng cho bạn.
                    </p>
                  </div>
                </div>
                <div className={`mt-5 ${styles.payment}`}>
                  <div
                    className={`${styles.boxwrapper} ${styles.paymentMethod}`}
                  >
                    <div className={styles.inner}>
                      <span> COD</span>
                      <input
                        type="checkbox"
                        id="cod"
                        className="form-check-input"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className={`d-flex ${styles.buttonCTA}`}>
              {currentStep >= 1 && currentStep < 2 ? (
                <>
                  <Button
                    className="mt-5"
                    actionName={'Continue'}
                    onClick={() => {
                      setCurrentStep(currentStep + 1);
                    }}
                  />
                  <Link to="/shop">
                    <Button className="mt-5" actionName={'Back to shop'} />
                  </Link>
                </>
              ) : currentStep >= 2 ? (
                <>
                  <Button
                    className="mt-5"
                    actionName={' Turn Back '}
                    onClick={() => {
                      setCurrentStep(currentStep - 1);
                    }}
                  />

                  <div>
                    <Button
                      className="mt-5"
                      actionName={'Checkout'}
                      onClick={() => setShowModal(true)}
                    />
                  </div>
                </>
              ) : null}
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <h1 style={{ textAlign: 'center' }}>Thank you for your order</h1>
              <p style={{ textAlign: 'center' }}>
                We will contact you for a few minutes
              </p>
              <div className={styles.orderDetails}>
                <p>Your Order</p>
                <p>Name: {name}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <p>Note: {note}</p>
                <h3>Total: ${total}</h3>
              </div>
            </Modal>
          </div>

          <div className={`col-12 col-sm-6 ${styles.cartOrder} mt-5`}>
            <h3>Your order</h3>
            <ul className={styles.orderWrapper}>
              <div className={styles.inner}>
                {cart.map((item) => (
                  <li className={styles.itemOrder} key={item.id}>
                    <div className={styles.imgProd}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className={styles.prodInfo}>
                      <div className={styles.prodTitle}>{item.title}</div>
                      <div className={styles.prodQuantity}>
                        Quantity: {item.quantity}
                      </div>
                      <div>Price : ${item.price}</div>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
            <div className={`${styles.total} mt-5`}>
              <h3>Total: ${total} </h3>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Checkout;
