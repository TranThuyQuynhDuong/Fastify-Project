import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiBrand from "../../../api/apiBrand";
import { imageURL } from "../../../api/config";

function Brand() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    apiBrand.getBrandFE().then((res) => {
        try {
            console.log(res);
            const brandData = res.map((item,index) => {
                return {
                    id: item.id,
                    name: item.name,
                    slug: item.slug,
                    icon: item.icon,
                    description: item.description
                }
            });
            setBrands(brandData);
        } catch (e) {
            console.log(e);
        }
    })
}, [])

  return (
    <div className="brands_products">
      
      <h2>Brands</h2>
      <div className="brands-name">
        {/* <ul className="nav nav-pills nav-stacked">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Link to={`/san-pham/${brand.slug}`}>{brand.name}</Link>
            </li>
          ))}
        </ul> */}
            <nav className="nav-home-aside">

        <ul className="menu-category pt-3">
                    {brands.map((item, index) => {
                        return (
                            <li className="d-flex" key={index}>
                                <img className="pt-2" src={imageURL + item.icon} style={{width:"40%", height:"40%"}}/>
                                <Link to={`/san-pham/${item.slug}`} style={{color:"black"}}  className="ps-3">{item.name}</Link>
                            </li>

                        );
                    })}
                </ul>
        </nav>
      </div>
    </div>
  );
}

export default Brand;
