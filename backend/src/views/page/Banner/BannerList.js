import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from 'react-icons/fa'

import apiBanner from '../../../service/apiBanner'
import { imageURL } from '../../../config'
import axiosInstance from '../../../axio'
import apiUploadFile from '../../../service/apiUploadFile'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'
import { CButton } from '@coreui/react'

function ListBanner() {
  const [banners, setBanners] = useState([])

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('/')
  const [position, setPosition] = useState('slider-main')
  const [status, setStatus] = useState(2)
  const [trash, setTrash] = useState()

  const [qty_trash, setQtyTrash] = useState(0)
  const [qty, setQty] = useState(0)

  const [tamp, setTamp] = useState()

  useEffect(() => {
    apiBanner.getAllBannerBE().then((res) => {
      try {
        setBanners(res.data.data)
        setQty(res.data.qty)
        setQtyTrash(res.data.qty_trash)
      } catch (e) {
        console.log(e)
      }
    })
    setName('')
    setDescription('')
    setTamp()
  }, [tamp])

  // trash cat
  function trashBanner(id) {
    apiBanner.trashBanner(id).then(function (result) {
      if (result.data.success === 'true') {
        alert(result.data.message)
        setTamp(id)
      } else {
        alert(result.data.message)
      }
    })
  }

  // hien thi
  function displayBanner(id) {
    apiBanner.displayBanner(id).then(function (result) {
      if (result.data.success === 'true') {
        alert(result.data.message)
        setTamp(id)
      } else {
        alert(result.data.message)
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
                Tất cả banner <sup>({qty})</sup>
              </h1>
            </div>
            <div className="col-sm-1 mt-2 text-right">
              <Link to="/banner/list-trash" className="action-btn" style={{ color: 'red' }}>
                <CIcon icon={cilTrash} title="Download file" />
                <sup className="count ms-1">{qty_trash}</sup>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                  <Link to="/banner/createbanner">
                    <CButton color="primary" className="me-md-2">
                      Thêm Banner
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
                      <th className="text-center" style={{ width: '130px' }}>
                        Hình ảnh
                      </th>
                      <th>Tên banner</th>

                      <th>Vị trí</th>
                      <th>Trạng thái</th>
                      <th className="text-center">Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banners.map((item, index) => {
                      return (
                        <tr className="datarow" key={index}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{item.id}</td>
                          <td>
                            <img
                              src={imageURL + item.image}
                              alt="banner"
                              style={{ width: '100%' }}
                            />
                          </td>
                          <td>
                            <div className="name">{item.name}</div>
                          </td>
                          <td>{item.position}</td>
                          <td>{item.status === 1 ? 'Hiển thị' : 'Ẩn'}</td>
                          <td className="text-center">
                            <Link to={`/banner/bannerupdate/${item.id}`} className="btn btn-sm">
                              <FaEdit className="me-1" />
                              Chỉnh sửa
                            </Link>{' '}
                            |
                            <Link to={`/banner/bannerdetail/${item.id}`} className="btn btn-sm">
                              <FaEye className="me-1" />
                              Chi tiết
                            </Link>{' '}
                            |
                            <Link onClick={() => trashBanner(item.id)} className="btn btn-sm">
                              <FaTrash className="me-1" />
                              Xoá
                            </Link>
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

export default ListBanner
