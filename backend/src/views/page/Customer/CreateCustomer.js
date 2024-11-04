import React, { useState } from 'react';
import apiCustomer from '../../../service/apiCustomer';
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

const CreateCustomer = () => {
  const [name, setName] = useState('');
  const [user_name, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('2');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== '' && email !== '' && password !== '' && phone !== '') {
      const data = {
        name: name,
        user_name: user_name,
        email: email,
        phone: phone,
        password: password,
        roles: 'customer',
        status: status
      };

      try {
        const res = await apiCustomer.createCustomer(data);
        if (res.data !== null) {
          alert("Thêm dữ liệu thành công!");
          // Xóa dữ liệu input sau khi thêm thành công
          setName('');
          setUserName('');
          setEmail('');
          setPassword('');
          setPhone('');
        } else {
          alert("Không thành công!");
        }
      } catch (e) {
        console.log(e);
        alert("Đã xảy ra lỗi, vui lòng thử lại!");
      }
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thêm khách hàng mới</strong>
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
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateCustomer;