import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="shadow-lg bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-80">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <Link to="/home" className="flex items-center text-2xl font-bold text-green-400 neon-text hover:text-cyan-400 transition duration-300">
                                <img src="./download.png" className="h-10 w-10 mr-2" />
                                Expense System
                            </Link>
                        </div>

                        {/* Primary Nav Links */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link to="/home" className="py-2 px-4 text-green-400 neon-text hover:text-cyan-400 transition duration-300 hover:glow-effect">
                                Home
                            </Link>
                            <Link to="/myExpense" className="py-2 px-4 text-green-400 neon-text hover:text-cyan-400 transition duration-300 hover:glow-effect">
                                My Expense
                            </Link>
                        </div>

                        {/* Mobile Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-green-400 focus:outline-none neon-text"
                            >
                                <svg
                                    className="w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} duration-500 ease-in-out bg-slate-800 backdrop-blur-lg bg-opacity-70 fixed inset-y-0 left-0 w-64 z-50`}>
                    <div className="p-4">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-red-500 transition duration-300"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4 text-lg p-4">
                        <Link to="/home" className="text-green-400 neon-text hover:text-cyan-400 transition duration-300" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link to="/myExpense" className="text-green-400 neon-text hover:text-cyan-400 transition duration-300" onClick={toggleMenu}>
                            My Expense
                        </Link>
                        <Link to="/addExpense" className="text-green-400 neon-text hover:text-cyan-400 transition duration-300" onClick={toggleMenu}>
                            Add Expense
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Outlet for other components */}
            <Outlet />
        </>
    );
};

export default Navbar;
