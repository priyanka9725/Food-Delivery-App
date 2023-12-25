import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [Category, setCategory] = useState([]);
  const [Item, setItem] = useState([]);
  const [Search, setSearch] = useState("");

  const getData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setItem(response[0]);
    setCategory(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "16" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={Search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?pizza"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?burger"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?pastry"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?biryani"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        {Category !== []
          ? Category.map((data) => {
              return (
                <div className="row mb-3 text-white">
                  <div key={data._id} className="fs-2 m-3">
                    {data.CategoryName}
                  </div>

                  <hr />
                  {Item !== [] ? (
                    Item.filter(
                      (foodItems) =>
                        foodItems.CategoryName === data.CategoryName &&
                        foodItems.name
                          .toLowerCase()
                          .includes(Search.toLocaleLowerCase())
                    ).map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            Item={filterItems}
                            options={filterItems.options[0]}
                          ></Card>
                        </div>
                      );
                    })
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <Footer />
    </div>
  );
}
