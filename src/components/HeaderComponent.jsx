import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavDropdown, Modal } from "react-bootstrap";
import { Role } from "../pages/Role";

export const HeaderComponent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State untuk modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state menu
  };

  const handleCloseModal = () => setShowModal(false); // Menutup modal
  const handleShowModal = () => setShowModal(true); // Menampilkan modal

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
                    className={location.pathname === "/portfolio" ? "active" : ""}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalog-detail"
                    className={location.pathname === "/catalog-detail" ? "active" : ""}
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
                <li style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <NavDropdown
                    title="Login as"
                    id="collapsible-nav-dropdown"
                    style={{ padding: "0", display: "inline-block" }}
                  >
                    <NavDropdown.Item
                      href="#action/3.1"
                      style={{ padding: "5px 10px", display: "block" }}
                    >
                      <i className="fa-solid fa-chart-line icon" style={{ marginRight: "10px" }} />
                      Investor
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.2"
                      style={{ padding: "5px 10px", display: "block" }}
                    >
                      <i className="fa-solid fa-fish icon" style={{ marginRight: "10px" }} />
                      Fish Farmers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.3"
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
                      Sign In
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
