
import { useState} from "react";
import { Breadcrumb, Modal } from "react-bootstrap";
import { Role } from "./Role";

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false); // State untuk modal

  

  const handleCloseModal = () => setShowModal(false); // Menutup modal
  const handleShowModal = () => setShowModal(true); // Menampilkan modal
  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
      <img src="/assets/img/login.png" alt="Gambar Login" style={styles.image}></img>     
     </div>
      <div style={styles.formSection}>
        <h2 style={styles.title}>Log In | Fish Farmers</h2>
        <p style={styles.subtitle}>
          Welcome back to Finest! Please login to your account
        </p>
        <Breadcrumb style={styles.breadcrumb}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Login</Breadcrumb.Item>
        </Breadcrumb>
        <form style={styles.form}>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <div style={styles.options}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} /> Remember Me
            </label>
            <a href="#" style={styles.link}>Forgot Password?</a>
          </div>
          <button type="submit" style={styles.loginButton}>Login</button>
          <button style={styles.googleButton}>
            <img
              src="/assets/img/google.png"
              alt="Google"
              style={styles.googleIcon}
            />
            Login with Google
          </button>
        </form>
        <p style={styles.footer}>
          New User? <a href="#" style={styles.link} onClick={handleShowModal}>Sign In</a>
        </p>
      </div>

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
    </div>   
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  imageSection: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  formSection: {
    flex: 1,
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: 0,
    color: '#666',
  },
  breadcrumb: {
    marginBottom: '0px',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '5px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  loginButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#334C65',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  googleIcon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  footer: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'center',
  },
};

export default LoginForm;