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
import { Education } from "./pages/Education";
import { EducationDetail } from "./pages/EducationDetail";
import { Seller } from "./Seller";
import { Maintanance } from "./seller/Maintanance";
import { Home } from "./pages/Home";

function App() {
  const location = useLocation(); // Mendapatkan path URL saat ini

  // Daftar route tanpa header dan footer
  const noHeaderFooterRoutes = ["/login", "/signin", "/login-fishfarmers"];

  // Periksa apakah path saat ini adalah /seller/* atau tidak
  const isSellerRoute = location.pathname.startsWith("/seller");

  return (
    <>
      {/* Tampilkan Header jika bukan di halaman login/signin atau seller */}
      {!noHeaderFooterRoutes.includes(location.pathname) && !isSellerRoute && <HeaderComponent />}

      <Routes>
        <Route path="/catalog-detail" element={<CatalogDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login-fishfarmers" element={<LoginFish />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<Role />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education-detail" element={<EducationDetail />} />
        <Route path="/seller/*" element={<Seller />} />
        <Route path="/error" element={<Maintanance />} />
      </Routes>

      {/* Tampilkan Footer jika bukan di halaman login/signin atau seller */}
      {!noHeaderFooterRoutes.includes(location.pathname) && !isSellerRoute && <FooterComponent />}
    </>
  );
}

export default App;