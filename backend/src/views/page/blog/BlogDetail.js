import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { imageURL } from "../../../config";
import apiPost from "../../../service/apiPost";

function PostShow() {

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        apiPost.getById(id).then((res) => {
            try {
                setData(res.data);
            } catch (e) {
                console.log(e);
            }
        })
    }, [])

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Chi tiết bàI viết</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="card">
                    <div className="card-header text-right">
                        <Link to="/blog/bloglist" className="btn btn-sm btn-info">
                            <i className="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
                        </Link>
                    </div>
                    <div className="card-body p-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: "30%" }}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{data.id}</td>
                                </tr>
                                <tr>
                                    <th>Tên bài viết</th>
                                    <td>{data.title}</td>
                                </tr>
                                <tr>
                                    <th>Tên chủ đề</th>
                                    <td>{data.name_topic}</td>
                                </tr>
                                <tr>
                                    <th style={{ verticalAlign: "middle" }}>Hình ảnh</th>
                                    < ><img style={{ width: "250px" }} src={imageURL + data.image_1} alt="anh" /></>

                                    {data.image_2 && (
                                        < ><img style={{ width: "250px" }} src={imageURL + data.image_2} alt="anh" /></>
                                    )}

                                    {data.image_3 && (
                                        < ><img style={{ width: "250px" }} src={imageURL + data.image_3} alt="anh" /></>
                                    )}
                                </tr>
                                <tr>
                                    <th style={{ verticalAlign: "middle" }} rowSpan="3">Mô tả</th>
                                    <td>{data.description_1}</td>
                                </tr>
                                <tr>
                                    <td>{data.description_2}</td>
                                </tr>
                                <tr>
                                    <td>{data.description_3}</td>
                                </tr>
                                <tr>
                                    <th>Kiểu</th>
                                    <td>{data.type}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{data.status === 1 ? "Hiển thị" : "Ẩn"}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{data.created_at}</td>
                                </tr>
                                <tr>
                                    <th>Ngày cập nhật</th>
                                    <td>{data.updated_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default PostShow;