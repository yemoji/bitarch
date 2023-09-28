import Navbar from "./navbar";
import Footer from "./footer";

import Meta from "./meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div dir="rtl">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
