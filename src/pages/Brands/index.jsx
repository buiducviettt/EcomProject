import DefaultLayout from '../../components/Layout/Default Layout';
import ProductList from '../../components/Categories/Product List';
const Brands = () => {
  const priceRange = [0, 1000];
  return (
    <DefaultLayout>
      <ProductList
        title="Levi's"
        priceRange={priceRange}
        category="men's clothing"
      />
      <ProductList
        title="Yame"
        priceRange={priceRange}
        category="women's clothing"
      />
    </DefaultLayout>
  );
};
export default Brands;
