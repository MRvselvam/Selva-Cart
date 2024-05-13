import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const LaptopDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/category/laptops" + productId);
    const jsonData = await res.json();
    console.log(jsonData.products);
  };
  return <div></div>;
};

export default LaptopDetail;
