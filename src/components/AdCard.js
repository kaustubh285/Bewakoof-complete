import React from "react";
import "./adCard.css";

function AdCard({ Ad }) {
  return (
    <div className='AdCard'>
      <img src={Ad} className='AdCard_poster' alt='ad-poster' />
    </div>
  );
}

export default AdCard;
