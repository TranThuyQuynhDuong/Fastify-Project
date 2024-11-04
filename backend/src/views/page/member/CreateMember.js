import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import apiMember from '../../../service/apiMember' 
import { CButton, CForm, CFormInput, CFormSelect } from '@coreui/react'
import { useNavigate } from 'react-router-dom';

const CreateMember = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(1)
  const [roles, setRoles] = useState('admin')
  const [user_name, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('');
  const navigate = useNavigate(); // Sử dụng useNavigate thay cho Navigate trực tiếp

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name !== '' && email !== '' && phone !== '') {
      const newMember = {
        name,
        email,
        phone,
        status,
        roles,
        user_name,
        password,
        address,
      }

      await apiMember.createMember(newMember).then((res) => {
        if (res.data != null) {

          alert('Thêm dữ liệu thành công!')
          navigate('/user/userlist/:roles', { replace: true });

          // Thực hiện hành động sau khi thêm thành viên thành công, ví dụ: điều hướng đến danh sách thành viên
        } else {
          alert('Không thành công!')
        }
      })
      console.log(res)

    } else {
      alert('Vui lòng nhập đủ thông tin!')
    }

    
  }


  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <h1>Thêm thành viên</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-body">
            <CForm onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <label>Họ tên</label>
                  <CFormInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label>UserName</label>
                  <CFormInput type="text" value={user_name} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label>Email</label>
                  <CFormInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Số điện thoại</label>
                  <CFormInput
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Password</label>
                  <CFormInput
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Địa chỉ</label>
                  <CFormInput
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Role</label>
                  <CFormInput
                    type="text"
                    value={roles}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>


                <div className="col-md-6">
                  <label>Trạng thái</label>
                  <CFormSelect
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="1">Hiển thị</option>
                    <option value="2">Ẩn</option>
                  </CFormSelect>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <CButton color="primary" type="submit">
                    Lưu
                  </CButton>
                  <Link to="/member/list" className="btn btn-secondary ms-2">
                    Hủy
                  </Link>
                </div>
              </div>
            </CForm>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateMember
