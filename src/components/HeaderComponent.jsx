import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const HeaderComponent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state menu
  };

  useEffect(() => {
    // Menambahkan atau menghapus kelas .mobile-nav-active pada body sesuai dengan isMenuOpen
    if (isMenuOpen) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  }, [isMenuOpen]);

  return (
    <>
      <header id="header" className="header sticky-top">
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/finest-logo.png" alt="Logo" />
              <h1 className="sitename">Finest</h1>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className={
                      location.pathname === "/portfolio" ? "active" : ""
                    }
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalog-detail"
                    className={
                      location.pathname === "/catalog-detail" ? "active" : ""
                    }
                  >
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className={location.pathname === "/login" ? "active" : ""}
                  >
                    Login
                  </Link>
                </li>
              </ul>
              {/* Ikon menu yang bisa diklik */}
              <i
                className="mobile-nav-toggle d-xl-none bi bi-list"
                onClick={toggleMenu}
                style={{ cursor: 'pointer' }}
              />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
