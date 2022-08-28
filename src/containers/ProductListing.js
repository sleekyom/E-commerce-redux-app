import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .catch(error => {
        return error
      })
    dispatch(setProducts(res.data));
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
