import React, { useEffect, useState } from 'react';
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import apiBrand from '../../../service/apiBrand';
import apiCategory from '../../../service/apiCategory';
import { CButton } from '@coreui/react';
import { imageURL } from '../../../config';
import { cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

function ListBrand() {
    const [brands, setBrands] = useState([]);
    const [qty_trash, setQtyTrash] = useState(0);
    const [qtyBrand, setQtyBrand] = useState(0);
    const [tamp, setTamp] = useState();
    const [trash, setTrash] = useState();
    const [pages, setPages] = useState(1);
    const { page, limit } = useParams();
    const currentPage = parseInt(page) || 1;
    const currentLimit = parseInt(limit) || 10;

    useEffect(() => {
        apiBrand.getAll(currentPage, currentLimit).then((res) => {
            try {
                const data = res.data;
                const brandData = data.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        slug: item.slug,
                        image: item.image,
                        icon: item.icon,
                        description: item.description,
                        status: item.status
                    }
                });
                setBrands(brandData);
                setQtyBrand(res.qty_brand);
                setQtyTrash(res.qty_trash);
                setPages(res.pages);
            } catch (e) {
                console.log(e);
            }
        });
    }, [currentPage, currentLimit, tamp, trash]);

    function trashBrand(id) {
        apiBrand.trashBrand(id).then((result) => {
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

    function displayBrand(id) {
        apiBrand.displayBrand(id).then((result) => {
            if (result.data !== null) {
                alert("Cập nhật thành công !");
                setTrash(id);
            } else {
                alert("Không tìm thấy dữ liệu !");
            }
        });
    }

    return (
        <div className="admin content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Tất cả thương hiệu <sup>({qtyBrand})</sup></h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link to="/brand/list-trash" className="action-btn" style={{ color: "red" }}>
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
                                    <Link to="/brand/createbrand">
                                    <CButton color="primary" className="me-md-2">Thêm thương hiệu</CButton>

                                    </Link>
                                    
                                </div>
                                <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <ul className="pagination">
                                        {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                                            <li
                                                key={p}
                                                className={`page-item ${p === currentPage ? 'active' : ''}`}
                                            >
                                                <Link className="page-link" to={`/brand/list/${p}/${currentLimit}`}>
                                                    {p}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <table className="table table-bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên thương hiệu</th>
                                            <th>icon</th>
                                            <th>Mô tả</th>
                                            <th>Trạng thái</th>
                                            <th className="text-center">Chức Năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {brands.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td><img src={imageURL + item.icon} style={{ width: "50%", height: "40%" }} /></td>
                                                
                                                <td>{item.description}</td>
                                                <td>
                                                    {item.status === 1 ? 'Hiển thị' : 'Ẩn'}
                                                </td>
                                                <td className="text-center">
                                                    
                                                    <Link to={`/brand/updatebrand/${item.id}`} className="btn btn-sm">
                                                        <FaEdit className="me-1" />
                                                        Chỉnh sửa
                                                    </Link> |
                                                    <Link to={`/brand/branddetail/${item.id}`} className="btn btn-sm">
                                                        <FaEye className="me-1" />
                                                        Chi tiết
                                                    </Link> |
                                                    <button onClick={() => trashBrand(item.id)} className="btn btn-sm">
                                                        <FaTrash className="me-1" />
                                                        Xoá
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
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

export default ListBrand;