import React, { useEffect, useState } from "react";
import apiUser from "../../../api/apiMember";
import { useCart } from "react-use-cart";
import { imageURL } from "../../../api/config";
import accounting from "accounting";
import { useNavigate } from "react-router-dom";
import apiOrder from "../../../api/apiOrder";
import { useAuth } from "../../../component/Provider/AuthProvider";
import apiCustomer from "../../../api/apiCustomer";

function Checkout() {
    const { token } = useAuth();

    const [id, setId] = useState('');
    const [data, setData] = useState({});
    const [addresses, setAddresses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const DISCOUNT_THRESHOLD = 500000;
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    const [address, setAddress] = useState('');

    const {
        items,
        cartTotal,
        emptyCart
    } = useCart();

    useEffect(() => {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            setId(parsedUserData.id);
            setAddresses(parsedUserData.addresses || []);
        }
    }, []);

    const handleAddressChange = (selectedAddress) => {
      setName(selectedAddress.name);
      setEmail(selectedAddress.email); // Nếu bạn muốn lấy email từ địa chỉ, cần có trường email trong đối tượng địa chỉ
      setPhone(selectedAddress.phone);
      setAddress(selectedAddress.address);
    };
    
    const formatPrice = (price) => {
      const roundedPrice = Math.round(price);
      const formattedPrice = new Intl.NumberFormat('vi-VN').format(roundedPrice);
      return formattedPrice.replace(/,/g, '.') + '.000';
    };

    useEffect(() => {
        if (id) {
            apiUser.getUserById(id).then((res) => {
                try {
                    setData(res.data);
                } catch (e) {
                    console.log(e);
                }
            });
        }
    }, [id]);
    useEffect(() => {
      (async () => {
          await apiCustomer.getCustomerById(token).then((res) => {
              setName(res.data.name);
              setPhone(res.data.phone);
              setAddress(res.data.address);


          });

      })()
  }, [])
    useEffect(() => {
        const cartItems = items.map(item => ({ ...item, user_id: token }));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [items, token]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
    }, []);

    useEffect(() => {
        if (totalPrice >= DISCOUNT_THRESHOLD) {
            setDiscount(totalPrice * 0.05);
        } else {
            setDiscount(0);
        }
    }, [totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            user_id: token,
            note: note,
            name: name,
            phone: phone,
            address: address,
            status: 1,
            products: items.map(item => item.id),
            qty: items.map(item => item.quantity),
            price: items.map(item => item.price),
        };

        try {
            const res = await apiOrder.createOrder(order);
            if (res.data) { // Kiểm tra nếu dữ liệu tồn tại trong phản hồi để xác định đơn hàng đã được tạo thành công.
                alert('Bạn đã đặt hàng thành công!');
                emptyCart();
                navigate('/');
            } else {
                alert('Đơn hàng đã bị lỗi. Hãy thử lại sau!');
            }
        } catch (error) {
            console.error('Lỗi khi gửi đơn hàng:', error.message);
            alert('Đơn hàng đã bị lỗi. Hãy thử lại sau!');
        }
    };

    const discountedTotalPrice = totalPrice - discount;

    return (
        <>
      <div className="bg-primary">
        <div className="container py-4">
          <nav className="d-flex">
            <h6 className="mb-0">
              <a href="/" className="text-white-50">Home</a>
              <span className="text-white-50 mx-2"> - </span>
              <a href="/cart" className="text-white-50">2. Shopping cart</a>
              <span className="text-white-50 mx-2"> - </span>
              <a href="/checkout" className="text-white"><u>3. Order info</u></a>
              <span className="text-white-50 mx-2"> - </span>
              <a href="/payment" className="text-white-50">4. Payment</a>
            </h6>
          </nav>
        </div>
      </div>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-4">
              <div className="card shadow-0 border">
                <div className="p-4">
                  <h5 className="card-title mb-3">Guest checkout</h5>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <p className="mb-0">Họ và tên</p>
                      <div className="form-outline">
                        <input 
                          type="text" 
                          className="form-control" 
                          value={name}
                          onChange={(e) => setName(e.target.value)} 
                          placeholder="Nhập tên" 
                         
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0">Phone</p>
                      <div className="form-outline">
                        <input 
                          type="text" 
                          className="form-control" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)} 
                          placeholder="Nhập số điện thoại" 
                          
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0">Địa chỉ</p>
                      <div className="form-outline">
                        <input 
                          type="text" 
                          className="form-control" 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)} 
                          placeholder="Nhập địa chỉ" 
                       
                        />
                      </div>
                    </div>
                    {/* <h5 className="card-title mb-3">Vui lòng chọn địa chỉ</h5>
                    <div className="row mb-3">
                      <div className="col-lg-6 mb-3">
                        <div className="form-check h-100 border rounded-3">
                          <div className="p-3">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="flexRadioDefault" 
                              id="flexRadioDefault1" 
                            
                            />
                            <b className="mx-2 text-muted"></b>
                            {data.name}
                            <b className="mx-2 text-muted"><i className="fa fa-map-marker-alt"></i></b>
                            {data.address}
                            <b className="mx-2 text-muted"><i className="fa fa-phone"></i></b>
                            {data.phone}
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <hr className="my-4" />
                  <h5 className="card-title mb-3">Hình thức thanh toán</h5>
                  <div className="row mb-3">
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="paymentCash" />
                          <label className="form-check-label" htmlFor="paymentCash">
                            Tiền mặt <br />
                            <small className="text-muted">Chuyển tiền mặt khi nhận hàng</small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="paymentBank" />
                          <label className="form-check-label" htmlFor="paymentBank">
                            Chuyển khoản <br />
                            <small className="text-muted">Chuyển khoản ngân hàng</small>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="mb-3">
                    <p className="mb-0">Ghi chú</p>
                    <div className="form-outline">
                      <textarea 
                        id="form4" 
                        className="form-control order-form-input1" 
                        
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="float-end">
                    <button className="btn btn-light border">Hủy</button>
                    <button className="btn btn-success shadow-0 border" onClick={handleSubmit}>Đặt hàng</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxWidth: '320px' }}>
                <h6 className="mb-3">Summary</h6>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">{formatPrice(cartTotal, 0, ".", ",")} <span className="text-muted">đ</span></p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-danger">- {formatPrice(discount, 0, ".", ",")} đ</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">Free ship</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">{formatPrice(discountedTotalPrice, 0, ".", ",")} <span className="text-muted">đ</span></p>
                </div>
                <div className="input-group mt-3 mb-4">
                  <input type="text" className="form-control border" name="promoCode" placeholder="Promo code" />
                  <button className="btn btn-light text-primary border">Apply</button>
                </div>
                <hr />
                <h6 className="text-dark my-4">Sản phẩm trong giỏ hàng</h6>
                {items.map((item, index) => (
                  <div className="d-flex align-items-center mb-4" key={index + 1}>
                    <div className="me-3 position-relative">
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                        {item.quantity}
                      </span>
                      {item.image.split(',')[0].trim() && (
                         <img
                         src={imageURL + item.image}
                         className="img-xs border"
                         style={{ width: "100px", height: "auto" }}
                       />
                      )}
                    </div>
                    <div>
                      <a href="#" className="nav-link">
                        {item.name}
                      </a>
                      <div className="price text-muted">{formatPrice(item.price)} <span className="text-muted">đ</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
