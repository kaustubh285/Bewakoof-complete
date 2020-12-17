import { Breadcrumbs, Link } from "@material-ui/core";
import React from "react";
import "./breadcrumb.css";

function PageTitle({ title, title_route, heading, results }) {
  return (
    <>
      <div className='p-2 pt-4 pb-4'>
        <Breadcrumbs aria-label='home' style={{ fontSize: "14px !important" }}>
          {/* This link is Material ui Link */}
          <Link color='inherit' href='/'>
            Home
          </Link>
          <Link color='inherit' href={title_route}>
            {title}
          </Link>
        </Breadcrumbs>
      </div>
      <div className='heading d-flex flex-column'>
        <h4 style={{ fontWeight: 700 }}>
          {heading}{" "}
          <span style={{ color: "gray", fontWeight: 400 }}>({results})</span>
        </h4>
        <div className='yellow_line'></div>
      </div>
    </>
  );
}

export default PageTitle;
