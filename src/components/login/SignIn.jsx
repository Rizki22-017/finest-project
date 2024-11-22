

const SignUp = () => {
  return (
    <>
    <div className="signup-container">
        <div className="image-section">
          <img src="/assets/img/login.png" alt="Boat on water" />
        </div>
        <div className="form-section">
          <h1>Sign In</h1>
          <p>Welcome to Finest! Please create your account</p>
          <form>
            <div className="name-group">
              <div className="input-group">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="signup-btn">Sign In</button>
            <button type="button" className="google-btn">
              <img src="/assets/img/google.png" alt="Google Icon" />
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
      <style>
        {`
          .signup-container {
            display: flex;
            height: 100vh;
            background-color: #f9f9f9;
          }

          .image-section {
            flex: 1;
            overflow: hidden;
          }

          .image-section img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .form-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            background-color: white;
          }

          .form-section h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }

          .form-section p {
            color: #777;
            margin-bottom: 1.5rem;
          }

          .name-group {
            display: flex;
            gap: 1rem;
            width: 100%;
          }

          .input-group {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
          }

          .input-group input {
            border: none;
            outline: none;
            width: 100%;
            padding: 0.5rem;
          }

          .signup-btn {
            width: 100%;
            padding: 0.7rem;
            border: none;
            border-radius: 5px;
            background-color: #374151;
            color: white;
            cursor: pointer;
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .google-btn {
            width: 100%;
            padding: 0.7rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1rem;
            background-color: white;
          }

          .google-btn img {
            width: 20px;
            height: 20px;
            margin-right: 0.5rem;
          }
        `}
      </style>
    
    </>
  );
};

export default SignUp;
