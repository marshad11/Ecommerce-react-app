import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/index";

function ItemList(props) {
  const dispatch = useDispatch();
  const adddata = (data) => {
    dispatch(addCart(data));
  };

  return (
    <>
      <div className="col-md-6">
        <img
          src={props.item.image}
          alt={props.item.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">
          {props.item.category}
        </h4>
        <h1 className="display-5">{props.item.title}</h1>
        <p className="lead fw-bolder">
          Rating {props.item.rating && props.item.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">$ {props.item.price}</h3>
        <p className="lead">{props.item.description}</p>
        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => adddata(props.item.length)}
        >
          Add to Cart
        </button>
        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go to Cart
        </NavLink>
      </div>
    </>
  );
}

export default ItemList;
