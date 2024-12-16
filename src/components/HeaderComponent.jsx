import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavDropdown, Modal } from "react-bootstrap";
import { Role } from "./login/Role";

export const HeaderComponent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State untuk modal
  const [firstName, setUserName] = useState(""); // State untuk menyimpan nama pengguna
  
  // Mengambil firstName dari localStorage
  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    if (firstName) {
      setUserName(firstName);
    }

  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state menu
  };

  const handleCloseModal = () => setShowModal(false); // Menutup modal
  const handleShowModal = () => setShowModal(true); // Menampilkan modal

  // Fungsionalitas Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    setUserName(""); // Hapus nama pengguna setelah logout
    window.location.href = "/"; // Redirect ke halaman login
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
            <a href="/" className="logo d-flex align-items-center">
              <img src="/assets/img/finest-logo.png" alt="Logo" />
              <h1 className="sitename">Finest</h1>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalog"
                    className={location.pathname === "/catalog" ? "active" : ""}
                  >
                    Katalog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className={location.pathname === "/portfolio" ? "active" : ""}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education"
                    className={location.pathname === "/education" ? "active" : ""}
                  >
                    Artikel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    Tentang Kami
                  </Link>
                </li>

                {/* Menampilkan nama pengguna dan tombol Logout jika sudah login */}
                {firstName ? (
                  <li>
                    <NavDropdown
                      title={`Hi, ${firstName}!`}
                      id="collapsible-nav-dropdown"
                      style={{ padding: "0", display: "inline-block" }}
                    >
                      <NavDropdown.Item
                        onClick={handleLogout}
                        style={{ padding: "5px 10px", display: "block" }}
                      >
                        <i className="fa-solid fa-right-to-bracket" style={{ marginRight: "10px" }} />
                        Keluar
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                ) : (
                  <li style={{ listStyle: "none", margin: "0", padding: "0" }}>
                    <NavDropdown
                      title="Masuk"
                      id="collapsible-nav-dropdown"
                      style={{ padding: "0", display: "inline-block" }}
                    >
                      <NavDropdown.Item
                        href="/login"
                        style={{ padding: "5px 10px", display: "block" }}
                      >
                        <i className="fa-solid fa-chart-line icon" style={{ marginRight: "10px" }} />
                        Investor
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/login-fishfarmers"
                        style={{ padding: "5px 10px", display: "block" }}
                      >
                        <i className="fa-solid fa-fish icon" style={{ marginRight: "10px" }} />
                        Fish Farmers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/login"
                        style={{ padding: "5px 10px", display: "block" }}
                      >
                        <i className="fa-solid fa-unlock-keyhole" style={{ marginRight: "10px" }} />
                        Admin
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={handleShowModal} // Menampilkan modal saat Sign In diklik
                        style={{ padding: "5px 10px", display: "block" }}
                      >
                        <i className="fa-solid fa-right-to-bracket" style={{ marginRight: "10px" }} />
                        Daftar
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                )}
              </ul>
              <i
                className="mobile-nav-toggle d-xl-none bi bi-list"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              />
            </nav>
          </div>
        </div>
      </header>

      {/* Modal Sign In */}
      <Modal className="modal-xl" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Daftar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Role/>
        </Modal.Body>
        <Modal.Footer>
          <span>Pilih tipe akun kamu, kemudian ayo kita menyelam!!</span>
        </Modal.Footer>
      </Modal>
    </>
  );
};
