import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main> {/* Nội dung chính sẽ được hiển thị ở đây */}
            <Footer />
        </>
    );
};

export default DefaultLayout;
