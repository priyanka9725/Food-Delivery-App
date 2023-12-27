import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  let navigate = useNavigate();
  let dispatch = useDispatchCart();
  let options = props.options;
  let data = useCart();
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();

  const handleClick = () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  };

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.Item._id) {
        food = item;

        break;
      }
    }
    console.log(food);
    console.log(new Date());
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.Item._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.Item._id,
          name: props.Item.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.Item.img,
        });
        // console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.Item._id,
      name: props.Item.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.Item.img,
    });
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "450px" }}>
        <img
          src={props.Item.img}
          className="card-img-top"
          alt=""
          style={{ height: "200px", objectFit: "fill" }}
        />

        <div className="card-body">
          <h5 className="card-title text-info">{props.Item.name}</h5>
          <p className="card-text fst-italic small">{props.Item.description}</p>
          <div className="container w-100">
            <select
              className="m-2 h-100  bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 bg-primary rounded"
              ref={priceRef}
              style={{ select: "#FF0000" }}
              onChange={(e) => setSize(e.target.value)}
              onClick={handleClick}
            >
              {priceOptions.map((i) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-6">₹{finalPrice}/-</div>
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
