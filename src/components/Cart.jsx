import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromCart, updateQuantity } from '../app/features/cart/cartSlice'
import Navbar from './Navbar'

const Cart = () => {
    const { items } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = items.length > 0 ? (subtotal > 100 ? 0 : 15) : 0
    const total = subtotal + shipping

    const handleBackToShop = () => {
        navigate('/product-list')
    }

    return (
        <div className="min-h-screen bg-[#FDFDFD] text-zinc-900">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Your Bag</h1>
                        <p className="text-zinc-500 mt-2 font-medium">
                            {items.length === 0
                                ? "Items you add to your bag will appear here."
                                : `You have ${items.length} ${items.length === 1 ? 'item' : 'items'} ready for checkout.`}
                        </p>
                    </div>
                    {items.length > 0 && (
                        <button
                            onClick={handleBackToShop}
                            className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-2 transition-colors border-b border-zinc-200 hover:border-zinc-900 pb-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Continue Shopping
                        </button>
                    )}
                </div>

                {items.length > 0 ? (
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Cart Items List */}
                        <div className="flex-1 space-y-10">
                            {items.map((item) => (
                                <div key={item.id} className="flex flex-col sm:flex-row gap-8 pb-10 border-b border-zinc-100 group">
                                    {/* Image */}
                                    <div className="w-full sm:w-40 aspect-[5/5] bg-zinc-50 rounded-2xl overflow-hidden flex-shrink-0 relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-zinc-900 mb-1">{item.name}</h3>
                                                <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
                                            </div>
                                            <p className="text-xl font-bold text-zinc-900">${item.price * item.quantity}</p>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center bg-zinc-50 rounded-xl p-1.5 border border-zinc-100">
                                                <button
                                                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
                                                    className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all text-zinc-400 hover:text-zinc-900"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <span className="w-10 text-center font-bold text-sm text-zinc-900">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
                                                    className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all text-zinc-400 hover:text-zinc-900"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="text-xs font-bold text-zinc-400 hover:text-red-500 uppercase tracking-widest transition-colors py-2"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-[400px]">
                            <div className="bg-zinc-900 text-white rounded-[2rem] p-10 lg:sticky lg:top-24 shadow-2xl shadow-zinc-200">
                                <h3 className="text-2xl font-bold mb-8">Summary</h3>

                                <div className="space-y-5 mb-10 overflow-hidden">
                                    <div className="flex justify-between items-center text-zinc-400 font-medium">
                                        <span>Subtotal</span>
                                        <span className="text-white">${subtotal}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-zinc-400 font-medium">
                                        <span>Shipping</span>
                                        <span className="text-white">
                                            {shipping === 0 ? "Complimentary" : `$${shipping}`}
                                        </span>
                                    </div>
                                    <div className="h-px bg-zinc-800 my-2"></div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-lg font-medium">Total</span>
                                        <span className="text-3xl font-bold tracking-tighter">${total}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/place-order')}
                                    className="w-full bg-white text-zinc-900 py-5 rounded-2xl font-bold text-base hover:bg-zinc-100 transition shadow-lg active:scale-[0.98]"
                                >
                                    Proceed to Checkout
                                </button>

                                <p className="text-center text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-8">
                                    Secure Checkout Guaranteed
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mb-8">
                            <svg className="w-10 h-10 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Your Bag is Empty</h2>
                        <p className="text-zinc-500 max-w-sm mb-10 leading-relaxed font-medium">
                            Looks like you haven't added anything yet. Explore our curated collections to find your essentials.
                        </p>
                        <button
                            onClick={handleBackToShop}
                            className="bg-zinc-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition shadow-xl shadow-zinc-200 active:scale-95"
                        >
                            Start Shopping
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Cart