import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import categoryservice from "../../../api/apiCategory";
import PriceRange from "./PriceRange";
import RecommentItem from "./RecommentItem";
import ProductCategorys from "./ProductCategory";
import ProductItems from "./ProductsItems";
import ProductSale from "./ProductsSale";
import Brand from "./Brand";
import Category from "./Category";
import Slider from "./Slider";
import Bestseller from "./Bestseller";
import New from "./New";

function Main({ menu }) {
  

  return (  
    <>
	<Slider/>

      <section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						<Category/>
					
						<Brand/>
						
						{/* <PriceRange/> */}
					
					</div>
				</div>
				
				<div class="col-sm-9 padding-right">
					<ProductItems/>
					<Bestseller/>
					<ProductSale/>
					
					<ProductCategorys/>
					
					{/* <RecommentItem/> */}
					
				</div>
			</div>
			{/* <New/> */}

		</div>
	</section>


    </>
  );
}

export default Main;
