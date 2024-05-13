import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MobileDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  console.log(productId);

  const [mobileDetailData, setMobileDetailData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      'https://dummyjson.com/products/category/smartphones' + productId
    );
    const jsonData = await res.json();
    console.log(jsonData.product);
    setMobileDetailData(jsonData.product);
  };
  return (
    <div className="container ">
      ddd
      <div className="col">
        <div className="card p-3">
          <img
            src={mobileDetailData.thumbnail}
            className="card-img "
            alt="Mobile-Img"
          />
          <div className="card-body">
            <h5 className="card-title">{mobileDetailData.title}</h5>
            <p className="card-text badge bg-success p-2">
              Rating: {mobileDetailData.rating}
            </p>
            <h6 className="card-text ">
              Price: ${mobileDetailData.price}{" "}
              <span className=" text-danger">
                {mobileDetailData.discountPercentage}% off
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDetail;
