import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/main.css";
import { HeaderComponent } from "./components/HeaderComponent";
import { CatalogDetail } from "./pages/CatalogDetail";
import { Portfolio } from "./pages/Portfolio";
import { AboutUs } from "./pages/AboutUs";
import { FooterComponent } from "./components/FooterComponent";
import LoginForm from "./components/login/LoginForm";
import SignIn from "./components/login/SignIn";
import Homepage from "./pages/Homepage";
import LoginFish from "./components/login/LoginFish"
import { Role } from "./components/login/Role";
import { Catalog } from "./pages/Catalog";

function App() {
  const location = useLocation(); // Mendapatkan path URL saat ini

  // Daftar route tanpa header dan footer
  const noHeaderFooterRoutes = ["/login", "/signin", "/login-fishfarmers"];

  return (
    <>
      {/* Tampilkan Header jika bukan di halaman login/signin */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <HeaderComponent />}

      <Routes>
        <Route path="/catalog-detail" element={<CatalogDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login-fishfarmers" element={<LoginFish />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/role" element={<Role />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>

      {/* Tampilkan Footer jika bukan di halaman login/signin */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <FooterComponent />}
    </>
  );
}

export default App;
