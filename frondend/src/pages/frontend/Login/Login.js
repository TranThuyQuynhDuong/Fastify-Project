import { Link } from "react-router-dom";
import { useAuth } from "../../../component/Provider/AuthProvider";
import { useState } from "react";
import apiCustomer from "../../../api/apiCustomer";
function Login() {

    const { setToken } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function login(event) {

        event.preventDefault();
        if (email !== '' && password !== '') {
            const data = {
                email: email,
                password: password
            };
            await apiCustomer.checkLogin(data).then(function (result) {
                if (result.data.data === null) {
                    alert(result.data.message);
                }
                else {
                    alert(result.data.message);
                    setToken(result.data.data.id);
                    // window.location.href = 'http://localhost:3001/';
                }
            })

        }
        else{
            alert('Vui lòng nhập đầy đủ thông tin !')
        }

    }


  return (
    <div className="login-container" style={styles.loginContainer}>
      <form onSubmit={login}>
        <h2 style={styles.h2}>Login</h2>

        <div>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email"
            required
            style={styles.input}
          />
        </div>

        <div>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter your password"
            required
            style={styles.input}
            type="password"
          />
        </div>

        <button type="submit" style={styles.button}>Login</button>

        {/* <div className="social-buttons" style={styles.socialButtons}>
          <div style={styles.socialButtonContainer}>
            <a href="#" className="btn btn-facebook" style={{ ...styles.socialButton, ...styles.facebookButton }}>
              <i className="fab fa-facebook-f" style={styles.socialIcon}></i>
            </a>
            <a href="#" className="btn btn-google" style={{ ...styles.socialButton, ...styles.googleButton }}>
              <i className="fab fa-google" style={styles.socialIcon}></i>
            </a>
			
          </div>
        </div> */}
		<p className="text-center mt-4">Don't have account? <Link to="/register">Sign up</Link></p>


        <div className="forgot-password" style={styles.forgotPassword}>
          {/* <button onClick={handleForgotPassword} style={styles.forgotPasswordLink}>
            Forgot password?
          </button> */}
        </div>
      </form>
    </div>
  );
}

const styles = {
  loginContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: '100px',
	marginBottom: '100px'
  },
  h2: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '5px'
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  button: {
	backgroundColor: 'orange',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
      backgroundColor: '#45a049'
    }
  },
  socialButtons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  socialButtonContainer: {
    display: 'flex',
    gap: '10px'
  },
  socialButton: {
    display: 'block',
    width: '50px',
    height: '50px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '10px',
    backgroundColor: '#f1f1f1',
    '& i': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: '#333'
    },
    '&:hover': {
      backgroundColor: '#e6e6e6'
    }
  },
  socialIcon: {
    fontSize: '24px'
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    color: 'white'
  },
  googleButton: {
    backgroundColor: '#db4437',
    color: 'white'
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: '10px'
  },
  forgotPasswordLink: {
    color: '#4CAF50',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#45a049'
    }
  }	
};

export default Login;
