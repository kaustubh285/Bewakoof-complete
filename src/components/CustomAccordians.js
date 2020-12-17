import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function CustomAccordians() {
  const myCategories = [
    "T-shirt",
    "Boxer",
    "Jacket",
    "Vest",
    "Hoodies",
    "Pyjamas",
    "Shirt",
  ];
  const mySizes = [
    "STANDARD",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "28",
    "30",
    "32",
    "34",
    "36",
    "38",
    "3XL",
  ];
  const mycolors = [
    "black",
    "blue",
    "grey",
    "red",
    "white",
    "green",
    "yellow",
    "purple",
    "brown",
    "orange",
  ];

  const myDesign = [
    "Chest Printed",
    "Plain",
    "Printed",
    "All Over Printed",
    "Checked",
    "Badge",
    "Side Printed",
    "Cut & Sew",
  ];
  return (
    <>
      <Accordion
        style={{
          borderBottom: "1px solid lightgray",
          borderRadius: "0px",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <h6>Categories</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 200,
            }}>
            {myCategories.map((item) => (
              <Typography className='pb-1'>{item}</Typography>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          borderBottom: "1px solid lightgray",
          borderRadius: "0px",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <h6>Sizes</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {mySizes.map((item) => (
              <Typography
                className='pb-1'
                style={{
                  fontSize: "9px !important",
                  fontWeight: 200,
                }}>
                {item}
              </Typography>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          borderBottom: "1px solid lightgray",
          borderRadius: "0px",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <h6>Colors</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div
            className='d-flex flex-wrap'
            style={{
              fontSize: "15px",
              fontWeight: 200,
            }}>
            {mycolors.map((item) => (
              <div
                style={{
                  minWidth: "30px",
                  minHeight: "30px",
                  backgroundColor: item,
                  border: "1px solid lightgray",
                  margin: "3px",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          borderBottom: "1px solid lightgray",
          borderRadius: "0px",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <h6>Design</h6>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 200,
            }}>
            {myDesign.map((item) => (
              <Typography className='pb-1'>{item}</Typography>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CustomAccordians;
