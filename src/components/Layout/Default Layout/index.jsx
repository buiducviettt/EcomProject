import Header from "./Header";
import Footer from "./Footer";
import { CartProvider } from "../../CartContext";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return (
        <CartProvider>
            <Header />
            <main>{children}</main> {/* Nội dung chính sẽ được hiển thị ở đây */}
            <Footer />
        </CartProvider>
    );
};

export default DefaultLayout;
