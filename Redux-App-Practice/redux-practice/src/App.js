import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import styles from "./App.modules.css";
import ProductsPage from "./ProductsPage";
import ContactsPage from "./ContactsPage";
import AboutUsPage from "./AboutUsPage";
import CartPage from "./CartPage";

function App() {

    const handleLogin = () => {

    }

    return (
        <BrowserRouter>
            <nav className={styles.nav}>
                <Link to="/products">Products</Link>
                <Link to="/contacts">Contact us</Link>
                <Link to="/about">About us</Link>
                <Link to="/cart">My cart</Link>
                <button onClick={handleLogin}>Login</button>
            </nav>

            <h1>Hello</h1>

            <Routes>
              <Route path="/products" element={<ProductsPage/>}/>
              <Route path="/contacts" element={<ContactsPage/>}/>
              <Route path="/about" element={<AboutUsPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/" element={<ProductsPage/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
