import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiMember from '../../../service/apiMember'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';

function ListMember() {
  const [member, setMember] = useState([])

  const [qty_user, setQtyUser] = useState(0)
  const [qty_trash, setQtyTrash] = useState(0)

  const [tamp, setTamp] = useState()
  const [trash, setTrash] = useState()

  useEffect(() => {
    apiMember.getAll('admin').then((res) => {
      try {
        const data = res.data
        const userData = data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            status: item.status,
          }
        })
        setMember(userData)
        setQtyUser(res.qty_user)
        setQtyTrash(res.qty_trash)
      } catch (e) {
        console.log(e)
      }
      setTamp()
    })
  }, [tamp, trash])

  // trash user
  function trashUser(id) {
    apiMember.trashMember(id).then(function (result) {
      alert(result.data.message)
      setTamp(id)
    })
  }

  // display user
  function displayUser(id) {
    apiMember.displayMember(id).then(function (result) {
      if (result.data !== null) {
        alert('Cập nhật thành công !')
        setTamp(result.data.id)
      } else {
        alert('Không tìm thấy dữ liệu !')
      }
    })
  }

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <h1 className="d-inline">
                Tất cả thành viên <sup>({qty_user})</sup>
              </h1>
            </div>
            
            <div className="col-sm-1 mt-2 text-right">
                            <Link to="/user/list-trash" className="action-btn" style={{ color: "red" }}>
                                <CIcon icon={cilTrash} title="Download file" />
                                <sup className="count ms-1">{qty_trash}</sup>
                            </Link>
                        </div>

            <div className="col-sm-2  text-right"></div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Link to="/user/createmember">
                    <CButton color="primary" className="me-md-2">
                      Thêm thành viên
                    </CButton>
                  </Link>
                </div>

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center" style={{ width: '30px' }}>
                        <input type="checkbox" />
                      </th>
                      <th>Id</th>
                      <th>Họ tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th>Trạng thái</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {member.map((item, index) => {
                      return (
                        <tr className="datarow" key={index}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{item.id}</td>
                          <td style={{ width: '40%' }}>
                            <div className="name">{item.name}</div>
                          </td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.status === 2 ? 'Ẩn' : 'Hiển thị'}</td>
                          <td>
                            <div className="function_style">
                              <button onClick={() => displayUser(item.id)} className="btn btn-sm">
                                {item.status === 2 ? 'Hiện' : 'Ẩn'}
                              </button>{' '}
                              |
                              <Link
                                to={`/user/updatemember/${item.id}`}
                                className="btn btn-sm"
                              >
                                <i className="fa fa-edit me-1"></i>Chỉnh sửa
                              </Link>{' '}
                              |
                              <Link to={`/user/memberdetail/${item.id}`} className="btn btn-sm">
                                <i className="fa fa-eye me-1"></i>Chi tiết
                              </Link>{' '}
                              |
                              <button onClick={() => trashUser(item.id)} className="btn btn-sm">
                                <i className="fa fa-trash me-1"></i>Xoá
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ListMember
