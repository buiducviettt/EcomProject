import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './checkout.module.scss';
import Button from '../../components/Button';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [cities, setCities] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCities, setSelectedCities] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

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
          <div className="col col-6">
            <div className={styles.formWrapper}>
              <div className={styles.inner}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name here"
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
                          <select name="" id="ward">
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
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="mt-5" actionName={'Thanh toán'} />
            </div>
          </div>
          <div className="col col-6">
            <h3>Your order</h3>
            <ul className={styles.orderWrapper}>
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Checkout;
