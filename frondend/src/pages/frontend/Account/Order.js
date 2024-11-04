import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiOrder from "../../../api/apiOrder";
import { useAuth } from "../../../component/Provider/AuthProvider";
import { imageURL } from "../../../api/config";

function Order() {
  const [data, setData] = useState([]);
  const { token, setToken } = useAuth();

  const formatPrice = (price) => {
    const roundedPrice = Math.round(price);
    const formattedPrice = new Intl.NumberFormat("vi-VN").format(roundedPrice);
    return formattedPrice.replace(/,/g, ".") + ".000";
  };

  useEffect(() => {
    (async () => {
      await apiOrder.getAllOrderByUserId(token, 1, 100).then((res) => {
        setData(res.data);
        console.log(res);
      });
    })();
  }, [token]);

  const handleLogout = () => {
    setToken(null);
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await apiOrder.updateStatusOrder({ status: 0 }, orderId);
      setData(data.filter((order) => order.id !== orderId)); // Loại bỏ đơn hàng đã hủy khỏi danh sách
      alert("Đã hủy đơn hàng thành công.");
    } catch (error) {
      console.error("Error cancelling order:", error);
      alert("Đã xảy ra lỗi khi hủy đơn hàng.");
    }
  };

  const calculateSubtotal = (pro) => {
    return pro.price * pro.qty;
  };

  const calculateOrderSubtotal = (order) => {
    return order.products.reduce((acc, pro) => acc + calculateSubtotal(pro), 0);
  };

  const calculateTotal = (order) => {
    const subtotal = calculateOrderSubtotal(order);
    const shippingFee = 0; // Thay 0 bằng phí vận chuyển thực tế
    return subtotal + shippingFee;
  };

  return (
    <div>
      <div className="">
        {console.log(data)}
        <section className="section-pagetop bg-gray">
          <div className="container">
            <h3 className="title-page">Tài khoản của tôi</h3>
          </div>
        </section>
        {data.length > 0 ? (
          <section className="section-content padding-y">
            <div className="container">
              <div className="row">
                <aside className="col-md-3">
                  <nav className="list-group">
                    <Link
                      className="list-group-item active text-white"
                      style={{ background: "#ff6a00", borderColor: "#ff6a00" }}
                      to="/tai-khoan"
                    >
                      Tổng quan
                    </Link>
                    <Link className="list-group-item" to={`/tai-khoan/don-hang`}>
                      {" "}
                      Đơn hàng
                    </Link>
                    <Link className="list-group-item" to={`/tai-khoan/cai-dat`}>
                      {" "}
                      Cài đặt tài khoản{" "}
                    </Link>
                    <button
                      className="list-group-item text-left"
                      onClick={handleLogout}
                    >
                      {" "}
                      Đăng xuất{" "}
                    </button>
                  </nav>
                </aside>
                <main className="col-md-9">
                  {data.map((item, index) => (
                    <div className="col-md-9" key={index}>
                      {console.log(item.products)}
                      <article className="card mb-4">
                        <header className="card-header">
                          <p className="float-right text-success">
                            {item.status === 2
                              ? "Đang giao hàng"
                              : item.status === 3
                              ? "Đã giao hàng"
                              : "Chưa giao hàng"}
                          </p>
                          <strong className="d-inline-block mr-3">
                            Order ID: {item.id}
                          </strong>
                          <span>Ngày đặt hàng: {item.created_at}</span>
                        </header>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-8">
                              <h6 className="text-muted">Chuyển tới</h6>
                              <p>
                                Tên: {item.name} <br />
                                Sdt: {item.phone} <br />
                                Địa chỉ: {item.address}
                                <br />
                              </p>
                            </div>
                            <div className="col-md-4">
                              <h6 className="text-muted">Payment</h6>
                              <span className="text-success">
                                <i className="fab fa-lg fa-cc-visa"></i>
                                Visa **** 4216
                              </span>
                              <p>
                                Tổng phụ:{" "}
                                {formatPrice(calculateOrderSubtotal(item))} VNĐ{" "}
                                <br />
                                Phí vận chuyển: Free <br />
                                <span className="b">
                                  Tổng : {formatPrice(calculateTotal(item))} VNĐ{" "}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <tbody>
                              {item.products.map((pro, index) => (
                                <tr key={index}>
                                  <td style={{ width: "50px" }}>
                                    <img
                                      src={imageURL + pro.image}
                                      className="img-xs border"
                                      style={{ width: "100px", height: "auto" }}
                                    />
                                  </td>
                                  <td>
                                    <p className="title mb-0">{pro.name}</p>
                                    <var className="price text-muted">
                                      {formatPrice(pro.price)}
                                    </var>
                                  </td>
                                  <td>Số lượng: {pro.qty}</td>
                                  <td width="250">
                                    {" "}
                                    <div className="dropdown d-inline-block">
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">
                                          Return
                                        </a>
                                        <a href="#" className="dropdown-item">
                                          Cancel order
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="table-responsive">
                          <div className="text-center">
                            <button
                              className="dropdown-item"
                              onClick={() => handleCancelOrder(item.id)}
                            >
                              Cancel order
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </main>
              </div>
            </div>
          </section>
        ) : (
          <section className="section-content padding-y">
            <div className="container">
              <div className="row">
                <aside className="col-md-3">
                  <nav className="list-group">
                    <Link
                      className="list-group-item active text-white"
                      style={{ background: "#ff6a00", borderColor: "#ff6a00" }}
                      to="/tai-khoan"
                    >
                      Tổng quan
                    </Link>
                    <Link className="list-group-item" to={`/tai-khoan/don-hang`}>
                      {" "}
                      Đơn hàng
                    </Link>
                    <Link className="list-group-item" to={`/tai-khoan/cai-dat`}>
                      {" "}
                      Cài đặt tài khoản{" "}
                    </Link>
                    <button
                      className="list-group-item text-left"
                      onClick={handleLogout}
                    >
                      {" "}
                      Đăng xuất{" "}
                    </button>
                  </nav>
                </aside>
                <main className="col-md-9">
                  <div className="col-md-9">
                    <p className="text-center">Bạn chưa có đơn hàng nào !</p>
                  </div>
                </main>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Order;
