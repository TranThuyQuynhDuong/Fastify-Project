import { Link } from "react-router-dom";
import { OutletProvider } from "../../../component/frontend/Outlet";

function Overview() {
    return (

        <main className="col-md-9">

            <article className="card mb-3">
                <div className="card-body">

                    <figure className="icontext">
                        <div className="icon">
                            <img className="rounded-circle img-sm border" src="images/avatars/avatar3.jpg" style={{height:"80px", width:"80px"}} />
                        </div>
                        <div className="text">
                            <strong> Mr. Jackson Someone </strong> <br />
                            <p className="mb-2"> myloginname@gmail.com </p>
                            <Link href="#" className="btn btn-light btn-sm">Edit</Link>
                        </div>
                    </figure>
                    <hr />
                    <p>
                        <i className="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ: Thành phố Hồ Chí Minh
                        <br />
                        <Link href="#" className="btn-link"> Edit</Link>
                    </p>



                    <article className="card-group card-stat">
                        <figure className="card bg">
                            <div className="p-3">
                                <h4 className="title">38</h4>
                                <span>Đơn hàng</span>
                            </div>
                        </figure>
                        <figure className="card bg">
                            <div className="p-3">
                                <h4 className="title">5</h4>
                                <span>Danh sách yêu thích</span>
                            </div>
                        </figure>
                        <figure className="card bg">
                            <div className="p-3">
                                <h4 className="title">12</h4>
                                <span>Chờ giao hàng</span>
                            </div>
                        </figure>
                        <figure className="card bg">
                            <div className="p-3">
                                <h4 className="title">50</h4>
                                <span>Đã giao</span>
                            </div>
                        </figure>
                    </article>
                </div>
            </article>

            <article className="card  mb-3">
                <div className="card-body">
                    <h5 className="card-title mb-4">Đơn hàng gần đây</h5>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            <figure className="itemside  mb-3">
                                <div className="aside"><img src="images/items/1.jpg" className="border img-sm" style={{height:"80px", width:"80px"}} /></div>
                                <figcaption className="info">
                                    <time className="text-muted"><i className="fa fa-calendar-alt"></i>
                                        12.09.2019</time>
                                    <p>Great book name goes here </p>
                                    <span className="text-success">Order confirmed </span>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <figure className="itemside  mb-3">
                                <div className="aside"><img src="images/items/2.jpg" className="border img-sm" style={{height:"80px", width:"80px"}} /></div>
                                <figcaption className="info">
                                    <time className="text-muted"><i className="fa fa-calendar-alt"></i>
                                        12.09.2019</time>
                                    <p>How to be rich</p>
                                    <span className="text-success">Departured</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <figure className="itemside mb-3">
                                <div className="aside"><img src="images/items/3.jpg" className="border img-sm" style={{height:"80px", width:"80px"}} /></div>
                                <figcaption className="info">
                                    <time className="text-muted"><i className="fa fa-calendar-alt"></i>
                                        12.09.2019</time>
                                    <p>Harry Potter book </p>
                                    <span className="text-success">Shipped </span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <Link href="#" className="btn btn-outline-primary btn-block"> Xem tất cả các đơn hàng <i
                        className="fa fa-chevron-down"></i> </Link>
                </div>
            </article>

        </main>




    );
}
export default Overview;