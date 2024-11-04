import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiCustomer from "../../../service/apiCustomer";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CRow,
} from '@coreui/react';
function CustomerUpdate() {

    const { id } = useParams();

    const navigate = useNavigate(); // chuyen trang


    const [name, setName] = useState('');
    const [user_name, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(2);



    useEffect(() => {
        apiCustomer.getCustomerById(id).then((res) => {
            try {
                setName(res.data.name);
                setUserName(res.data.user_name);
                setPhone(res.data.phone);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setStatus(res.data.status);
            } catch (e) {
                console.log(e);
            }
        })
    }, [])


    const handleSubmit = async (e) => {
        if (name !== '' && email !== '' && password !== '' && phone !== '') {
            e.preventDefault();
            const data = {
                name: name,
                user_name: user_name,
                email: email,
                phone: phone,
                password: password,
                roles: 'customer',
                status: status
            };

            await apiCustomer.updateCustomer(data, id).then((res) => {
                if (res.data != null) {
                    alert("Cập nhật dữ liệu thành công !")
                    navigate('/customer/customerlist')
                }
                else {
                    alert("Không thành công !")
                }
            })
        }
        else {
            e.preventDefault();
            alert('Vui lòng nhập đầu đủ thông tin !')
        }
    }



    return (
        <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Cập nhật thông tin khách hàng</strong>
            </CCardHeader>
            <CCardBody>
              <CForm className="row g-3" onSubmit={handleSubmit}>
                <CCol md={6}>
                  <CFormLabel htmlFor="name">Tên khách hàng:</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="user_name">Tên đăng nhập:</CFormLabel>
                  <CFormInput
                    type="text"
                    id="user_name"
                    value={user_name}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="phone">Số điện thoại:</CFormLabel>
                  <CFormInput
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="email">Email:</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="password">Mật khẩu:</CFormLabel>
                  <CFormInput
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputStatus">Trạng thái</CFormLabel>
                  <CFormSelect
                    id="inputStatus"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Lưu
                  </CButton>
                  <CButton
                    color="secondary"
                    className="ms-2"
                    onClick={() => navigate('/customer/customerlist')}
                  >
                    Hủy
                  </CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    );
}

export default CustomerUpdate;