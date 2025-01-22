import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { useToken } from "../Context/TokenContext";

function ViewProducts() {
  
  const [products, setProducts] = useState([]);
  const { accessToken } = useToken();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:7000/product/all',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setProducts(response.data); 
    } catch (error) {
      console.error("Error fetching products:", error.response?.data || error.message);
    }
  };



  return (
    <>
      <div className="container my-1">
        <button className="btn btn-success mt-5">
          <NavLink className="text-white text-decoration-none" to="/create">
            Create
          </NavLink>
        </button>
        <div className="table-responsive mx-auto mt-3 shadow mb-5 bg-body rounded">
          <table className="table">
            <thead className="table-secondary">
              <tr>
                <th scope="col">#</th>
                
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <th scope="row">{index + 1}</th>
                  
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>
                    <NavLink to={`/update/${product._id}`} className="btn btn-primary me-2">
                      <FaRegEdit className="fs-3" />
                    </NavLink>
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
}

export default ViewProducts;
