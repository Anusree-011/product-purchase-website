import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/features/auth/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const { count } = useSelector((state) => state.cart);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    if (!user) return null;

    return (
        <nav className="border-b border-gray-100 sticky top-0 bg-white z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <h1 className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => navigate("/")}>
                    Tarmeya
                </h1>
                <div className="flex items-center gap-6">
                    <span className="text-sm font-bold text-zinc-900">Hello, {user?.fullName || 'User'}</span>
                    <button className="text-sm font-medium hover:text-purple-600 cursor-pointer" onClick={() => navigate("/product-list")}>
                        All Products
                    </button>
                    <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                        <span className="text-sm font-medium">Cart ({count})</span>
                    </div>
                    <button className="text-sm font-medium hover:text-purple-600 cursor-pointer" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
