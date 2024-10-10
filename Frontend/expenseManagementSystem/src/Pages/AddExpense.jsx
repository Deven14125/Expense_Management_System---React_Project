import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const AddExpense = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Prefill form with existing data if it's passed in
    const [data, setData] = useState({
        productId: "",
        productName: "",
        price: "",
        imageUrl: "",
        description: ""
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (location.state && location.state.expense) {
            setData(location.state.expense);
        }
    }, [location.state]);

    const handleCreateOrUpdate = () => {
        // Validation: All fields must be filled
        if (!data.productId || !data.productName || !data.price || !data.imageUrl || !data.description) {
            setError("All fields are required.");
            return;
        }

        // Clear previous errors
        setError(null);
        setLoading(true); // Set loading to true during request

        // Determine whether to add a new expense (POST) or update an existing one (PATCH)
        const isUpdate = !!data._id; // Checks if _id exists, which indicates an update

        const api_url = isUpdate
            ? `http://localhost:7220/expense/updateExpense/${data.productId}`
            : `http://localhost:7220/expense/addExpense`;

        fetch(api_url, {
            method: isUpdate ? "PATCH" : "POST", // Use PATCH for update, POST for add
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                setLoading(false);
                if (!res.ok) {
                    // Throwing error with more details
                    throw new Error(`Failed to ${isUpdate ? "update" : "add"} expense. Status: ${res.status}`);
                }
                return res.json();
            })
            .then(() => {
                navigate('/myExpense'); // Redirect after successful operation
            })
            .catch(err => {
                setLoading(false);
                setError(err.message); // Show error message
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-800">
            <div className="w-full max-w-lg p-6 bg-green-200 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {data._id ? "Update Expense" : "Add Expense"}
                </h2>
                <button className="bg-teal-800 hover:bg-cyan-700 text-white rounded-lg p-3">
                    <Link to='/myExpense'>Back</Link>
                </button>

                {error && (
                    <div className="mb-4 p-2 bg-red-100 text-red-800 rounded">
                        {error}
                    </div>
                )}

                {/* Product ID Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="id">
                        Product ID
                    </label>
                    <input
                        type="text"
                        id="id"
                        value={data.productId}
                        onChange={(e) => setData({ ...data, productId: e.target.value })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-green-400"
                        placeholder="Enter Product ID"
                    />
                </div>

                {/* Product Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.productName}
                        onChange={(e) => setData({ ...data, productName: e.target.value })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-green-400"
                        placeholder="Enter Product Name"
                    />
                </div>

                {/* Price Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        value={data.price}
                        onChange={(e) => setData({ ...data, price: e.target.value })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-green-400"
                        placeholder="Enter Price"
                    />
                </div>

                {/* Image URL Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="imageUrl">
                        Product Image URL
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={data.imageUrl}
                        onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-green-400"
                        placeholder="Enter Product Image URL"
                    />
                </div>

                {/* Description Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
                        Product Description
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-green-400"
                        placeholder="Enter Product Description"
                        rows="4"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="button" // Changed to 'button' since it's not a submit form
                    onClick={handleCreateOrUpdate}
                    className="w-full py-2 px-4 bg-rose-300 text-white font-semibold rounded-md transition duration-300 hover:bg-cyan-500"
                    disabled={loading} // Disable button when loading
                >
                    {loading ? "Processing..." : data._id ? "Update" : "Add"}
                </button>
            </div>
        </div>
    );
};

export default AddExpense;
