import React from 'react';
import { useEffect, useState } from 'react';
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import categoryservice from "../../../service/categoryservice";
import apiCategory from '../../../service/categoryservice';
import { CButton } from '@coreui/react';
function Buttons() {
  const navigate = useNavigate();
  // const [countTrash, setCountTrash] = useState(0);
  // const [countCat, setCountCat] = useState(0);

  const [categorys, setCategorys] = useState([]);
  // const [statusdel, setStatusDel] = useState(0);
  useEffect(() => {
    apiCategory.getAll().then((res) => {
      try {
        console.log(res);
        const data = res.data;
        const categoryData = res.map((item) => {
          // if(item.status === 2){
          //     setNameButton('Hien')
          // }
          return {
            id: item.id,
            name: item.name,
            slug: item.slug,
            parent: item.parent_id,
            sort_order: item.sort_order,
            status: item.status,
          }
        });
        setCategorys(categoryData);
        // setQtyCat(res.qty_categories);
        // setQtyTrash(res.qty_trash);
        console.log(categoryData);
      } catch (e) {
        console.log(e);
      }
    })
  }, [])
  // function catTrash(id) {
  //     categoryservice.deleteTrash(id).then(function (result) {
  //         alert(result.data.message);
  //         setStatusDel(id);
  //     })
  // }
  return (
    <div className=" admin content-wrapper">
      {console.log(categorys)}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <h1 className="d-inline">Danh sách Danh mục</h1>
            </div>
            <div className="col-sm-1 mt-2 text-right">
              <Link className="action-btn" to="/admin/category/trash" style={{ color: "red" }}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                {/* <sup className="count ms-1">{countTrash}</sup> */}
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
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <CButton color="primary" className="me-md-2" href='/category/createcategory'>Thêm danh mục</CButton>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>

                      <th className="text-center" style={{ width: "30px" }}>
                        {/* <input type="checkbox" /> */}
                      </th>
                      <th className="text-center" style={{ width: "30px" }}>Id</th>
                      <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                      <th style={{ width: "220px" }}>Tên danh mục</th>
                      <th className="text-center" style={{ width: "130px" }}>Danh mục cha</th>
                      <th className="text-center" style={{ width: "150px" }}>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorys.map((item, index) => {
                      return (
                        <tr className="datarow" key={index}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{item.id}</td>
                          <td>
                            <img src="../public/images/category.jpg" alt="category.jpg" />
                          </td>
                          <td>
                            <div className="name">
                              {item.name}
                            </div>
                          </td>
                          <td value={item.parent}>{item.name}</td>
                          <td>
                            <div className="function_style">
                              <Link to={`/admin/list-categories/update/${item.id}`} className="btn btn-sm"><i className="fa fa-edit me-1" ></i>Chỉnh sửa</Link> |
                              <Link to={`/admin/list-categories/show/${item.id}`} className="btn btn-sm"><i className="fa fa-eye me-1"></i>Chi tiết</Link> |
                              <button onClick={() => trashCategory(item.id)} className="btn btn-sm"><i className="fa fa-trash me-1"></i>Xoá</button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Buttons;