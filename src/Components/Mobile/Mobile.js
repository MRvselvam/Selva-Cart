import React, { useEffect, useState } from "react";
import "./Mobile.css";
import { Link } from "react-router-dom";

const Mobile = () => {
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const jsonData = await res.json();
    console.log(jsonData.products);
    setMobileData(jsonData.products);
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {mobileData.map((data, index) => (
          <Link
            to={`/MobileDetails/${data.id}`}
            key={data.id}
            style={{ textDecoration: "none" }}
          >
            <div key={index} className="col">
              <div className="card p-3">
                <img
                  src={data.thumbnail}
                  className="card-img "
                  alt="Mobile-Img"
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text badge bg-success p-2">
                    Rating: {data.rating}
                  </p>
                  <h6 className="card-text ">
                    Price: ${data.price}{" "}
                    <span className=" text-danger">
                      {data.discountPercentage}% off
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
