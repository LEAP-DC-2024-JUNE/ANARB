import { Header } from "../../../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <h1>Products iin layout</h1> */}
      <Header />
      {children}
    </div>
  );
};
export default Layout;
