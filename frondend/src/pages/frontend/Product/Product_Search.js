import { useEffect, useState } from "react";
import { imageURL } from "../../../api/config";
import { Link, useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";

function Product_Search() {

    const { key } = useParams();

    const [products, setProducts] = useState([]);

	const formatPrice = (price) => {
		const roundedPrice = Math.round(price);
		const formattedPrice = new Intl.NumberFormat('vi-VN').format(roundedPrice);
		return formattedPrice.replace(/,/g, '.') + '.000';
	};
    const page = parseInt(useParams().page);
    const limit = parseInt(useParams().limit);

    const [pages, setPages] = useState(1);


    useEffect(() => {
        apiProduct.searchProducts(key, page, limit).then((res) => {
            try {
                const data = res.data;

                console.log(res);

                const numberOfPages = res.meta.pagination.pageCount;
                setPages(numberOfPages);

                const productData = data.map((item, index) => {
                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        price_sale: item.price_sale,
                        image: item.image,
                        brand_id: item.product_brand,
                        category_id: item.product_cat,
                        nameCat: item.nameCat,
                        nameBrand: item.nameBrand,
                        status: item.status,
                        slug: item.slug,
                    }
                }
                )
                setProducts(productData);


            } catch (e) {
                console.log(e);
            }
        })
    }, [key, page])

    return (
        <section className="padding-bottom-sm container">
            

            <div className="row row-sm">
                {products.map((item, index) => (

                    <div className="col-xl-2 col-lg-3 col-md-4 col-6" key={index} style={{ display: "flex" }}>
                        <div className="card card-sm card-product-grid pt-2" style={{ flexGrow: 1 }}>
                        <Link to={`/chi-tiet-san-pham/${item.slug}`}> <img src={imageURL + item.image} style={{ height: "140px", width: "auto" }} /> </Link>
                            <figcaption className="info-wrap">
                            <Link to={`/chi-tiet-san-pham/${item.slug}`} className="product-name2 clamp-text" style={{ fontSize: "14px",color: "black" }}>{item.name}</Link>
                                <div className="price mt-1 text-danger">{item.price_sale ? formatPrice(item.price_sale) : formatPrice(item.price)}</div>
                                <div className="price mt-1 text-gray"><del className="12px">{item.price_sale ? formatPrice(item.price) : ''}</del></div>


                            </figcaption>

                        </div>
                    </div>


                ))}
            </div>
            <ul className="pagination">
                <li className="page-item">
                    {page > 1 ? (
                        <Link className="page-link" to={`/tim-kiem/${key}/${page - 1}/${limit}`}>Previous</Link>
                    ) : (
                        <span className="page-link disabled">Previous</span>
                    )}
                </li>
                {Array.from(Array(pages).keys()).map((index) => (
                    <li
                        key={index}
                        className={`page-item ${index + 1 === page ? "active" : ""}`}
                    >
                        <Link
                            className="page-link bg-white"
                            to={`/tim-kiem/${key}/${index + 1}/${limit}`}
                        >
                            {index + 1}
                        </Link>
                    </li>
                ))}
                <li className="page-item">
                    <Link className="page-link" to={`/tim-kiem/${key}/${page + 1}/${limit}`}>
                        Next
                    </Link>
                </li>
            </ul>

        </section>

    );
}

export default Product_Search;