/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHourglass1,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import SearchInput from '../../SearchInput/index';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// eslint-disable-next-line react/prop-types
const SearchMobile = ({ products, className }) => {
  return (
    <div className={className}>
      <Tippy
        interactive={true}
        placement="bottom"
        content={<SearchInput products={products} />}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Tippy>
    </div>
  );
};
export default SearchMobile;
