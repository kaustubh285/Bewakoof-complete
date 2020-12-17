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

function Bottomwear() {
  const products = [
    {
      id: 1,
      og_price: 799,
      tribe_price: 615,
      img1:
        "https://images.bewakoof.com/t320/travel-men-s-pyjama-men-s-aop-pyjama-296411-1607410612.jpg",
      img2:
        "https://images.bewakoof.com/t320/travel-men-s-pyjama-men-s-aop-pyjama-296411-1607410612.jpg",
      name: "Travel Men's Pyjamas",
      price: 699,
    },
    {
      id: 2,
      og_price: 699,
      tribe_price: 502,
      img1:
        "https://images.bewakoof.com/t320/velvet-cake-men-s-plain-casual-shorts-298332-1606478093.jpg",
      img2:
        "https://images.bewakoof.com/t320/velvet-cake-men-s-plain-casual-shorts-298332-1606478106.jpg",
      name: "Cherry Red Plain Shorts",
      price: 549,
    },

    {
      id: 3,
      og_price: 999,
      tribe_price: 731,
      img1:
        "https://images.bewakoof.com/t320/black-joggers-pants-men-s-plain-casual-jogger-pants-293162-1605273914.jpg",
      img2:
        "https://images.bewakoof.com/t320/black-joggers-pants-men-s-plain-casual-jogger-pants-293162-1605273914.jpg",
      name: "Black Joggers Pants Plain",
      price: 799,
    },
    {
      id: 4,
      og_price: 699,
      tribe_price: 527,
      img1:
        "https://images.bewakoof.com/t320/velvet-cake-women-s-color-block-shorts-303604-1606489242.jpg",
      img2:
        "https://images.bewakoof.com/t320/velvet-cake-women-s-color-block-shorts-303604-1606489254.jpg",
      name: "Cherry Red Plain Shorts",
      price: 599,
    },
    {
      id: 5,
      og_price: 599,
      tribe_price: 333,
      img1:
        "https://images.bewakoof.com/t320/clovia-print-me-pretty-boxer-shorts-in-brown-100-cotton-clovia-women-s-printed-boxer-shorts-296693-1604318384.jpg",
      img2:
        "https://images.bewakoof.com/t320/clovia-print-me-pretty-boxer-shorts-in-brown-100-cotton-clovia-women-s-printed-boxer-shorts-296693-1604318392.jpg",
      name:
        "Shop Clovia Print Me Pretty Boxer Shorts in Brown- 100% Cotton-Front",
      price: 353,
    },
    {
      id: 6,
      og_price: 799,
      tribe_price: 615,
      img1:
        "https://images.bewakoof.com/t320/cherry-red-plain-pyjama-women-s-plain-pyjamas-298305-1606538656.jpg",
      img2:
        "https://images.bewakoof.com/t320/cherry-red-plain-pyjama-women-s-plain-pyjamas-298305-1606538656.jpg",
      name: "Dark Forest Green Half Sleeve T-Shirt-Front Bewakoof",
      price: 699,
    },
  ];
  return (
    <div className='container'>
      <PageTitle
        title='Bottom Wear'
        title_route='/bottom-wear'
        heading='Bottom Wear'
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

export default Bottomwear;
