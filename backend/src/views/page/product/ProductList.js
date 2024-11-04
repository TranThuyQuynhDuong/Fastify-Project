import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiProduct from "../../../service/apiProduct";
import { imageURL } from "../../../config";
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { CButton } from '@coreui/react'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function ListProduct() {

    const [products, setProducts] = useState([]);

    const page = parseInt(useParams().page);
    const limit = parseInt(useParams().limit);

    const [pages, setPages] = useState(1);

    const [qty_data, setQtyData] = useState(0);
    const [qty_trash, setQtyTrash] = useState(0);

    const [tamp, setTamp] = useState();

    const formatPrice = (price) => {
        const roundedPrice = Math.round(price);
        const formattedPrice = new Intl.NumberFormat('vi-VN').format(roundedPrice);
        return formattedPrice.replace(/,/g, '.') + '.000';
    };


    useEffect(() => {
        apiProduct.getAllProductPagination(page, limit).then((res) => {
            try {
                const data = res.data;
                console.log(res);

                const numberOfPages = res.meta.pagination.pageCount;
                setPages(numberOfPages);
                const productData = res.data.map((item, index) => {
                    return {
                        id: item.id,
                        name: item.attributes.product_name,
                        price: item.attributes.price,
                        image: item.attributes.image,
                        brand_id: item.attributes.product_brand,
                        category_id: item.attributes.product_cat,
                        nameCat: item.attributes.nameCat,
                        nameBrand: item.attributes.nameBrand,
                        status: item.attributes.status,
                    }
                }
                )
                setProducts(productData);
                setQtyData(res.meta.pagination.total);
                setQtyTrash(res.meta.pagination.qty_trash);


            } catch (e) {
                console.log(e);
            }
            setTamp();
        })
    }, [tamp, page])


    const handleSubmit = async (e) => {
        // if (name !== '' && email !== '' && password !== '' && phone !== '') {
        //     e.preventDefault();
        //     const data = {
        //         name: name,
        //         user_name: user_name,
        //         email: email,
        //         phone: phone,
        //         password: password,
        //         roles: 'admin',
        //         status: status
        //     };

        //     await apiMember.createMember(data).then((res) => {
        //         if (res.data != null) {
        //             alert("Thêm dữ liệu thành công !")
        //             setTamp(res.data.id);

        //             setName('');
        //             setUserName('');
        //             setEmail('');
        //             setPassword('');
        //             setPhone('');
        //         }
        //         else {
        //             alert("Không thành công !")
        //         }
        //     })
        // }
        // else {
        //     e.preventDefault();
        //     alert('Vui lòng nhập đầu đủ thông tin !')
        // }
    }

    // trash cat
    function trashProduct(id) {
        apiProduct.trashProduct(id).then(function (result) {
            alert(result.data.message);
            setTamp(id)

        })
    }

    // hien thi
    function displayProduct(id) {
        apiProduct.displayProduct(id).then(function (result) {
            if (result.data !== null) {
                alert("Cập nhật thành công !");
                setTamp(id);
            }
            else {
                alert("Không tìm thấy dữ liệu !");
            }
        })
    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <h1 className="d-inline">Tất cả sản phẩm <sup>({qty_data})</sup></h1>
                            
                        </div>
                        <Link to="/product/list-trash" className="action-btn" style={{ color: "red" }}>
                                <CIcon icon={cilTrash} title="Download file" />
                                <sup className="count ms-1">{qty_trash}</sup>
                            </Link>
                        {/* <div className="col-sm-2  text-right">
                            <Link class="action-btn" to="/product/list-trash" style={{ color: "red" }}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <sup class="count ms-1">{qty_trash}</sup>
                            </Link>
                        </div> */}

                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    {/* <div className="text-right pt-2 pe-4">
                        <Link class="btn btn-success btn-sm" to="/product/createproduct">Thêm sản phẩm</Link>

                    </div> */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Link to="/product/createproduct">
                    <CButton color="primary" className="me-md-2">
                    Thêm sản phẩm
                    </CButton>
                  </Link>
                </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th>Id</th>
                                            <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            {/* <th>Tên slug</th> */}
                                            <th>Giá</th>
                                            <th>Danh mục</th>
                                            <th>Thương hiệu</th>
                                            <th>Trạng thái</th>
                                            <th>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((item, index) => {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{item.id}</td>
                                                    <td>
                                                        <img src={imageURL + item.image} alt="product.jpg" style={{ width: "100%" }} />
                                                    </td>
                                                    <td style={{ width: "32%" }}>
                                                        <div className="name">
                                                            {item.name}
                                                        </div>
                                                        {/* <div className="function_style">
                                                            <button onClick={() => displayProduct(item.id)} className="btn btn-sm">{item.status === 2 ? "Hiện" : "Ẩn"}</button> |
                                                            <Link to={`/product/updateproduct/${item.id}`} className="btn btn-sm"><i className="fa fa-edit me-1" ></i>Chỉnh sửa</Link> |
                                                            <Link to={`/product/productdetail/${item.id}`} className="btn btn-sm"><i className="fa fa-eye"></i>Chi tiết</Link> |
                                                            <button onClick={() => trashProduct(item.id)} className="btn btn-sm"><i className="fa fa-trash me-1"></i>Xoá</button>
                                                        </div> */}
                                                    </td>

                                                    {/* <td>{item.slug}</td> */}
                                                    <td>{formatPrice(item.price)}</td>
                                                    <td>{item.nameCat}</td>
                                                    <td>{item.nameBrand}</td>
                                                    <td>{item.status === 2 ? "Ẩn" : "Hiển thị"}</td>
                                                    <td>
                                                    <div className="function_style">
                                                        <Link to={`/product/updateproduct/${item.id}`} className="btn btn-sm"><FaEdit /> Chỉnh sửa</Link> |
                                                        <Link to={`/product/productdetail/${item.id}`} className="btn btn-sm"><FaEye /> Chi tiết</Link> |
                                                        <button onClick={() => trashProduct(item.id)} className="btn btn-sm"><FaTrash /> Xoá</button>
                                                    </div>
                                                </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <ul className="pagination">
                                <li className="page-item">
                                    {page > 1 ? (
                                        <Link className="page-link" to={`/product/productlist/${page - 1}/${limit}`}>Previous</Link>
                                    ) : (
                                        <span className="page-link disabled">Previous</span>
                                    )}
                                </li>
                                {Array.from(Array(pages).keys()).map((index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${index + 1 === page ? "active" : ""}`}
                                    >
                                        <Link
                                            className="page-link bg-white"
                                            to={`/product/productlist/${index + 1}/${limit}`}
                                        >
                                            {index + 1}
                                        </Link>
                                    </li>
                                ))}
                                <li className="page-item">
                                    <Link className="page-link" to={`/product/productlist/${page + 1}/${limit}`}>
                                        Next
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default ListProduct;