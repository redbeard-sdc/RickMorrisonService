/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Component } from 'react';
// import Expedia from '../assets/Expedia.png';
// import Booking from '../assets/booking logo.png';
// import CheapTickets from '../assets/CheapTickets.png';
// import HotelsCom from '../assets/HotelsCom.png';
// import OfficialHotelSite from '../assets/OfficialHotelSite.gif';
// import TripAdvisor from '../assets/TripAdvisor.png';
// import Priceline from '../assets/Priceline.png';
import {
  viewDeals, viewDealText, siteModule, sitePrice, spanImage,
} from '../../public/css.css';

const SiteDisplay = (props) => {
  const viewDeal = (
    <div className={viewDeals}>
      <span className={viewDealText}>
      View Deal
      </span>
    </div>
  );
  if (props.site) {
    if (props.site[0] === 'officialhotelsite') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span>
            <img src="https://s3-us-west-1.amazonaws.com/stanleyhotel/rick4.gif" alt="OfficialHotelSite" width="110" height="45" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'booking') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span>
            <img src="https://s3-us-west-1.amazonaws.com/stanleyhotel/rick1.png" alt="Booking" height="45" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'expedia') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span>
            <img src="https://s3-us-west-1.amazonaws.com/stanleyhotel/rick0.png" alt="Expedia" height="45" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'cheaptickets') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span>
            <img src="https://s3-us-west-1.amazonaws.com/stanleyhotel/rick6.png" alt="CheapTickets" height="45" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'hotels') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span>
            <img src="https://s3-us-west-1.amazonaws.com/stanleyhotel/rick5.png" alt="HotelsCom" height="45" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'tripadvisor') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span>
            <img src="https://s3-us-west-1.amazonaws.com/stanleyhotel/rick2.png" alt="TripAdvisor" height="20" />
          </span>
          <span className={sitePrice}>${props.site[1]}</span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'agoda') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span className={spanImage}>
            <img src="https://s3.us-east-2.amazonaws.com/images-bucket-09723/agoda-logo-1500x900-02noframe.png" alt="Agoda" height="50" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'orbitz') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span className={spanImage}>
            <img src="https://s3.us-east-2.amazonaws.com/images-bucket-09723/logo-orbitz.png" alt="Orbitz" height="50" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'hotwire') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span className={spanImage}>
            <img src="https://s3.us-east-2.amazonaws.com/images-bucket-09723/Hotwire_coupons__discount_codes__and_promo_codes.png" alt="Hotwire" height="50" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === 'priceline') {
      return (
        <div className={siteModule} onClick={props.onClick}>
          <span>
            <img src="https://s3-us-west-1.amazonaws.com/stanleyhotel/rick3.png" alt="Priceline" height="45" />
          </span>
          <span className={sitePrice}>
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    return (
      <div>
          LOADING...
      </div>
    );
  }
  return (
    <div>
        LOADING...
    </div>
  );

  // return (
  //   <div>
  //     <span>
  //       <img src={Expedia} alt="Expedia" />
  //     </span>
  //   </div>
  // )
};

export default SiteDisplay;
