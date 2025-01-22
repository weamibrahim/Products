import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../Context/TokenContext";

function AddProduct() {
    const navigate = useNavigate();
    const { accessToken } = useToken();
    const [inputs, setInputs] = useState({
        name: "",
        category: "",
        price: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://products-mauve-nine.vercel.app/product/create",
                inputs,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                console.log("Product created successfully");
                navigate("/");
            }
        } catch (err) {
            console.error("Error creating product:", err.response?.data || err.message);
        }
    };

    return (
        <div className="my-5">
            <form className="form m-auto my-4 px-3" style={{ maxWidth: "400px" }}>
                <h1 className="text-center">Create Product</h1>
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
                            <option value="">Select Category</option>
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
                        <button onClick={handleClick} className="btn btn-primary my-3">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
