import DefaultLayout from '../../components/Layout/Default Layout/index';
import ProductList from '../../components/Categories/Product List/index';
const NewArrival = () => {
  const priceRange = [0, 1000];
  return (
    <DefaultLayout>
      <ProductList
        title="New Arrival"
        category="women's clothing"
        priceRange={priceRange}
      />
    </DefaultLayout>
  );
};
export default NewArrival;
