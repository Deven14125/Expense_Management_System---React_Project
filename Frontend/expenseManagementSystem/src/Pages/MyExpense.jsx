import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const MyExpense = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0); // State to store total
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const api_url = "http://localhost:7220/expense/getExpense";

    useEffect(() => {
        fetch(api_url, { method: "GET" })
            .then((response) => response.json())
            .then((res) => {
                setData(res);
                calculateTotal(res);
            });
    }, []);

    const handleUpdate = (expense) => {
        navigate('/addExpense', { state: { expense } });
    };

    const handleDelete = (productId) => {
        const delete_url = `http://localhost:7220/expense/deleteExpense/${productId}`;
        fetch(delete_url, { method: "DELETE" })
            .then((res) => res.json())
            .then(() => {
                const updatedData = data.filter(exp => exp.productId !== productId);
                setData(updatedData);
                calculateTotal(updatedData); // Recalculate total after deletion
            });
    };

    const calculateTotal = (expenses) => {
        const totalValue = expenses.reduce((acc, exp) => acc + parseFloat(exp.price || 0), 0);
        setTotal(totalValue);
    };

    // Function to handle "Read More" click
    const handleReadMore = (expense) => {
        setSelectedProduct(expense); // Set the selected product for viewing more details
    };

    const formattedExpense = data.map((exp) => {
        return (
            <tr key={exp._id} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4">{exp.productId}</td>
                <td className="px-6 py-4">{exp.productName}</td>
                <td className="px-6 py-4">₹{exp.price}</td> {/* Adding ₹ symbol for price */}
                <td className="px-6 py-4">
                    <button
                        className="px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-cyan-600 mr-2"
                        onClick={() => handleReadMore(exp)} // Open the modal for "Read More"
                    >
                        Read More
                    </button>
                    <button
                        className="px-4 py-2 bg-rose-400 text-white rounded-md hover:bg-yellow-600 mr-2"
                        onClick={() => handleUpdate(exp)}
                    >
                        Edit
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(exp.productId)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-slate-800">
                <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
                    <button className="bg-emerald-300 rounded-lg p-3 hover:bg-lime-300">
                        <Link to='/addExpense'>Add Expense</Link>
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Expense List</h2>
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr className="w-full bg-gray-200 text-left">
                                <th className="px-6 py-3 text-gray-700">Product ID</th>
                                <th className="px-6 py-3 text-gray-700">Product Name</th>
                                <th className="px-6 py-3 text-gray-700">Price</th>
                                <th className="px-6 py-3 text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>{formattedExpense}</tbody>
                    </table>
                    <div className="mt-6 text-right">
                        <h3 className="text-xl font-semibold text-gray-700">Total: ₹{total.toFixed(2)}</h3> {/* Updated total with ₹ symbol */}
                    </div>
                </div>
            </div>

            {/* Modal for displaying product details (Image and description) */}
            {selectedProduct && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Product Details</h3>
                        <img src={selectedProduct.imageUrl} alt={selectedProduct.productName} className="w-64 h-64 object-cover mb-4" />
                        <p className="mb-4">{selectedProduct.description}</p>
                        <button
                            onClick={() => setSelectedProduct(null)} // Close the modal
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyExpense;
