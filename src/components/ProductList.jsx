import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../app/features/auth/authSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false)
    const [cartCount, setCartCount] = useState(0);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])

    const handlelogout = () => {
        dispatch(logout());
        navigate('/');
    }
    const handleShowDetails = () => {
        setShowDetails(!showDetails)

    }
    const products = [
        {
            id: 1,
            name: "Hydrience Body Hydration Oil",
            desc: "Ceramides & Niacinamide",
            price: 48,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
        },
        {
            id: 2,
            name: "Face Hydration Cream",
            desc: "Hyaluronic Acid & Glycerin",
            price: 36,
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400",
        },
        {
            id: 3,
            name: "HA+ Hydration Serum",
            desc: "Hyaluronic Acid & Panthenol",
            price: 49,
            image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=400",
        },
        {
            id: 4,
            name: "5-Layer Hydration Toner",
            desc: "Hyaluronic Acid & Aloe Vera",
            price: 52,
            image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=400",
        },
    ];

    if (!user) return null;

    return (
        <div className='min-h-screen bg-white text-zinc-900 p-8'>
            <nav className="border-b border-gray-100 sticky top-0 bg-white z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => navigate("/")}>
                        Tarmeya
                    </h1>
                    <div className="flex items-center gap-6">
                        <span className="text-sm font-bold text-zinc-900">Hello, {user?.fullName || 'Guest'}</span>
                        <button className="text-sm font-medium hover:text-purple-600">All Products</button>
                        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                            <span className="text-sm font-medium">Cart ({cartCount})</span>
                        </div>
                        <button className="text-sm font-medium hover:text-purple-600" onClick={handlelogout}>Logout</button>
                    </div>
                </div>
            </nav>
            <header>
                <div className="max-w-6xl mx-auto px-7 py-7">
                    <h1 className="text-3xl font-bold tracking-tight">Our Products</h1>
                    <p className="text-sm text-gray-500 mt-2 max-w-lg">
                        Carefully curated skincare essentials for your daily routine.<br /> Clean, effective, and simple.
                    </p>
                </div>
            </header>
            <main className="max-w-6xl mx-auto px-7 pb-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-50 mb-4 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Button ON image */}
                                <button
                                    onClick={handleShowDetails}
                                    className="absolute bottom-2 left-2 bg-white border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white px-3 py-1 rounded text-sm shadow"
                                >
                                    More Details
                                </button>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-gray-900 leading-tight">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500">{product.desc}</p>
                                <p className="text-sm font-bold text-gray-900 pt-1">${product.price}</p>
                                <button
                                    onClick={() => setCartCount(prev => prev + 1)}
                                    className="w-full mt-4 bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <footer className='max-w-6xl mx-auto justify-center text-center px-6 py-6'>
                <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                    &copy; 2024 SHOP. All Rights Reserved.
                </p>
            </footer>
        </div>
    )
}

export default ProductList