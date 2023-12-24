import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  const handleAddToCart = () => {};
  return (
    <div>
      <div
        className="card mt-3"
        style={{ width: "18rem", maxHeight: "450px", textJustify: "fill" }}
      >
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt=""
          style={{ height: "200px", objectFit: "fill" }}
        />

        <div className="card-body">
          <h5 className="card-title text-info">{props.foodName}</h5>
          <p className="card-text fst-italic small">{props.des}</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded">
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-primary rounded">
              {priceOptions.map((price) => {
                return (
                  <option key={price} value={price}>
                    {price}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-6">Total Price</div>
          </div>
        </div>
        
        <button
          className={`btn btn-warning justify-center px-2`}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
