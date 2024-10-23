import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './searchinput.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const SearchInput = ({ products, className }) => {
  const [searchInput, setSearchInput] = useState(''); // State lưu giá trị tìm kiếm
  const [searchResult, setSearchResult] = useState([]); // State lưu kết quả tìm kiếm
  const [isSearching, setisSearching] = useState(false); // State kiểm tra quá trình tìm kiếm

  // Xử lý thay đổi khi người dùng nhập vào ô tìm kiếm
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value); // Cập nhật giá trị tìm kiếm
  };

  useEffect(() => {
    setisSearching(true);
    const debounce = setTimeout(() => {
      if (searchInput.length > 0) {
        // eslint-disable-next-line react/prop-types
        const filteredProducts = products.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase()),
        );
        setSearchResult(filteredProducts);
      } else {
        setSearchResult([]); // Nếu không có giá trị trong ô tìm kiếm, đặt kết quả là rỗng
      }
      setisSearching(false);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchInput, products]);

  return (
    <div className={`${styles.hdSearch} ${className}`}>
      <div className={`${styles.inputSearch}`}>
        <input
          type="text"
          className="form-control"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search for products..."
        />
      </div>

      {/* Hiển thị kết quả tìm kiếm */}
      {searchInput && (
        <div className={styles.searchResult}>
          {isSearching ? (
            <p>Searching....</p>
          ) : (
            <div>
              {searchResult.length > 0 ? (
                <table className={styles.resultTable}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResult.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <Link
                            to={`/product/${item.id}`}
                            onClick={() => {
                              setSearchInput(''); // Reset input khi chọn sản phẩm
                              setSearchResult([]); // Reset kết quả tìm kiếm
                            }}
                          >
                            {item.title}
                          </Link>
                        </td>
                        <td>${item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No results found.</p>
              )}
            </div>
          )}
        </div>
      )}
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
    </div>
  );
};

export default SearchInput;
