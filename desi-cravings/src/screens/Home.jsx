import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Important Text</p>
            <div className="container w-100">
              <select className="m-2 h-100 w-100 bg-success">{Array.from(Array(6), (e,x)=>{
                return(
                  <option key={x+1} value={x+1}> x+1 </option>
                )
              })}</select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
