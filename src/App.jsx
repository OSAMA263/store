import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./components/pages/home/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "./components/shared/LoadingPage";
import { useProductsState, useUserState } from "./state/useStates";
import { UpdateUsers } from "./state/slices/client/UsersSlice";
import { fetchProducts } from "./state/slices/admin/ProductsSlice";

function App() {
  const location = useLocation();
  const { auth, users } = useUserState();
  const products = useProductsState();
  const dispatch = useDispatch();

  // fetch products and store them in the LS
  // why?so we dont have to fetch the prodcut every time the user enther the fuckin page..iguess
  useEffect(() => {
    !localStorage.products && dispatch(fetchProducts());
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // get th logged in user cart & wishlist
  useEffect(() => {
    auth.isLoggedIn && dispatch(UpdateUsers(auth));
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth, users]);

  // scroll top top during routing
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingPage />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {pages.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}

const FQA = lazy(() => import("./components/pages/FAQs/FAQs"));
const Customer = lazy(() => import("./components/pages/customer/Customer"));
const About = lazy(() => import("./components/pages/about/About"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const NotFound = lazy(() => import("./components/pages/404Error/NotFound"));
const Shop = lazy(() => import("./components/pages/shop/Shop"));
const ProductPage = lazy(() =>
  import("./components/pages/single product/ProductPage")
);
const Categories = lazy(() =>
  import("./components/pages/categories/Categories")
);
const Wishlist = lazy(() =>
  import("./components/pages/Cart& Wishlist/Wishlist")
);
const Cart = lazy(() => import("./components/pages/Cart& Wishlist/Cart"));
const Checkout = lazy(() => import("./components/pages/checkout/Checkout"));
const Dashboard = lazy(() => import("./components/pages/dashboard/Dashboard"));

const pages = [
  { path: "/", component: <Home /> },
  { path: "/shop", component: <Shop /> },
  { path: "/categories", component: <Categories /> },
  { path: "/about-us", component: <About /> },
  { path: "/contact-us", component: <Contact /> },
  { path: "/FAQ", component: <FQA /> },
  { path: "/customer", component: <Customer /> },
  { path: "/customer/dashboard", component: <Dashboard /> },
  { path: "/shop/:productID", component: <ProductPage /> },
  { path: "/cart", component: <Cart /> },
  { path: "/wishlist", component: <Wishlist /> },
  { path: "/checkout", component: <Checkout /> },
  { path: "*", component: <NotFound /> },
];

export default App;
