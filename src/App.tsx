import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notfound from "./pages/NotFound";
import Home from "./pages/home";
import Footer from "./components/UI/Footer";
import { useContext, useRef, useEffect } from "react";
import HamMenu from "./components/UI/HamMenu";
import HamCategory from "./components/UI/HamCategory";
import NavBar from "./components/UI/NavBar";
import menuContext from "./store/BurgerMenuContext";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/aboutUs";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";

function App() {
  const { menuState, categoryState, onClose } = useContext(menuContext);
  const links = [
    { name: "خانه", url: "/" },
    { name: "دوره های آنلاین", url: "/courses" },
    { name: "آزمون های آنلاین", url: "/courses" },
    { name: "درباره ما", url: "/aboutus" },
    { name: "ارتباط با ما", url: "/contactus" },
  ];

  // Refs to handle outside clicks
  const menuRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);

  // Effect to handle clicks outside of the menu and category
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuState &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
      if (
        categoryState &&
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuState, categoryState, onClose]);

  return (
    <Router>
      {menuState && (
        <div ref={menuRef}>
          <HamMenu />
        </div>
      )}
      {categoryState && (
        <div ref={categoryRef}>
          <HamCategory />
        </div>
      )}

      <NavBar logoText="LOGO" links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/courses" element={<ProductList />} />
        <Route path="/course/:id" element={<SingleProduct />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer links={links} />
    </Router>
  );
}

export default App;
