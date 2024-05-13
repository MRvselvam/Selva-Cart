import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Laptop = () => {
  const [laptopData, setLaptopData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/category/automotive");
    const jsonData = await res.json();
    console.log(jsonData.products);
    setLaptopData(jsonData.products);
  };
  return (
    <div className="container-fluid mt-3 ">
      <div className="row ">
        {laptopData.map((data) => (
          <div key={data.id} className="col">
            <Link to={`/LaptopDetail/${data.id}`} style={{ textDecoration: "none" }}>
              <article className="card mb-3">
                <img src={data.thumbnail} alt="laptop-img" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text badge bg-success p-2">{data.rating}</p>
                  <h6 className="card-text">
                    Price: {data.price} &nbsp; <span className="text-danger">{data.discountPercentage}% off</span>
                  </h6>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptop;
