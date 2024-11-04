import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import apiTopic from "../../../service/apiTopic";
import { cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton } from '@coreui/react';
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";

function ListTopic() {

    const [topics, setTopics] = useState([]);
    const [name, setName] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [description, setDescrition] = useState('');
    const [status, setStatus] = useState(2);

    const [qty_topic, setQtyTopic] = useState(0);
    const [qty_trash, setQtyTrash] = useState(0);

    const [tamp, setTamp] = useState();
    const [trash, setTrash] = useState();

    useEffect(() => {
        apiTopic.getAll().then((res) => {
            try {
                const data = res.data;
                const topicData = data.map((item) => {
                    // if(item.status === 2){
                    //     setNameButton('Hien')
                    // }
                    return {
                        id: item.id,
                        name: item.name,
                        slug: item.slug,
                        parent: item.parent_name,
                        description: item.description,
                        status: item.status
                    }
                });
                setTopics(topicData);
                setQtyTopic(res.qty_topic);
                setQtyTrash(res.qty_trash);
            } catch (e) {
                console.log(e);
            }
            setTamp();
        })
    }, [tamp, trash])


    const handleSubmit = async (e) => {
        if (name !== '') {
            e.preventDefault();
            const topic = {
                name: name,
                parent_id: parent_id,
                description: description,
                status: status
            };

            await apiTopic.createTopic(topic).then((res) => {
                if (res.data != null) {
                    alert("Thêm dữ liệu thành công !")
                    setTamp(res.data.id);
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

    // trash cat
    function trashTopic(id) {
        apiTopic.trashTopic(id).then(function (result) {
            alert(result.data.message);
            setTamp(true)
            
        })
    }

    // hien thi
    function displayTopic(id) {
        apiTopic.displayTopic(id).then(function (result) {
            if (result.data !== null) {
                alert("Cập nhật thành công !");
                setTrash(result.data.id);
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

                        {/* <div className="col-sm-12">
                            <h1 className="d-inline">Tất cả chủ đề <sup>({qty_topic})</sup></h1>
                        </div>
                        <div className="col-sm-2  text-right">
                            <Link class="action-btn" to="/admin/list-topic/list-trash" style={{ color: "red" }}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <sup class="count ms-1">{qty_trash}</sup>
                            </Link>
                        </div> */}

                        <div className="col-sm-12">
                            <h1 className="d-inline">Tất cả chủ đề <sup>({qty_topic})</sup></h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link to="/topic/list-trash" className="action-btn" style={{ color: "red" }}>
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
                                    <Link to="/topic/createtopic">
                                    <CButton color="primary" className="me-md-2">Thêm Topic</CButton>

                                    </Link>
                                    
                                </div>

                            </div>
                            
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th>Id</th>
                                            {/* <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th> */}
                                            <th>Tên chủ đề</th>
                                            {/* <th>Tên slug</th> */}
                                            <th>Danh mục cha</th>
                                            <th>Trạng thái</th>
                                            <th className="text-center">Chức Năng</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topics.map((item, index) => {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{item.id}</td>
                                                    {/* <td>
                                                        <img src="../public/images/category.jpg" alt="category.jpg" />
                                                    </td> */}
                                                    <td style={{width:"40%"}}>
                                                        <div className="name">
                                                            {item.name}
                                                        </div>
                                                        
                                                    </td>
                                                    {/* <td>{item.slug}</td> */}
                                                    <td style={{width:"25%"}} >{item.parent}</td>
                                                    <td style={{width:"10%"}}>{item.status === 2 ? "Ẩn" : "Hiển thị" }</td>
                                                    <td className="text-center" style={{ width: "25%" }}>
                                                    
                                                    <Link to={`/topic/topicupdate/${item.id}`} className="btn btn-sm">
                                                        <FaEdit className="me-1" />
                                                        Chỉnh sửa
                                                    </Link> |
                                                    <Link to={`/topic/topicdetail/${item.id}`} className="btn btn-sm">
                                                        <FaEye className="me-1" />
                                                        Chi tiết
                                                    </Link> |
                                                    <button onClick={() => trashTopic(item.id)} className="btn btn-sm">
                                                        <FaTrash className="me-1" />
                                                        Xoá
                                                    </button>
                                                </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                         
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>

    );
}

export default ListTopic;