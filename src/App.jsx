import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./components/pages/home/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "./components/shared/LoadingPage";

const FQA = lazy(() => import("./components/pages/FAQs/FAQs"));
const Customer = lazy(() => import("./components/pages/customer/Customer"));
const About = lazy(() => import("./components/pages/about/About"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const NotFound404 = lazy(() => import("./components/shared/NotFound404"));
const Shop = lazy(() => import("./components/pages/shop/Shop"));
const ProductPage = lazy(() =>
  import("./components/pages/single product//ProductPage")
);
const Categories = lazy(() =>
  import("./components/pages/categories/Categories")
);
const Wishlist = lazy(() =>
  import("./components/pages/Cart& Wishlist/Wishlist")
);
const Cart = lazy(() => import("./components/pages/Cart& Wishlist/Cart"));
const components = [
  { path: "/", component: <Home /> },
  { path: "/shop", component: <Shop /> },
  { path: "/categories", component: <Categories /> },
  { path: "/about-us", component: <About /> },
  { path: "/contact-us", component: <Contact /> },
  { path: "/FAQ", component: <FQA /> },
  { path: "/customer", component: <Customer /> },
  { path: "/id", component: <ProductPage /> },
  { path: "/cart", component: <Cart /> },
  { path: "/wishlist", component: <Wishlist /> },
  { path: "*", component: <NotFound404 /> },
];

function App() {
  const products = useSelector((state) => state.products);
  const location = useLocation();
  const dispatch = useDispatch();
  // scroll top top when between routing
  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [location.pathname]);

  // after order u can cansel ur order read the FQA
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingPage />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {components.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;