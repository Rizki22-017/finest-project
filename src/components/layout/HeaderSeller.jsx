import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavDropdown, Modal } from "react-bootstrap";
import { Role } from "../login/Role";
import finestLogo from '../../assets/img/finest-logo.png';

export const HeaderSeller = () => {
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
  // const handleShowModal = () => setShowModal(true); // Menampilkan modal

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
              <img src={finestLogo} alt="Logo" />
              <h1 className="sitename">Finest</h1>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link
                    to="dashboard"
                    className={location.pathname === "dashboard" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="myproduct"
                    className={location.pathname === "seller/myproduct" ? "active" : ""}
                  >
                    My Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="order"
                    className={location.pathname === "seller/order" ? "active" : ""}
                  >
                    Order
                  </Link>
                </li>
                <li>
                  <Link
                    to="finance"
                    className={location.pathname === "seller/finance" ? "active" : ""}
                  >
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    to="report"
                    className={location.pathname === "seller/report" ? "active" : ""}
                  >
                    Report
                  </Link>
                </li>
                <li style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <NavDropdown
                    title={`Hi, ${firstName}!`}
                    id="collapsible-nav-dropdown"
                    style={{ padding: "0", display: "inline-block" }}
                  >
                    
                    <NavDropdown.Item
                      href="profile"
                      style={{ padding: "5px 10px", display: "block" }}
                    >
                      <i className="fa-solid fa-fish icon" style={{ marginRight: "10px" }} />
                      Show Profile
                    </NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      // onClick={handleShowModal} // Menampilkan modal saat Sign In diklik
                      style={{ padding: "5px 10px", display: "block" }}
                      onClick={handleLogout}
                    >
                      <i className="fa-solid fa-right-to-bracket" style={{ marginRight: "10px" }} />
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
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
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Role/>
        </Modal.Body>
        <Modal.Footer>
          <span>Choose your role first, then let&apos;s dive in!</span>
        </Modal.Footer>
      </Modal>
    </>
  );
};
