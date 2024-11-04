import React, { useEffect, useState } from 'react';
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiCategory from '../../../service/apiCategory';
import { CButton } from '@coreui/react';
import { imageURL } from '../../../config';
import { cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

function CategoryList() {
    const navigate = useNavigate();
    const { page, limit } = useParams();
    const [qty_trash, setQtyTrash] = useState(0);
    const [qty_cat, setQtyCat] = useState(0);
    const [tamp, setTamp] = useState();
    const [trash, setTrash] = useState();
    const [pages, setPages] = useState(1);
    const [categorys, setCategorys] = useState([]);

    const currentPage = parseInt(page) || 1;
    const currentLimit = parseInt(limit) || 10;

    useEffect(() => {
        apiCategory.getAll(currentPage, currentLimit).then((res) => {
            try {
                const data = res.data;
                const categoryData = data.map((item) => ({
                    id: item.id,
                    name: item.category_name,
                    slug: item.slug,
                    parent: item.parent_name,
                    sort_order: item.sort_order,
                    status: item.status,
                }));
                setCategorys(categoryData);
                setQtyCat(res.qty_categories);
                setQtyTrash(res.qty_trash);
                setPages(Math.ceil(res.qty_categories / currentLimit));
            } catch (e) {
                console.log(e);
            }
        });
    }, [currentPage, currentLimit, tamp, trash]);

    function trashCategory(id) {
        apiCategory.trashCategory(id).then((result) => {
            // if (result.data !== null) {
            //     alert("Đã thêm vào thùng rác !");
            //     setTrash(result.data.id);
            // } else {
            //     alert("Không tìm thấy dữ liệu !");
            // }
            if (result.data.success === 'true') {
                alert(result.data.message)
                setTamp(id)
              } else {
                alert(result.data.message)
              }

        });
    }

    function displayCategory(id) {
        apiCategory.displayCat(id).then((result) => {
            if (result.data !== null) {
                alert("Cập nhật thành công !");
                setTrash(result.data.id);
            } else {
                alert("Không tìm thấy dữ liệu !");
            }
        });
    }

    return (
        <div className="admin content-wrapper">
            {console.log(categorys)}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Danh sách Danh mục<sup>({qty_cat})</sup></h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link className="action-btn" to="/category/list-trash" style={{ color: "red" }}>
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
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link to='/category/createcategory'>
                                        <CButton color="primary" className="me-md-2">Thêm danh mục</CButton>
                                    </Link>
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th className="text-center" style={{ width: "30px" }}>Id</th>
                                            <th style={{ width: "220px" }}>Tên danh mục</th>
                                            <th className="text-center" style={{ width: "130px" }}>Danh mục cha</th>
                                            <th className="text-center" style={{ width: "150px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categorys.map((item, index) => (
                                            <tr className="datarow" key={index}>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>{item.id}</td>
                                              
                                                <td>
                                                    <div className="name">
                                                        {item.name}
                                                    </div>
                                                </td>
                                                <td>{item.parent}</td>
                                                <td>
                                                    <div className="function_style">
                                                        <Link to={`/category/updatecategory/${item.id}`} className="btn btn-sm"><FaEdit /> Chỉnh sửa</Link> |
                                                        <Link to={`/category/detailcategory/${item.id}`} className="btn btn-sm"><FaEye /> Chi tiết</Link> |
                                                        <button onClick={() => trashCategory(item.id)} className="btn btn-sm"><FaTrash /> Xoá</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center' }}>
                                <ul className="pagination">
                                    <li className="page-item">
                                        {currentPage > 1 ? (
                                            <Link className="page-link" to={`/category/categorylist/${currentPage - 1}/${currentLimit}`}>Previous</Link>
                                        ) : (
                                            <span className="page-link disabled">Previous</span>
                                        )}
                                    </li>
                                    {Array.from(Array(pages).keys()).map((index) => (
                                        <li
                                            key={index}
                                            className={`page-item ${index + 1 === currentPage ? "active" : ""}`}
                                        >
                                            <Link
                                                className="page-link bg-white text-black"
                                                to={`/category/categorylist/${index + 1}/${currentLimit}`}
                                            >
                                                {index + 1}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="page-item">
                                        {currentPage < pages ? (
                                            <Link className="page-link" to={`/category/categorylist/${currentPage + 1}/${currentLimit}`}>
                                                Next
                                            </Link>
                                        ) : (
                                            <span className="page-link disabled">Next</span>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CategoryList;
