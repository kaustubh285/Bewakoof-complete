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

function Women_clothing() {
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
      og_price: 549,
      tribe_price: 276,
      img1:
        "https://images.bewakoof.com/t320/chibi-harry-boyfriend-t-shirt-hpl-women-s-printed-boyfriend-t-shirts-271310-1587968427.jpg",
      img2:
        "https://images.bewakoof.com/t320/chibi-harry-boyfriend-t-shirt-hpl-women-s-printed-boyfriend-t-shirts-271310-1587962152.jpg",
      name: "Chibi Harry Boyfriend T-Shirt (HPL)-Front Bewakoof",
      price: 299,
    },
    {
      id: 5,
      og_price: 599,
      tribe_price: 300,
      img1:
        "https://images.bewakoof.com/t320/friends-logo-half-sleeve-t-shirt-frl-women-s-half-sleeve-printed-t-shirt-238063-1592483279.jpg",
      img2:
        "https://images.bewakoof.com/t320/friends-logo-half-sleeve-t-shirt-frl-women-s-half-sleeve-printed-t-shirt-238063-1592483293.jpg",
      name: "Friends Logo Half Sleeve T-shirt (FRL)-Front Bewakoof",
      price: 299,
    },
    {
      id: 6,
      og_price: 549,
      tribe_price: 300,
      img1:
        "https://images.bewakoof.com/t320/2020-emojis-boyfriend-t-shirt-black-women-s-printed-boyfriend-t-shirts-277764-1597228826.jpg",
      img2:
        "https://www.bewakoof.com/p/2020-emojis-boyfriend-t-shirt-for-women",
      name: "2020 Emojis Boyfriend T-Shirt Black-Front Bewakoof",
      price: 325,
    },
  ];
  return (
    <div className='container'>
      <PageTitle
        title='Women Clothing'
        title_route='/women-clothing'
        heading="Women's Clothing"
        results={620}
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

export default Women_clothing;
