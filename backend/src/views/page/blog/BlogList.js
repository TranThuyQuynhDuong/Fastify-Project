import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { imageURL } from '../../../config'
import apiPost from '../../../service/apiPost'
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from 'react-icons/fa'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'
import { CButton } from '@coreui/react'

function ListPost() {
  const { type } = useParams()
  const page = parseInt(useParams().page)
  const limit = parseInt(useParams().limit)

  const [data, setData] = useState([])
  const [pages, setPages] = useState(1)
  const [qty_data, setQtyData] = useState(0)
  const [qty_trash, setQtyTrash] = useState(0)
  const [tamp, setTamp] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiPost.getPostNew(page, limit)
        if (res && res.data) {
          console.log(res.data)
          const numberOfPages = res.meta.pagination.pageCount
          setPages(numberOfPages)
          const postData = res.data.map((item) => ({
            id: item.id,
            name_topic: item.name_topic,
            title: item.title,
            image: item.image_1,
            slug: item.slug,
            description: item.description_1,
            status: item.status,
          }))
          setData(postData)
          setQtyData(res.meta.pagination.total)
          setQtyTrash(res.meta.pagination.qty_trash)
        } else {
          console.log('No data returned from API')
        }
      } catch (e) {
        console.error('Error fetching data', e)
      }
      setTamp()
    }

    fetchData()
  }, [page, limit, tamp])

 // trash cat
 function trashPost(id) {
  apiPost.trashPost(id).then(function (result) {
      if (result.data.success === 'true') {
          alert(result.data.message);
          setTamp(id)
      }
      else {
          alert(result.data.message);
      }

  })
}

// hien thi
function displayPost(id) {
  apiPost.displayPost(id).then(function (result) {
      if (result.data.success === 'true') {
          alert(result.data.message);
          setTamp(id);
      }
      else {
          alert(result.data.message);
      }
  })
}

  return (
    <div className="content-wrapper">
      {console.log(data)}
      <section className="content-header">
        {/* <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-10">
              <h1 className="d-inline">
                Tất cả bài viết <sup>({qty_data})</sup>
              </h1>
            </div>
            <div className="col-sm-2 text-right">
              <Link
                className="action-btn"
                to="/admin/list-post/list-trash/news/1/10"
                style={{ color: 'red' }}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
                <sup className="count ms-1">{qty_trash}</sup>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <h1 className="d-inline">
              Tất cả bài viết <sup>({qty_data})</sup>
              </h1>
            </div>
            <div className="col-sm-1 mt-2 text-right">
              <Link to="/blog/list-trash" className="action-btn" style={{ color: 'red' }}>
                <CIcon icon={cilTrash} title="Download file" />
                <sup className="count ms-1">{qty_trash}</sup>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                  <Link to="/blog/createblog">
                    <CButton color="primary" className="me-md-2">
                      Thêm Bài viết
                    </CButton>
                  </Link>
                </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md">
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
                      <th style={{ width: '30%' }}>Tên bài viết</th>
                      <th style={{ width: '30%' }}>Mô tả ngắn</th>
                      <th style={{ width: '20%' }}>Chủ đề</th>
                      <th>Trạng thái</th>
                      <th style={{ width: '20%' }}>chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr className="datarow" key={index}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item.id}</td>
                        <td>
                          <img
                            src={imageURL + item.image}
                            alt="product.jpg"
                            style={{ width: '100%' }}
                          />
                        </td>
                        <td style={{ width: '30%' }}>
                          <div className="name">{item.title}</div>
                          
                        </td>
                        <td>
                          <p
                            style={{
                              width: '100%',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {item.description}
                          </p>
                        </td>
                        <td>{item.name_topic}</td>
                        <td>{item.status === 2 ? 'Ẩn' : 'Hiển thị'}</td>
                        <td className="text-center">
                          <Link to={`/blog/blogupdate/${item.id}`} className="btn btn-sm">
                            <FaEdit className="me-1" />
                            Chỉnh sửa
                          </Link>{' '}
                          |
                          <Link to={`/blog/blogdetail/${item.id}`} className="btn btn-sm">
                            <FaEye className="me-1" />
                            Chi tiết
                          </Link>{' '}
                          |
                          <Link onClick={() => trashPost(item.id)} className="btn btn-sm">
                            <FaTrash className="me-1" />
                            Xoá
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <ul className="pagination">
                <li className="page-item">
                  {page > 1 ? (
                    <Link
                      className="page-link"
                      to={`/admin/list-post/${type}/${page - 1}/${limit}`}
                    >
                      Previous
                    </Link>
                  ) : (
                    <span className="page-link disabled">Previous</span>
                  )}
                </li>
                {Array.from(Array(pages).keys()).map((index) => (
                  <li key={index} className={`page-item ${index + 1 === page ? 'active' : ''}`}>
                    <Link
                      className="page-link bg-white"
                      to={`/admin/list-post/${type}/${index + 1}/${limit}`}
                    >
                      {index + 1}
                    </Link>
                  </li>
                ))}
                <li className="page-item">
                  <Link className="page-link" to={`/admin/list-post/${type}/${page + 1}/${limit}`}>
                    Next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ListPost
