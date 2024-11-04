import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { imageURL } from "../../../config";
import apiDiscountedPro from "../../../service/apiDiscountedPro";
import { format } from 'date-fns';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { CButton } from '@coreui/react';
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function ListDiscountedProduct() {

    const [products, setProducts] = useState([]);

    const { page, limit } = useParams();
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    const [pages, setPages] = useState(1);

    const [qty_data, setQtyData] = useState(0);
    const [qty_trash, setQtyTrash] = useState(0);

    const [tamp, setTamp] = useState();

    const formatPrice = (price) => {
        const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);
        return formattedPrice.replace(/,/g, '.') + '.000đ';
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Invalid date';
        const date = new Date(dateString);
        return isNaN(date) ? 'Invalid date' : format(date, "yyyy-MM-dd HH:mm:ss");
    };

    useEffect(() => {
        apiDiscountedPro.getAll(pageNum, limitNum).then((res) => {
            try {
                const data = res.data;
                console.log(data);

                const numberOfPages = res.meta.pagination.pageCount;

                setPages(numberOfPages);
                const productData = data.map((item, index) => {
                    return {
                        id: item.id,
                        pro_id: item.product_id,
                        name: item.name_pro,
                        price: item.price,
                        price_sale: item.price_sale,
                        image: item.image,
                        title_sale: item.title_sale,
                        start_time: item.start_time,
                        end_time: item.end_time,
                        status: item.status,
                    }
                })
                setProducts(productData);
                setQtyData(res.meta.pagination.total);
                setQtyTrash(res.meta.pagination.qty_trash);
            } catch (e) {
                console.log(e);
            }
            setTamp();
        })
    }, [tamp, pageNum, limitNum])

    const handleSubmit = async (e) => {
        // form submit handler code
    }

    // trash 
    function trashPro(id) {
        apiDiscountedPro.trashPro(id).then(result => {
            if (result.data.success === 'true') {
                alert(result.data.message);
                setTamp(id);
            } else {
                alert(result.data.message);
            }
        })
    }

    // display
    function displayPro(id) {
        apiDiscountedPro.displayPro(id).then(result => {
            if (result.data.success === 'true') {
                alert(result.data.message);
                setTamp(id);
            } else {
                alert(result.data.message);
            }
        })
    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Tất cả sản phẩm giảm giá<sup>({qty_data})</sup></h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link to="/discounted/list-trash" className="action-btn" style={{ color: "red" }}>
                                <CIcon icon={cilTrash} title="Download file" />
                                <sup className="count ms-1">{qty_trash}</sup>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to='/discounted/creatediscuntedpro/1/10'>
                            <CButton color="primary" className="me-md-2">Thêm</CButton>
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
                                            <th>Giá sale</th>
                                            <th>Giá</th>
                                            <th>Ngày bắt đầu</th>
                                            <th>Ngày kết thúc</th>
                                            <th>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((item, index) => (
                                            <tr className="datarow" key={index}>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>{item.id}</td>
                                                <td>
                                                    <img src={imageURL + item.image} alt="product" style={{ width: "100%" }} />
                                                </td>
                                                <td style={{ width: "26%" }}>
                                                    <div className="name">
                                                        {item.name}
                                                    </div>
                                                </td>
                                                <td>{formatPrice(item.price_sale)}</td>
                                                <td>{formatPrice(item.price)}</td>
                                                <td>{formatDate(item.start_time)}</td>
                                                <td>{formatDate(item.end_time)}</td>
                                                <td>
                                                    <div className="function_style">
                                                        <Link to={`/discounted/discountedupdate/${item.id}`} className="btn btn-sm"><FaEdit /> Chỉnh sửa</Link> |
                                                        <Link to={`/discounted/discountedprodetail/${item.id}`} className="btn btn-sm"><FaEye /> Chi tiết</Link> |
                                                        <button onClick={() => trashPro(item.id)} className="btn btn-sm"><FaTrash /> Xoá</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <ul className="pagination">
                                {console.log(pageNum, limitNum)}
                                <li className="page-item">
                                    {pageNum > 1 ? (
                                        <Link className="page-link" to={`/admin/discounted-products/${pageNum - 1}/${limitNum}`}>Previous</Link>
                                    ) : (
                                        <span className="page-link disabled">Previous</span>
                                    )}
                                </li>
                                {Array.from(Array(pages).keys()).map((index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${index + 1 === pageNum ? "active" : ""}`}
                                    >
                                        <Link
                                            className="page-link bg-white"
                                            to={`/admin/discounted-products/${index + 1}/${limitNum}`}
                                        >
                                            {index + 1}
                                        </Link>
                                    </li>
                                ))}
                                <li className="page-item">
                                    <Link className="page-link" to={`/admin/discounted-products/${pageNum + 1}/${limitNum}`}>
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

export default ListDiscountedProduct;
