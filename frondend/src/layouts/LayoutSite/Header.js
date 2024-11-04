import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../component/Provider/AuthProvider";
import { useCart } from "react-use-cart";
import apiConfig from "../../api/apiConfig";
import { imageURL } from "../../api/config";
import { useEffect, useState } from "react";
import { useAsyncValue, useNavigate } from "react-router-dom"
function Header() {
  const { token, setToken } = useAuth();
  const [key, setKey] = useState('');
  const navigate = useNavigate(); // chuyen trang

  const logout = () => {
    // Thực hiện đăng xuất
    localStorage.removeItem("token");
    setToken(null);
  };
  const handleSearch = (e) => {
    setKey(e.target.value);
    if (e.target.value.length > 0) {
      navigate(`/tim-kiem/${e.target.value}/1/12`);
    }
    else {
      navigate(`/`);
    }
  };

  return (
    <>
    <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Home | E-Shopper</title>
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/font-awesome.min.css" rel="stylesheet" />
        <link href="css/prettyPhoto.css" rel="stylesheet" />
        <link href="css/price-range.css" rel="stylesheet" />
        <link href="css/animate.css" rel="stylesheet" />
        <link href="css/main.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />

        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>

        <link rel="shortcut icon" href="images/ico/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="images/ico/apple-touch-icon-144-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="images/ico/apple-touch-icon-114-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="images/ico/apple-touch-icon-72-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="images/ico/apple-touch-icon-57-precomposed.png"
        />
      </head>
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i> +2 95 01 88 821
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i> info@domain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav1">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  <a href="/">
                    <img src="images/home/logo.png" alt="" />
                  </a>
                </div>
                <div className="btn-group pull-right">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      USA
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Canada</a>
                      </li>
                      <li>
                        <a href="#">UK</a>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      DOLLAR
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Canadian Dollar</a>
                      </li>
                      <li>
                        <a href="#">Pound</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav1">
                    <li>
                      <a href="/tai-khoan">
                        <i className="fa fa-user"></i> Account
                      </a>
                    </li>
                  
                    <li>
                      <a href="/gio-hang">
                        <i className="fa fa-shopping-cart"></i> Cart
                      </a>
                    </li>
                    <li>
                      {token ? (
                        <button
                          className="nav-link"
                          onClick={logout}
                        >
                          LogOut
                        </button>
                      ) : (
                        <Link to="./login">
                          <i className="fa fa-lock"></i> Login
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <a href="/" className="active">
                        Home
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        Shop<i className="fa fa-angle-down"></i>
                      </a>
                      <ul
                        role="menu"
                        className="sub-menu"
                      >
                        <li>
                          <a href="/tat-ca-san-pham">Products</a>
                        </li>
                        <li>
                          <a href="/ProductSale">Products Sale </a>
                        </li>
                        
                        
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="/tin-tuc">
                        Blog<i className=""></i>
                      </a>
                      {/* <ul role="menu" className="sub-menu">
                        <li>
                          <a href="/tin-tuc">Blog List</a>
                        </li>
                       
                      </ul> */}
                    </li>
                    
                    <li>
                      <a href="./contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                <input type="text" className="form-control" placeholder="Search" style={{ height: "40px", borderColor: "#ff6a00" }} value={key} onChange={handleSearch} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
