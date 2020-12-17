import {
  Accordion,
  AccordionDetails,
  Breadcrumbs,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import PageTitle from "../components/PageTitle";
import CustomAccordians from "../components/CustomAccordians";
import "./Men_clothing.css";
import ProductLister from "../components/ProductLister";

function Topwear() {
  const products = [
    {
      id: 1,
      og_price: 549,
      tribe_price: 276,
      img1:
        "https://images.bewakoof.com/t320/daffy-awesome-half-sleeve-t-shirt-ltl-women-s-half-sleeve-printed-t-shirt-276664-1595675945.jpg",
      img2:
        "https://images.bewakoof.com/t320/daffy-awesome-half-sleeve-t-shirt-ltl-women-s-half-sleeve-printed-t-shirt-276664-1595676019.jpg",
      name: "Daffy Awesome Half Sleeve T-Shirt (LTL)-Front Bewakoof",
      price: 299,
    },
    {
      id: 2,
      og_price: 599,
      tribe_price: 300,
      img1:
        "https://images.bewakoof.com/t320/sunset-block-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-271583-1603455568.jpg",
      img2:
        "https://images.bewakoof.com/t320/sunset-block-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-271583-1585977434.jpg",
      name: "Sunset Block Full Sleeve T-Shirt-Front Bewakoof",
      price: 325,
    },

    {
      id: 3,
      og_price: "",
      tribe_price: 236,
      img1:
        "https://images.bewakoof.com/t320/navy-blue-half-sleeve-t-shirt-women-s-half-sleeve-plain-t-shirt-232381-1567850843.jpg",
      img2:
        "https://images.bewakoof.com/t320/spiderman-face-half-sleeve-t-shirt-avl-black-women-s-half-sleeve-printed-t-shirt-277648-1597918425.jpg",
      name: "Hardest Climb Round Neck Vest Navy Blue-Front Bewakoof",
      price: 499,
    },
    {
      id: 4,
      og_price: 599,
      tribe_price: 439,
      img1:
        "https://images.bewakoof.com/t320/more-memories-full-sleeve-t-shirt-navy-blue-men-s-printed-full-sleeve-t-shirt-307100-1607000355.jpg",
      img2:
        "https://images.bewakoof.com/t320/more-memories-full-sleeve-t-shirt-navy-blue-men-s-printed-full-sleeve-t-shirt-307100-1607000363.jpg",
      name: "More Memories Full Sleeve T-Shirt Navy Blue-Front Bewakoof",
      price: 499,
    },
    {
      id: 5,
      og_price: 499,
      tribe_price: 273,
      img1:
        "https://images.bewakoof.com/t320/navy-blue-half-sleeve-t-shirt-women-s-half-sleeve-plain-t-shirt-232381-1567850833.jpg",
      img2:
        "https://images.bewakoof.com/t320/navy-blue-half-sleeve-t-shirt-women-s-half-sleeve-plain-t-shirt-232381-1567850843.jpg",
      name: "Navy Blue Half Sleeve T-Shirt-Front Bewakoof",
      price: 299,
    },
    {
      id: 6,
      og_price: 299,
      tribe_price: 273,
      img1:
        "https://images.bewakoof.com/t320/dark-forest-green-half-sleeve-t-shirt-men-s-plain-t-shirts-237338-1583494122.jpg",
      img2:
        "https://images.bewakoof.com/t320/dark-forest-green-half-sleeve-t-shirt-men-s-plain-t-shirts-237338-1572532565.jpg",
      name: "Dark Forest Green Half Sleeve T-Shirt-Front Bewakoof",
      price: 299,
    },
  ];
  return (
    <div className='container'>
      <PageTitle
        title='Top Wear'
        title_route='/top-wear'
        heading='Top Wear'
        results={6}
      />
      <div className='pt-5  d-flex flex-column'>
        <div className='body_container'>
          <div className='body_container_left'>
            <div className='w-100 pl-3 pb-2 '>
              <h6 style={{ color: "gray", fontWeight: 800, fontSize: "small" }}>
                FILTERS
              </h6>
            </div>

            <div className='w-100'>
              <CustomAccordians />
            </div>
          </div>
          <div className='body_container_right'>
            <div className='body_right float-right'>
              <h6>SORT BY Popular</h6>
            </div>
            <ProductLister products={products} />
          </div>
        </div>
      </div>
      {/* Left Section -> Filters */}
      {/* Right Section -> Display */}
    </div>
  );
}

export default Topwear;
