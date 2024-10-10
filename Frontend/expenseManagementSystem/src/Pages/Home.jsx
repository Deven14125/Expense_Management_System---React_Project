const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-red-300 text-slate-800 py-16 ">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Expense Management System</h1>
                    <p className="text-lg">
                        Manage and track your expenses easily. Our system helps you organize your finances by tracking your product expenses, comparing prices, and monitoring your spending habits.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-cyan-300 container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Why Use Our Expense Management System?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Feature 1 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <img
                            src="https://egenius.in/wp-content/uploads/2022/10/EXPENSE-MANAGEMENT-1536x864.png"
                            alt="Track Expenses"
                            className="w-full h-50 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">Track Your Expenses</h3>
                        <p className="text-gray-700">
                        Rapid structural and setting shifts have been occurring in schools. Due to the abundance of activities that take place at schools, the administration frequently has trouble keeping track of the costs.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <img
                            src="https://img.omnicard.in/blog_images/2023092611304688087552-What_is_Expense_Management.png"
                            alt="Compare Prices"
                            className="w-full h-44 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">Compare Prices</h3>
                        <p className="text-gray-700">
                        Expense Tracking: Recording and categorizing all expenditures, whether they are related to operational costs, employee expenses, travel and expense, supplies, utilities, or any other form of spending.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <img
                            src="https://img.omnicard.in/blog_images/2023092611294611861633-How_Does_an_Expense_Management_system_Work.png"
                            alt="Financial Insights"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">Gain Financial Insights</h3>
                        <p className="text-gray-700">
                            Get visual insights into your spending habits with our analytics dashboard. Monitor your financial health over time.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <p className="text-lg font-semibold">Expense Management System</p>
                    <p className="text-sm">
                        © {new Date().getFullYear()} Expense Management System. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Home;
