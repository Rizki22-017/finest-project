

const LoginForm = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
      <img src="/assets/img/login.jpg" alt="Gambar Login" style={styles.image}></img>     
     </div>
      <div style={styles.formSection}>
        <h2 style={styles.title}>Log In</h2>
        <p style={styles.subtitle}>
          Welcome back to Finest! Please login to your account
        </p>
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
          New User? <a href="#" style={styles.link}>Sign In</a>
        </p>
      </div>
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
    marginBottom: '30px',
    color: '#666',
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