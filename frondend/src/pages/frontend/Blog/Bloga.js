import Brand from "../ProductAtHome/Brand";
import Category from "../ProductAtHome/Category";

import { useEffect, useState } from "react";
import apiPost from "../../../api/apiPost";
import { imageURL } from "../../../api/config";
import { Link } from "react-router-dom";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiPost.getPostNew(1,5).then((res) => {
      try {
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);
  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="left-sidebar">
                <Category />

                <div class="brands_products">
                  <Brand />
                </div>

                
                <div class="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-sm-9">
            <h2 class="title text-center"><Link to={`/tin-tuc/1/5`}>Tin Tức Công Nghệ</Link></h2>

              <div class="blog-post-area">

				
				{data.map((item, index) => {
                  return (
					<Link to={`/tin-tuc/${item.slug}`}>
                <div class="single-blog-post">
                  <h3>{item.title}</h3>
                  <div class="post-meta">
                    <ul>
                      <li>
                        <i class="fa fa-user"></i> Mac Doe
                      </li>
                      <li>
                        <i class="fa fa-clock-o"></i> 1:33 pm
                      </li>
                      <li>
                        <i class="fa fa-calendar"></i> DEC 5, 2013
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                    </span>
                  </div>
                  <a href="">
				  <img
                            src={imageURL + item.image_1}
                            
                            className="img-bg ml-3 "
                          />
                  </a>
                  <p>
				  {item.description_1}
                  </p>
                  <Link
                            to={`/tin-tuc/${item.slug}`}
                            class="btn btn-primary"
                          >
                    Read More
                  </Link>
				  {/* <a  class="btn btn-primary" href="">Read More</a> */}
                </div>
				</Link>
				 );
                })}
               
                

                <div class="pagination-area">
                  <ul class="pagination">
                    <li>
                      <a href="" class="active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="">2</a>
                    </li>
                    <li>
                      <a href="">3</a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
