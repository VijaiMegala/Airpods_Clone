"use client"
import React, { useState, useRef } from "react";
import ProductMenuStyles from "./ProductMenuHeaderStyle.module.scss";
import DropDownHeader from "../DropDownHeader/page";
import { FaApple } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { LuEqual } from "react-icons/lu";
import { gsap } from "gsap";

const ProductMenu = ({ products, onHoverChange }) => {
  return (
    <div className={ProductMenuStyles.menuContainer}>
      {products.map((product, index) => (
        <div
          key={index}
          onMouseEnter={() => onHoverChange(true)}
          // onMouseLeave={() => onHoverChange(false)}
        >
          {product}
        </div>
      ))}
    </div>
  );
};

export default function ProductMenuHeader() {
  const dropDownRef = useRef(null);

  const products = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Airpods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  const handleHoverChange = (hoverState) => {
    if (hoverState) {
      gsap.from(dropDownRef.current, {
        duration: 0.3,
        opacity: 1,
        y: 0,
        display: "block",
      });
    } else {
      gsap.to(dropDownRef.current, {
        duration: 0.3,
        opacity: 0,
        y: -50,
        display: "none",
      });
    }
  };

  return (
    <>
      <section className={ProductMenuStyles.mainContainer}>
        <div className={ProductMenuStyles.productContainer}>
          <div className={ProductMenuStyles.icon}>
            <FaApple size={17} />
          </div>

          <div className={ProductMenuStyles.menuContainer}>
            <ProductMenu products={products} onHoverChange={handleHoverChange} />
          </div>

          <div className={ProductMenuStyles.linkIconContainer}>
            <div>
              <BsSearch size={13.5} />
            </div>
            <div>
              <IoBagOutline size={17} />
            </div>
            <div className={ProductMenuStyles.listContainer}>
              <LuEqual size={17} />
            </div>
          </div>
        </div>
      </section>
      <div
        ref={dropDownRef}
        style={{
          display: "none",
          opacity: 0,
          position: "fixed",
          top: "48px", 
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <DropDownHeader />
      </div>
    </>
  );
}
