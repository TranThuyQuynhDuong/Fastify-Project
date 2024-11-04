// import React, { useState } from 'react';
// import { CContainer, CRow, CCol, CCard, CCardGroup, CCardBody, CForm, CFormInput, CInputGroup, CInputGroupText, CButton } from '@coreui/react';
// import { Link, useNavigate } from 'react-router-dom';
// import CIcon from '@coreui/icons-react';
// import { cilUser, cilLockLocked } from '@coreui/icons';
// import apiCustomer from '../../../service/apiCustomer';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   async function login(event) {
//     event.preventDefault();
//     if (email !== '' && password !== '') {
//         const data = {
//             email: email,
//             password: password
//         };
//         await apiCustomer.checkLoginadmin(data).then(function (result) {
//             if (result.data.data === null) {
//                 alert(result.data.message);
                
//             } else {
//                 alert(result.data.message);
//                 navigate('/dashboard'); // Redirect to the dashboard
//             }
//         });
//     } else {
//         alert('Vui lòng nhập đầy đủ thông tin !');
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm onSubmit={login}>
//                     <h1>Login</h1>
//                     <p className="text-body-secondary">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput
//                         placeholder="Email"
//                         autoComplete="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         autoComplete="current-password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton type="submit" color="primary" className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { CContainer, CRow, CCol, CCard, CCardGroup, CCardBody, CForm, CFormInput, CInputGroup, CInputGroupText, CButton } from '@coreui/react';
import { Link, useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { cilUser, cilLockLocked } from '@coreui/icons';
import apiCustomer from '../../../service/apiCustomer';

function Login({ onLoginSuccess }) { // Nhận hàm onLoginSuccess từ props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  async function login(event) {
    event.preventDefault();
    if (email !== '' && password !== '') {
        const data = {
            email: email,
            password: password
        };
        await apiCustomer.checkLoginadmin(data).then(function (result) {
            if (result.data.data === null) {
                alert(result.data.message);
                
            } else {
                alert(result.data.message);
                onLoginSuccess(); // Gọi hàm onLoginSuccess khi đăng nhập thành công
                navigate('/dashboard'); // Redirect to the dashboard
            }
        });
    } else {
        alert('Vui lòng nhập đầy đủ thông tin !');
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={login}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  {/* <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div> */}
                   {/* <img src={"../../../../public/login.png"} alt="Description of your image" /> */}
                   <img
          src={"../../../../public/1.jpg"}
          alt="Description of your image"
          style={{ width: '70%', height: 'auto' }} // Áp dụng kiểu CSS để thu nhỏ hình ảnh
        />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default Login;

