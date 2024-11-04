import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiCustomer from "../../../service/apiCustomer";
import apiMember from "../../../service/apiMember";

function MemberUpdate() {

    const { id } = useParams();

    const navigate = useNavigate(); // chuyen trang


    const [name, setName] = useState('');
    const [user_name, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(2);



    useEffect(() => {
        apiCustomer.getCustomerById(id).then((res) => {
            try {
                setName(res.data.name);
                setUserName(res.data.user_name);
                setPhone(res.data.phone);
                setAddress(res.data.address);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setStatus(res.data.status);
            } catch (e) {
                console.log(e);
            }
        })
    }, [])


    const handleSubmit = async (e) => {
        if (name !== '' && email !== '' && password !== '' && phone !== '') {
            e.preventDefault();
            const data = {
                name: name,
                user_name: user_name,
                email: email,
                phone: phone,
                address: address,
                password: password,
                roles: 'admin',
                status: status
            };

            await apiMember.updateMember(data, id).then((res) => {
                if (res.data != null) {
                    alert("Cập nhật dữ liệu thành công !")
                    navigate('/user/userlist/:roles')
                }
                else {
                    alert("Không thành công !")
                }
            })
        }
        else {
            e.preventDefault();
            alert('Vui lòng nhập đầu đủ thông tin !')
        }
    }



    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <h1 className="d-inline">Cập nhật thông tin thành viên</h1>
                        </div>


                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header text-right">
                        <Link to="/user/userlist/:roles" className="btn btn-sm btn-info">
                            <i className="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <form onSubmit={handleSubmit} >

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
                                        <label>địa chỉ (*)</label>
                                        <input type="text" name="name" placeholder="Nhập địa chỉ" className="form-control"
                                            value={address} onChange={(e) => setAddress(e.target.value)} />
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
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default MemberUpdate;