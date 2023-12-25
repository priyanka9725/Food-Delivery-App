import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  let items = useCart();
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false);
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bolder" to="/">
            DesiCravings
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-4"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-4"
                    aria-current="page"
                    to="/"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn bg-white text-primary mx-1 fw-bold"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="btn bg-white text-primary fw-bold mx-1"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className=" btn bg-success text-white mx-2 fw-medium"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart {"  "}
                  <Badge pill bg="danger">
                    {items.length}
                  </Badge>
                </div>
                {cartView ? (
                  <Modal
                    onClose={() => {
                      setCartView(false);
                    }}
                  >
                    <Cart />
                  </Modal>
                ) : null}

                <div
                  className=" btn bg-danger text-white mx-2 fw-medium"
                  onClick={handleLogOut}
                >
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
