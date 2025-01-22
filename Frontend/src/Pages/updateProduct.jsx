import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useToken } from "../Context/TokenContext";

function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { accessToken } = useToken();
  const [inputs, setInputs] = useState({
    name: "",
    category: "",
    price: "",
  });

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:7000/product/${id}`, 
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const product = res.data;
        console.log(product);
        setInputs({
          name: product.name,
          category: product.category,
          price: product.price,
        });
      } catch (err) {
        console.error("Error fetching product:", err.response?.data || err.message);
      }
    };

    fetchProduct();
  }, [id, accessToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:7000/product/update/${id}`,
        inputs,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Product updated successfully");
        navigate("/"); 
      }
    } catch (err) {
      console.error("Error updating product:", err.response?.data || err.message);
    }
  };

  return (
    <div className="my-5">
      <form className="form m-auto my-4 px-3" style={{ maxWidth: "400px" }}>
        <h1 className="text-center">Update Product</h1>
        <div className="p-5 bg-body-secondary rounded-4">
          <div>
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="form-label">Category</label>
            <select
              className="form-select"
              name="category"
              value={inputs.category}
              onChange={handleChange}
              required
            >
              <option value="Formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <div>
            <label className="form-label">Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={inputs.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary my-3" onClick={handleClick}>
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
