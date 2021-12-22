import React from "react";
import "./CollectionCard.css";
import weth from "../assets/weth.png";

function CollectionCard({ id, name, traits, image }) {
  return (
    <div className="collection-card">
      <img src={image} alt=""></img>
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
      </div>
      <div className="price-container">
        <img src="images/weth.png" className="weth-image" alt=""></img>
        <div className="price">{traits[0]?.value}</div>
      </div>
    </div>
  );
}

export default CollectionCard;
