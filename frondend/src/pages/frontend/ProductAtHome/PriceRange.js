import React, { useEffect } from "react";

function PriceRange() {

  return (
    <>
      <div class="price-range">
        <h2>Price Range</h2>
        <div class="well">
          <input
            type="text"
            class="span2"
            value=""
            data-slider-min="0"
            data-slider-max="600"
            data-slider-step="5"
            data-slider-value="[250,450]"
            id="sl2"
          />{" "}
          <br />
          <b>$ 0</b> <b class="pull-right">$ 600</b>
        </div>
      </div>
      <div class="shipping text-center">
        <img src="images/home/shipping.jpg" alt="" />
      </div>
    </>
  );
}

export default PriceRange;
