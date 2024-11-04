import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiCustomer from "../../../service/apiCustomer";
import apiCategory from '../../../service/apiCategory';
import { CButton } from '@coreui/react';
import { imageURL } from '../../../config';
import { cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";


function ListCustomer() {

    const [customer, setCustomer] = useState([]);

    const [name, setName] = useState('');
    const [user_name, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(2);

    const [qty_user, setQtyUser] = useState(0);
    const [qty_trash, setQtyTrash] = useState(0);

    const [tamp, setTamp] = useState();
    const [trash, setTrash] = useState();

    useEffect(() => {
        apiCustomer.getAll('customer').then((res) => {
            try {
                const data = res.data;
                const userData = data.map((item) => {
                    // if(item.status === 2){
                    //     setNameButton('Hien')
                    // }
                    return {
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        phone: item.phone,
                        status: item.status
                    }
                });
                setCustomer(userData);
                setQtyUser(res.qty_user);
                setQtyTrash(res.qty_trash);
            } catch (e) {
                console.log(e);
            }
            setTamp();
        })
    }, [tamp, trash])


    
    // trash cat
    function trashUser(id) {
        apiCustomer.trashCustomer(id).then(function (result) {
            alert(result.data.message);
            setTamp(true)
            
        })
    }

    // hien thi
    function displayUser(id) {
        apiCustomer.displayCustomer(id).then(function (result) {
            if (result.data !== null) {
                alert("Cập nhật thành công !");
                setTamp(result.data.id);
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
                        <div className="col-sm-12">
                            <h1 className="d-inline">Tất cả khách hàng<sup>({qty_user})</sup></h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link className="action-btn" to="/customer/list-trash" style={{ color: "red" }}>
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
                           
                                {/* <form onSubmit={handleSubmit} >

                                    <div className="mb-3">
                                        <label>Họ tên (*)</label>
                                        <input type="text" name="name" placeholder="Nhập họ tên" className="form-control"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label>User name</label>
                                        <input type="text" name="name" placeholder="Nhập user name" className="form-control"
                                            value={user_name} onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Số điện thoại (*)</label>
                                        <input type="text" name="name" placeholder="Nhập số điện thoại" className="form-control"
                                            value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email (*)</label>
                                        <input type="email" name="name" placeholder="Nhập email" className="form-control"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password (*)</label>
                                        <input type="password" name="name" placeholder="Nhập password" className="form-control"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    
                                    
                                    <div className="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div className="card-header text-right">
                                        <button className="btn btn- btn-success">
                                            <i className="fa fa-save me-2" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>
                                </form> */}
                                 {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link to='/customer/createcustomer'>
                                        <CButton color="primary" className="me-md-2">Thêm khách hàng</CButton>
                                    </Link>
                                </div> */}

                           
                            
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th>Id</th>
                                            {/* <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th> */}
                                            <th>Họ tên</th>
                                            {/* <th>Tên slug</th> */}
                                            <th>Email</th>
                                            <th>Sdt</th>
                                            <th>Trạng thái</th>
                                            <th>Chức năng</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customer.map((item, index) => {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{item.id}</td>
                                                    {/* <td>
                                                        <img src="../public/images/category.jpg" alt="category.jpg" />
                                                    </td> */}
                                                    <td style={{width:"38%"}}>
                                                        <div className="name">
                                                            {item.name}
                                                        </div>
                                                        
                                                    </td>
                                                    {/* <td>{item.slug}</td> */}
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.status === 2 ? "Ẩn" : "Hiển thị" }</td>
                                                    <td>
                                                    <div className="function_style">
                                                        {/* <Link to={`/customer/customerupdate/${item.id}`} className="btn btn-sm"><FaEdit /> Chỉnh sửa</Link> | */}
                                                        <Link to={`/customer/customerdetail/${item.id}`} className="btn btn-sm"><FaEye /> Chi tiết</Link> |
                                                        <button onClick={() => trashUser(item.id)} className="btn btn-sm"><FaTrash /> Xoá</button>
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

export default ListCustomer;